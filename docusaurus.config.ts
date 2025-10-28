import {themes as prismThemes}  from 'prism-react-renderer';
import type {Config}            from '@docusaurus/types';
import type * as Preset         from '@docusaurus/preset-classic';

const config: Config = {
  title           : 'Kemet',
  tagline         : 'Language of the era',
  favicon         : 'img/favicon.ico',

  url             : 'https://kemet-lang.org',
  baseUrl         : '/',

  organizationName: 'kemet-lang',
  projectName     : 'kemet-lang',

  onBrokenLinks   : 'warn',
  onBrokenAnchors : 'warn',

  markdown        : {
    hooks: { onBrokenMarkdownLinks: 'warn' }
  },

  stylesheets     : [
  ],

  i18n            : {
    defaultLocale : 'en',
    locales       : ['ar', 'en'],

    localeConfigs : {
      ar: {
        label     : 'العربية',
        direction : 'rtl',
      },
      en: {
        label     : 'English',
        direction : 'ltr',
      },
    },
  },

  presets         : [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/kemet-lang/kemet-lang/tree/main/',
          includeCurrentVersion: false
        },

        blog: {
          showReadingTime: true,
        },

        theme: {
          customCss: ['./src/css/custom.css', './src/css/navbar.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig     : {

    image: 'img/kemet-social-card.jpg',

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar  : {
      title : '',
      logo  : {
        alt         : 'Kemet Logo',
        src         : 'img/k-nobg.png',
        height      : 32,
        style       : { marginRight: '0.5rem', }
      },
      items : [
        {
          type      : 'search',
          position  : 'left',
          className : 'navbar_link_label navbar_separator_start',
        },
        {
          type      : 'docSidebar',
          sidebarId : 'docsSidebar',
          position  : 'right',
          label     : 'Docs',
          className : 'navbar_link_label navbar_separator_end',
        },
        {
          to        : '/blog',
          label     : 'Blog',
          position  : 'right',
          className : 'navbar_link_label navbar_separator_end',
        },
        {
          type: 'localeDropdown',
          id: 'localeDropdown',
          position  : 'right',
          dropdownItemsAfter: [],
          queryString: '?persistLocale=true',
          className : 'navbar_link_label',
        },

        {
          type: 'docsVersionDropdown',
          position  : 'right',
          className : 'navbar_link_label docsVersion navbar_separator_start_before', docsPluginId: 'default',
        },
        {
          href      : 'https://github.com/kemet-lang/',
          className : 'header-github-link navbar_link_label header-icon-link nav_social_icon first_social_icon', 'aria-label': 'GitHub repository',
          position  : 'right',
        },
        {
          href      : '#',
          className : 'header-youtube-link navbar_link_label header-icon-link nav_social_icon', 'aria-label': 'Youtube channel',
          position  : 'right',
        },
        {
          href      : '#',
          className : 'header-discord-link navbar_link_label header-icon-link nav_social_icon', 'aria-label': 'Discord channel',
          position  : 'right',
        },
        {
          href      : '#',
          className : 'header-x-link navbar_link_label header-icon-link nav_social_icon', 'aria-label': 'X profile',
          position  : 'right',
        },
      ],
    },

    footer  : {
      style     : 'dark',
      copyright : `Copyright © ${new Date().getFullYear()} Kemet Project.`,
    },

    prism   : {
      theme               : prismThemes.github, // or another theme
      darkTheme           : prismThemes.vsDark, // for dark mode
      additionalLanguages : ['kemet'],          // add your custom language
    },

    algolia: {
      appId             : 'WJSQLB5JYO',
      apiKey            : '888225ecf2dd062f5bf13196709be275',
      indexName         : 'kemet-lang-website',
      contextualSearch  : true,
    },

    tableOfContents: { maxHeadingLevel : 4, },

  } satisfies Preset.ThemeConfig,

};

export default config;