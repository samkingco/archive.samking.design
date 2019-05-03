import pkg from './package.json';
import projects from './content/dist/projects.json';
import history from './content/dist/history.json';

export default {
  plugins: ['react-static-plugin-reach-router', 'react-static-plugin-emotion'],
  productionSourceMaps: true,
  siteRoot: 'https://samking.design',
  getSiteData: async () => ({
    version: pkg.version,
    email: 'mail@samking.co',
    twitter: 'samkingco',
    github: 'samkingco',
    repo: 'samking.design',
    location: 'London',
    latlong: '51.54579°N 0.05542°W',
  }),
  getRoutes: async () => {
    const projectRoutes = [
      {
        path: '/',
        template: 'src/pages/Index',
        getData: () => ({
          projects: projects.map(({ content, ...project }) => project),
          history,
        }),
        children: projects.map(project => ({
          path: `${project.slug}`,
          template: 'src/pages/Project',
          getData: () => ({
            ...project,
            relatedProjects: projects
              .filter(p => p.slug !== project.slug)
              .map(({ content, ...project }) => project),
          }),
        })),
      },
    ];

    const notfoundRoute = {
      path: '404',
      template: 'src/pages/NotFound',
    };

    return [...projectRoutes, notfoundRoute];
  },
};
