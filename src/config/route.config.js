export const firstRole = 'admin'
export const secondRole = 'normal'
export const routerConfig = [{
  path: '/401',
  name: '401',
  meta: { role: [firstRole, secondRole] }, // 页面需要的权限
  component: () => import('@/views/ErrorPage/401.vue')
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
      component: () => import('@/views/Main/Home/Home.vue')
    },
    {
      path: '/console',
      name: 'console',
      meta: {
        role: [firstRole, secondRole],
        des: ['概要', '控制台']
      }, // 页面需要的权限
      component: () => import('@/views/Main/Console/Console.vue')
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
      path: '/userHome',
      name: 'userHome',
      meta: {
        role: [firstRole],
        des: ['页面', '个人主页']
      }, // 页面需要的权限
      component: () => import('@/views/Page/UserHome/UserHome.vue')
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
      path: '/userList',
      name: 'userList',
      meta: {
        role: [firstRole],
        des: ['页面', '花名册']
      }, // 页面需要的权限
      component: () => import('@/views/Page/UserList/UserList.vue')
    },
    {
      path: '/lineChart',
      name: 'lineChart',
      meta: {
        role: [firstRole],
        des: ['图表', '折线图']
      }, // 页面需要的权限
      component: () => import('@/views/Charts/LineChart/LineChart.vue')
    },
    {
      path: '/pieChart',
      name: 'pieChart',
      meta: {
        role: [firstRole],
        des: ['图表', '饼状图']
      }, // 页面需要的权限
      component: () => import('@/views/Charts/PieChart/PieChart.vue')
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
