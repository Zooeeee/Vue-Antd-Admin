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
        name: '引导页',
        to: '/guide'
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
  },
  {
    name: '组件',
    role: [firstRole],
    iconType: 'build',
    children: [
      {
        role: [firstRole],
        name: 'CountTo',
        to: '/count-to'
      },
      {
        role: [firstRole],
        name: '富文本编辑器',
        to: '/tinymce'
      },
      {
        role: [firstRole],
        name: '头像上传',
        to: '/avatar-upload'
      },
      {
        role: [firstRole],
        name: '返回顶部',
        to: '/back-top'
      },
      {
        role: [firstRole],
        name: '拖拽',
        to: '/draggable'
      }
    ]
  }
]
