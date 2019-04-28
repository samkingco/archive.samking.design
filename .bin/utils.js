const path = require('path');
const crypto = require('crypto');
const { promisify } = require('util');
const fs = require('fs-extra');
const remark = require('remark')();
const sizeOf = promisify(require('image-size'));

function slugify(baseName) {
  return baseName
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

async function writeContentJSON(dir, name, data) {
  return await fs.outputFile(
    path.resolve(dir, name),
    JSON.stringify(data, null, 2),
  );
}

async function readDimensions(image) {
  return await sizeOf(image)
    .then(({ width, height }) => ({ width, height }))
    .catch(_ => console.error('ERROR: getting dimensions of image', image));
}

async function processImages(images, imagesSrc, imagesDest) {
  const imagePath = image => path.resolve(imagesSrc, image);

  const getImageData = images.map(async ({ src }) => ({
    hash: await fs.readFile(imagePath(src)).then(data =>
      crypto
        .createHash('sha1')
        .update(data, 'utf8')
        .digest('hex')
        .slice(0, 8),
    ),
    dimensions: await readDimensions(imagePath(src)),
  }));

  const allImageData = await Promise.all(getImageData);

  return allImageData.map(({ hash, dimensions }, index) => {
    const originalImage = images[index];
    const { src } = originalImage;
    const { width, height } = dimensions;

    const extension = src.substring(src.lastIndexOf('.') + 1, src.length);

    return {
      src: `${imagesDest}/${hash}.${extension}`,
      width,
      height,
      ratio: height / width,
      // Only used for publishing the images.
      // Will be stripped before it goes into the API
      meta: {
        hash,
        src,
        path: imagePath(src),
        publishedFileName: `${hash}.${extension}`,
      },
    };
  });
}

async function copyImages(images, dest) {
  await fs.ensureDir(dest);

  const copyImagesOperation = images.map(image =>
    fs.copyFile(
      image.meta.path,
      path.resolve(dest, image.meta.publishedFileName),
    ),
  );

  await Promise.all(copyImagesOperation).catch(err =>
    console.error('ERROR: failed to copy images', err),
  );
}

const getImageListFromMarkdown = content => {
  const ast = remark.parse(content);

  const getImages = list =>
    list.reduce((imageList, node) => {
      if (node === null) return imageList;

      if (node.children && Array.isArray(node.children)) {
        return [...imageList, ...getImages(node.children)];
      }

      if (node.type === 'image' && !node.url.startsWith('http')) {
        return [...imageList, { src: node.url }];
      }

      return imageList;
    }, []);

  return getImages([ast]);
};

const parseMarkdown = (content, imageTransformData) => {
  const ast = remark.parse(content);

  function transformer(node) {
    if (node === null) return;

    if (Array.isArray(node)) {
      return node.map(transformer);
    }

    const transformedChildren = node.children
      ? transformer(node.children)
      : null;

    const children =
      transformedChildren && transformedChildren.length === 1
        ? transformedChildren[0]
        : transformedChildren;

    // Return arrays to destructure in the format of:
    // [type, children, attributes];

    switch (node.type) {
      case 'root':
        return children;
      case 'heading':
        return [`h${node.depth}`, children];
      case 'text':
        return node.value;
      case 'list':
        return [node.ordered ? 'ol' : 'ul', children];
      case 'listItem':
        return ['li', children];
      case 'paragraph': {
        const childIsImage = Array.isArray(children) && children[0] === 'img';
        return childIsImage ? children : ['p', children];
      }
      case 'link':
        return ['a', children, { title: node.title, href: node.url }];
      case 'image': {
        const imageTransform = imageTransformData.find(
          i => i.meta.src === node.url,
        );

        const isLocal = !node.url.startsWith('http') && imageTransform;

        const src = isLocal ? imageTransform.src : node.url;
        const width = isLocal ? imageTransform.width : null;
        const height = isLocal ? imageTransform.height : null;
        const ratio = isLocal ? imageTransform.ratio : null;

        return [
          'img',
          null,
          {
            caption: node.title,
            alt: node.alt,
            src,
            width,
            height,
            ratio,
          },
        ];
      }
      case 'emphasis':
        return ['em', children];
      case 'strong':
        return ['strong', children];
      case 'inlineCode':
        return ['code', children];
      case 'code':
        return ['pre', ['code', null, node.value], { lang: node.lang }];
      case 'blockquote':
        return ['blockquote', children];
      case 'break':
        return ['br'];
      case 'thematicBreak':
        return ['hr'];
      case 'linkReference':
        return ['span', children];
      default:
        return node;
    }
  }

  return transformer(ast);
};

module.exports = {
  slugify,
  writeContentJSON,
  processImages,
  copyImages,
  getImageListFromMarkdown,
  parseMarkdown,
};
