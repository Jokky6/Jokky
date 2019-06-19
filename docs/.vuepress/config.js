module.exports = {
  base: '/books/',
  dest: 'books',
  port: 8000,
  host: '0.0.0.0',
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
  themeConfig: {
    repo: undefined,
    editLinks: false,
    leftLogo:'/left-logo.png',
    lastUpdated: '最后更新',
    activeHeaderLinks:true,
    sidebarDepth: 2,
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: 'lin-ui', link: '/lin/lin-ui/' },
      {
        text: '更多专栏',
        items: [
          {
            text: 'koa2电子书',
            link: '/lin/koa2/'
          },
        ]
      },
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/lin/koa2/':[
        {
          title:'koa2电子书',
          collapsable: true,
          children: [
            '启动koa服务',
            '构建前端页面',
            '搭建后端环境',
            '登录功能',
            '实现员工的增删改查',
            '项目部署',
            '写在最后'
          ]
        }
      ],
      "/lin/lin-ui/": [
        {
          title: "Lin-ui",
          collapsable: true,
          children: [
            "/lin/lin-ui/tutorial/",
            'tutorial/seven',
            'tutorial/eight',
            'tutorial/nine',
            'tutorial/eleven'
          ]
        },
      ]  
    }
  }
}
function koaSidebarConfig(title) {
  return [
    
  ]
}