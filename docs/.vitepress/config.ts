export default {
  lang: 'zh-CN',
  title: '[Salx] 水岸兰香2.0',
  description: '123123123',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  themeConfig: {
    siteTitle: '[Salx] 水岸兰香2.0',
    logo: '/images/flower.svg',
    nav: [
      { text: '首页', link: '/index' },
      { text: '服务器指北', link: '/guide' },
      { text: '官网', link: 'https://www.catmc.cn' },
      {
        // text: '工具',
        items: [
          {
            text: '相关工具',
            items: [
              { text: '服务器地图', link: 'http://catmc.cn:8123' },
            ]
          }
        ]
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '服务器指北',
          collapsed: false,
          items: [
            { text: 'adding', link: '/guide/' },
          ]
        },
        {
          text: '介绍',
          collapsed: false,
          items: [
            { text: '关于服务器', link: '/guide/server' },
            { text: '关于我们', link: '/guide/team' }
          ]
        },
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/IMZCC/Salx-Wiki' },
    ],
    footer: {
      message: '<a href="https://www.catmc.cn">[Salx] 水岸兰香2.0</a>',
      copyright: 'Copyright © 2023-present Saxl2.0'
    }
  }
}