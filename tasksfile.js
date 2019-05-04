const { sh, cli, help } = require('tasksfile');
const pkg = require('./package.json');

const envMap = {
  local: 'development',
  dev: 'development',
  prod: 'production',
};

const PATHS = {
  bin: '.bin',
  dist: 'dist',
  contentSrc: 'content',
  contentDest: 'content/dist',
  imagesDest: 'content/dist/images',
};

const PORTS = {
  SERVE_DIST: 3000,
  IMAGE_SERVER: 4001,
};

const IMAGE_BASE_URLS = {
  dev: 'https://samkingco.imgix.net/design',
  prod: 'https://samkingco.imgix.net/design',
  local: `http://localhost:${PORTS.IMAGE_SERVER}`,
};

function buildContent(_, stage = 'prod') {
  console.log(`Building ${pkg.name} content for ${envMap[stage]}`);

  const env = [
    `NODE_ENV=${envMap[stage]}`,
    `APP_IMAGE_BASE_URLS=${IMAGE_BASE_URLS[stage]}`,
  ];

  sh(`${env.join(' ')} node ${PATHS.bin}/build-content.js`);
}

function start() {
  console.log(`Starting ${pkg.name} for ${envMap.dev}`);
  sh('react-static start', { async: true });
}

function buildSite(_, stage = 'prod') {
  console.log(`Building ${pkg.name} for ${envMap[stage]}`);
  sh('react-static build');
}

function analyze() {
  console.log(`Building ${pkg.name} for ${envMap.dev}`);
  sh('react-static build --analyze');
}

function serve(_, port = PORTS.SERVE_DIST) {
  console.log(`Serving ${pkg.name}`);
  sh(`serve dist -p ${port}`, { async: true });
}

function serveImages(_, port = PORTS.IMAGE_SERVER) {
  console.log(`Starting ${pkg.name} mock image server`);
  const env = [`PORT=${port}`, `APP_IMAGES_DEST=${PATHS.imagesDest}`];
  sh(`${env.join(' ')} nodemon ${PATHS.bin}/image-server.js`, { async: true });
}

help(buildContent, 'Builds content data for a particular environment.', {
  params: ['stage'],
  examples: `
  task build:content
  task build:content prod
    task build:content dev
    task build:content local
  `,
});

help(start, 'Starts a local dev server with hot reloading etc.');

help(buildSite, 'Builds the site for a particular environment.', {
  params: ['stage'],
  examples: `
  task build:site
    task build:site prod
    task build:site dev
    task build:site local
  `,
});

help(analyze, 'Builds the site and analyzes the bundle.', {
  params: ['stage'],
  examples: `
  task analyze
  task analyze prod
  task analyze dev
  task analyze local
  `,
});

help(serve, 'Serves the built site from /dist.', {
  params: ['port'],
  examples: `
  task serve
  task serve 6666
  `,
});

help(serveImages, 'Starts a local server for images with an imgix like API.', {
  params: ['port'],
  examples: `
  task serveImages
  task serveImages 6666
  `,
});

cli({
  start,
  build: {
    content: buildContent,
    site: buildSite,
  },
  analyze,
  serve,
  serveImages,
});
