const path = require('path')
const moment = require('moment')
const container = require('markdown-it-container')

module.exports = {
  base:'/books/',
  dest: 'books',
  port:8000,
  host:'0.0.0.0',
  title: "Lin Books",
  description: 'This is Lin books',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  markdown: {
    lineNumbers: true
  },
  evergreen: true,
  activeHeaderLinks: true,
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/container', true],
    ['@vuepress/nprogress', true],
    ['@vuepress/active-header-links', true],
    ['@vuepress/register-components', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/google-analytics', {
      ga: 'UA-131334453-1'
    }],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ]
  ],
  themeConfig: {
    repo: undefined,
    label: '简体中文',
    selectText: '选择语言',
    avatar:'/hero.png',
    search:true,
    lastUpdated: "上次更新",
    editLinks:false,
    nav: require('./nav/index'),
    sidebar: {
      "/lin/lin-ui/": [
        {
          title: "小程序入门与入门",
          children: [
            "/lin/lin-ui/eleven/",
            "eleven/eleven"
          ]
        },
      ]
    }
  },
}

