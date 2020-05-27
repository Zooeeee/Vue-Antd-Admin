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
        name: '403',
        to: '/403'
      },
      {
        role: [firstRole],
        name: '404',
        to: '/404'
      }
    ]
  },
  {
    name: '工具',
    role: [firstRole],
    iconType: 'tool',
    children: [
      {
        role: [firstRole],
        name: '指令',
        to: '/directives'
      },
      {
        role: [firstRole],
        name: '过滤器',
        to: '/filters'
      }
    ]
  }
]
