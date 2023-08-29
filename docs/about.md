---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1300346951&s=640',
    name: '骚鸭鸭',
    title: '腐竹',
    links: [
      { icon: 'github', link: 'https://github.com/duckkingg' },
    ]
  },
  {
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=528806279&s=640',
    name: '✘✘',
    title: '开发/技术',
    links: [
      { icon: 'github', link: 'https://github.com/IMZCC' },
    ]
  },
  {
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1825231468&s=640',
    name: 'YuanZhong',
    title: '技术',
    links: [
    ]
  },
  {
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=2951831369&s=640',
    name: '梦龙',
    title: '建筑/美工',
    links: [
    ]
  },
  {
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=351361419&s=640',
    name: '灵洛仙榣',
    title: '建筑/美工',
    links: [
    ]
  },
  {
    avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1449892184&s=640',
    name: '兔兔',
    title: '配音',
    links: [
    ]
  }  
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      专业团队.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>