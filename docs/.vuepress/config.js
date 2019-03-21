module.exports = {
  dest: 'books',
  port: 8000,
  locales: {
    '/': {
      lang: 'zh-CN',
      description: 'lin-book'
    }
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: `/logo.png`
      }
    ],
    [
      'link',
      {
        rel: 'manifest',
        href: '/manifest.json'
      }
    ],
    [
      'meta',
      {
        name: 'theme-color',
        content: '#3eaf7c'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: `/icons/apple-touch-icon-152x152.png`
      }
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#000000'
      }
    ]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: '',
    logo: '/left-logo.png',
    editLinks: false,
    lastUpdated: '上次更新',
    docsDir: 'docs',
    locales: {
      '/': {
        nav: [{
            text: '介绍',
            link: '/'
          },
        ],
        sidebar: {
        }
      }
    }
  }
}
