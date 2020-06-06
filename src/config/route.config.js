export const firstRole = 'admin'
export const secondRole = 'normal'
export const routerConfig = [{
  path: '/403',
  name: '403',
  meta: { role: [firstRole, secondRole] }, // 页面需要的权限
  component: () => import('@/views/ErrorPage/403.vue')
},
{
  path: '/login',
  name: 'login',
  meta: { role: [firstRole, secondRole] }, // 页面需要的权限
  component: () => import('@/views/Login/Login.vue')
},
{
  path: '/',
  name: 'Layout',
  redirect: '/home',
  meta: { role: [firstRole, secondRole] }, // 页面需要的权限
  children: [
    {
      path: '/home',
      name: 'home',
      meta: {
        role: [firstRole, secondRole],
        des: ['概要', '主页']
      }, // 页面需要的权限
      component: () => import('@/views/Page/Home/Home.vue')
    },
    {
      path: '/guide',
      name: 'guide',
      meta: {
        role: [firstRole, secondRole],
        des: ['概要', '引导页']
      }, // 页面需要的权限
      component: () => import('@/views/Page/Guide/Guide.vue')
    },
    {
      path: '/normalTable',
      name: 'normalTable',
      meta: {
        role: [firstRole, secondRole],
        des: ['表格', '普通表格']
      }, // 页面需要的权限
      component: () => import('@/views/Table/NormalTable/NormalTable.vue')
    },
    {
      path: '/bigDataTable',
      name: 'bigDataTable',
      meta: {
        role: [firstRole],
        des: ['表格', '大数据表格']
      }, // 页面需要的权限
      component: () => import('@/views/Table/BigDataTable/BigDataTable.vue')
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      meta: {
        role: [firstRole],
        des: ['页面', '商品列表']
      }, // 页面需要的权限
      component: () => import('@/views/Page/GoodsList/GoodsList.vue')
    },
    {
      path: '/filters',
      name: 'filters',
      meta: {
        role: [firstRole],
        des: ['工具', '过滤器']
      }, // 页面需要的权限
      component: () => import('@/views/Tool/Filters/Filters.vue')
    },
    {
      path: '/directives',
      name: 'directives',
      meta: {
        role: [firstRole],
        des: ['工具', '指令']
      }, // 页面需要的权限
      component: () => import('@/views/Tool/Directives/Directives.vue')
    },
    {
      path: '/count-to',
      name: 'CountTo',
      meta: {
        role: [firstRole],
        des: ['组件', 'CountTo']
      }, // 页面需要的权限
      component: () => import('@/views/Components/CountTo/CountTo.vue')
    },
    {
      path: '/draggable',
      name: 'Draggable',
      meta: {
        role: [firstRole],
        des: ['组件', 'Draggable']
      }, // 页面需要的权限
      component: () => import('@/views/Components/Draggable/Draggable.vue')
    },
    {
      path: '/back-top',
      name: 'BackTop',
      meta: {
        role: [firstRole],
        des: ['组件', '回到顶部']
      }, // 页面需要的权限
      component: () => import('@/views/Components/BackTop/BackTop.vue')
    },
    {
      path: '/avatar-upload',
      name: 'AvatarUpload',
      meta: {
        role: [firstRole],
        des: ['组件', '头像上传']
      }, // 页面需要的权限
      component: () => import('@/views/Components/AvatarUpload/AvatarUpload.vue')
    },
    {
      path: '/tinymce',
      name: 'Tinymce',
      meta: {
        role: [firstRole],
        des: ['组件', '富文本编辑器']
      }, // 页面需要的权限
      component: () => import('@/views/Components/Tinymce/Tinymce.vue')
    }
  ],
  component: () => import('@/layout/index.vue')
},
{
  path: '/404',
  name: '404',
  meta: { role: [firstRole, secondRole] }, // 页面需要的权限
  component: () => import('@/views/ErrorPage/404.vue')
}]
