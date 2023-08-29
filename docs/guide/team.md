---
layout: doc
outline: deep
title: 关于我们
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

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
    name: 'IMZCC',
    title: '技术',
    links: [
      { icon: 'github', link: 'https://github.com/IMZCC' },
    ]
  }  
]
</script>

# 我们的团队

专业团队.

<VPTeamMembers size="small" :members="members" />