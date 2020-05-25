import { firstRole, secondRole } from '@/config/route.config'
// 关于导航栏的配置文件
export const navList = [
  {
    name: '概要Main',
    iconType: 'home',
    role: [firstRole, secondRole],
    children: [
      {
        role: [firstRole, secondRole],
        name: '主页',
        to: '/home'
      },
      {
        role: [firstRole, secondRole],
        name: '控制台',
        to: '/console'
      }
    ]
  },
  {
    name: '表格Table',
    iconType: 'table',
    role: [firstRole, secondRole],
    children: [
      {
        role: [firstRole, secondRole],
        name: '普通分页表格',
        to: '/normalTable'
      },
      {
        role: [firstRole],
        name: '大数据表格',
        to: '/bigDataTable'
      }
    ]
  },
  {
    name: '页面Page',
    iconType: 'appstore',
    role: [firstRole],
    children: [
      {
        role: [firstRole],
        name: '个人主页',
        to: '/userHome'
      },
      {
        role: [firstRole],
        name: '花名册',
        to: '/userList'
      },
      {
        role: [firstRole],
        name: '商品列表',
        to: '/goodsList'
      },
      {
        role: [firstRole],
        name: '登录',
        to: '/login'
      },
      {
        role: [firstRole],
        name: '401',
        to: '/401'
      },
      {
        role: [firstRole],
        name: '404',
        to: '/404'
      },
      {
        role: [firstRole],
        name: '百度一下',
        to: ''
      }
    ]
  },
  {
    name: '图表charts',
    role: [firstRole],
    iconType: 'area-chart',
    children: [
      {
        role: [firstRole],
        name: '折线图',
        to: '/lineChart'
      },
      {
        role: [firstRole],
        name: '饼状图',
        to: '/pieChart'
      }
    ]
  }
]
