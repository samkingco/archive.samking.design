const { sh, cli } = require('tasksfile');
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
  sh(`react-static build ${stage === 'dev' ? '--staging' : ''}`);
}

function analyze() {
  console.log(`Building ${pkg.name} for ${envMap.dev}`);
  sh('react-static build --analyze');
}

function serve(port = PORTS.SERVE_DIST) {
  console.log(`Serving ${pkg.name}`);
  sh(`serve dist -p ${port}`, { async: true });
}

function serveImages() {
  console.log(`Starting ${pkg.name} mock image server`);

  const env = [
    `PORT=${PORTS.IMAGE_SERVER}`,
    `APP_IMAGES_DEST=${PATHS.imagesDest}`,
  ];

  sh(`${env.join(' ')} nodemon ${PATHS.bin}/image-server.js`, { async: true });
}

cli({
  start,
  build: {
    all(stage) {
      buildContent(stage);
      buildSite(stage);
    },
    content: buildContent,
    site: buildSite,
    ci() {
      buildContent('prod');
      buildSite('prod');
    },
  },
  analyze,
  serve,
  serveImages,
});
