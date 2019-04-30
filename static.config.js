import pkg from './package.json';
import projects from './content/dist/projects.json';
import history from './content/dist/history.json';

export default {
  plugins: ['react-static-plugin-reach-router', 'react-static-plugin-emotion'],
  getSiteData: async () => ({
    version: pkg.version,
    email: 'mail@samking.co',
    github: 'https://github.com/samisking',
    repo: 'samking.design',
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
          getData: () => project,
        })),
      },
    ];

    const notfoundRoute = {
      path: '*',
      template: 'src/pages/NotFound',
    };

    return [...projectRoutes, notfoundRoute];
  },
};
