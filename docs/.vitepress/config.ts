export default {
  lang: 'zh-CN',
  title: '[Salx] 水岸兰香3.0',
  description: '123123123',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  themeConfig: {
    siteTitle: '[Salx] 水岸兰香3.0',
    logo: '/images/flower.svg',
    nav: [
      { text: 'Wiki首页', link: '/index' },
      { text: '关于我们', link: '/about' },
      { text: '官网', link: 'https://www.salx.cn' },
      {
        items: [
          {
            items: [
              { text: '服务器地图', link: 'https://map.salx.cn:8443' },
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
            { text: '安装手册', link: '/guide/' },
          ]
        },
        {
          text: '合成',
          collapsed: false,
          items: [
            { text: '原版合成', link: '/guide/ybhc' },
          //  { text: '家具合成', link: '/guide/jjhc' },
            { text: '作物添加', link: '/guide/xlghc' },
            { text: '钓鱼添加', link: '/guide/diaoyu' },
          ]
        },
        {
          text: '装备',
          collapsed: false,
          items: [
            { text: '武器', link: '/guide/wuqi' },
          ]
        },
        {
          text: '玩功能',
          collapsed: false,
          items: [
            { text: 'adding', link: '/guide/' },
        
          ]
        },
        {
          text: '视频',
          collapsed: false,
          items: [
            { text: 'adding', link: '/guide/' },
        
          ]
        },
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/IMZCC/Salx-Wiki' },
    ],
    footer: {
      message: '<a href="https://www.salx.cn">[Salx] 水岸兰香3.0</a>',
      copyright: 'Copyright © 2023-present Saxl3.0'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
}