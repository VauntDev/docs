// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vaunt Developer Documentation',
  tagline: 'Celebrate your developer communities',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://docs.vaunt.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Vaunt', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "./docs",
          routeBasePath: "/",         
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/vauntDev/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/vaunt-social-card.jpeg',
      navbar: {
        logo: {
          alt: 'Vaunt Logo',
          src: 'img/vaunt-nav-logo-light.png',
          srcDark: 'img/vaunt-nav-logo-dark.png',
          href: '/',
        },
        items: [
          { to: '/', label: 'Documentation', position: 'left' },
          {
            href: 'https://github.com/vauntDev/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      metadata: [{ name: 'keywords', content: 'Vaunt, Developer Relations, Community Engagement, Documentation, Tutorial' }],
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Overview',
                to: '/',
              },
              {
                label: 'Installation',
                to: '/introduction/installation',
              },
              {
                label: 'Example',
                href: 'https://github.com/VauntDev/example',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/mn29Xkvry2',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/VauntDev',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/VauntDev',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.vaunt.dev',
              },
              {
                label: 'Vaunt',
                href: 'https://vaunt.dev',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                html: `
                <p>
                Vaunt.dev is a dev community resource tool created by Kochava Studio, the R&D arm of Kochava, Inc
                </p>
              `, 
              },
              {
                label: 'Web Site Privacy Policy',
                href: 'https://www.vaunt.dev',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vaunt Dev`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
