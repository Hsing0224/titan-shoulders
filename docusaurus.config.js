// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '站在巨人肩膀的學習筆記',
  tagline: '寫給未來那個有點印象但記不起來的自己',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://hsing0224.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/titan-shoulders/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'titan-shoulders@Hsing', // Usually your GitHub org/user name.
  projectName: 'Hsing', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Hsing0224/titan-shoulders/tree/master/',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/Hsing0224/titan-shoulders/tree/master/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  markdown: {
    mermaid: true
  },
  themes: [
    '@docusaurus/theme-mermaid'
    // require.resolve('@docusaurus/theme-live-codeblock'),
    // require.resolve('@docusaurus/theme-search-algolia'),
    // require.resolve('@docusaurus/theme-classic'),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      prism: {
        additionalLanguages: ['scss', 'powershell'],
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Hsing',
        logo: {
          alt: 'Hsing\'s Learn Notes',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          { to: '/docs/intro', label: 'Notes', position: 'left' },
          {
            type: 'search',
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'notes',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/Hsing0224',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=1426603291',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hsing Chen, Inc. Built with Docusaurus.`,
      },
    }),
  // plugins: [
  //   [
  //     '@docusaurus/plugin-search-algolia',
  //     {
  //       apiKey: '158d94595f311e3b70133c49bfb0e138',
  //       indexName: 'docusaurus',
  //       searchFields: ['title', 'content'],
  //       searchPaths: ['/docs'],
  //     }
  //   ]
  // ]
};

module.exports = config;
