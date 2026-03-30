module.exports = {
  title: 'DevOps Learning',
  url: 'https://arun-hn.github.io',
  baseUrl: '/devops-interview-prep/',
  onBrokenLinks: 'throw',
  organizationName: 'arun-hn',
  projectName: 'devops-interview-prep',
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Makes docs the homepage
        },
        blog: false,
      },
    ],
  ],
};
