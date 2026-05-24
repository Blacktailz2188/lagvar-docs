// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lagvar Docs',
  tagline: 'Official documentation for Lagvar products',
  favicon: 'img/favicon.ico',

  // 배포 설정
  url: 'https://Blacktailz2188.github.io',
  baseUrl: '/lagvar-docs/',
  organizationName: 'Blacktailz2188',
  projectName: 'lagvar-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false, // 이 줄을 추가하세요!

  // 링크 에러 방지 (최고 단계 무시 설정)
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

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
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'Lagvar',
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'tutorialSidebar',
              position: 'left',
              label: '문서화',
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
                  label: '시작하기',
                  to: '/docs/MRCF/intro/welcome',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Lagvar, Inc. Built with Docusaurus.`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),
};

export default config;