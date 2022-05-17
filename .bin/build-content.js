#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const YAML = require('yamljs');
const {
  slugify,
  writeContentJSON,
  getImageListFromMarkdown,
  parseMarkdown,
  processImages,
  copyImages,
} = require('./utils');

const { APP_IMAGE_BASE_URLS } = process.env;

const DIRS = {
  contentSrc: path.resolve(__dirname, '../content'),
  contentDest: path.resolve(__dirname, '../content/dist'),
  imagesDest: path.resolve(__dirname, '../public/images'),
};

const buildProject = async (project, src, dest) => {
  const markdownImages = getImageListFromMarkdown(project.content);
  const projectImages = project.cover
    ? [{ src: project.cover }, ...markdownImages]
    : markdownImages;

  const processedImages = await processImages(projectImages, src, dest);
  const coverImage = processedImages.find(i => i.meta.src === project.cover);
  const { meta, ...cover } = coverImage;

  return {
    slug: slugify(project.title),
    ...project,
    cover: cover || null,
    content: parseMarkdown(project.content, processedImages),
    images: processedImages,
  };
};

const build = async () => {
  const loadSrc = src => YAML.load(path.resolve(DIRS.contentSrc, src));
  const files = await fs.readdir(DIRS.contentSrc);

  const projectsSrc = files.reduce((projects, file) => {
    if (
      path.extname(file) === '.yml' &&
      path.basename(file, '.yml') !== 'history'
    ) {
      return [...projects, loadSrc(file)];
    }

    return projects;
  }, []);

  const allProjects = await Promise.all(
    projectsSrc.map(
      async project =>
        await buildProject(
          project,
          path.resolve(DIRS.contentSrc, 'images'),
          APP_IMAGE_BASE_URLS,
        ),
    ),
  );

  const projects = allProjects.map(({ images, ...project }) => project);
  const history = loadSrc('history.yml');

  // Write the JSON files
  await writeContentJSON(DIRS.contentDest, 'projects.json', projects);
  await writeContentJSON(DIRS.contentDest, 'history.json', history);

  // Copy to `/public/images`
  await copyImages(
    [...allProjects.reduce((i, project) => [...i, ...project.images], [])],
    DIRS.imagesDest,
  );
};

build();
