import Vue from 'vue'
import VueRouter from 'vue-router'
import { message } from 'ant-design-vue'
import store from '../store'
import { routerConfig } from '@/config/route.config.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import cookies from 'vue-cookies'
NProgress.configure({ showSpinner: false }) // NProgress Configuration
Vue.use(VueRouter)
const router = new VueRouter({
  routes: routerConfig
})
/*
全局路由守卫每次都判断用户是否已经登录，没有登录则跳到登录页。
已经登录(已经取得后台返回的用户的权限信息(角色之类的))，
则判断当前要跳转的路由，用户是否有权限访问(根据路由名称到全部路由里找到对应的路由
，判断用户是否具备路由上标注的权限信息
(比如上面的roles: ['admin', 'editor']))。没有权限则跳到事先定义好的界面(403,404之类的)。
*/
// 做一个map存储信息
const map = new Map()
for (const route of routerConfig) {
  map.set(route.path, route)
  if (route.children) {
    for (const iterator of route.children) {
      map.set(iterator.path, iterator)
    }
  }
}
router.beforeEach((to, from, next) => {
  NProgress.start()
  // 1. 全局路由守卫每次都判断用户是否已经登录，没有登录则跳到登录页
  const role = store.getters.getUserInfo.role
  // 如果去的时登录页面,放行
  if (to.path === '/login') {
    next()
  } else {
    // 如果vuex中没有role信息
    if (store.getters.getUserInfo.role === '') {
      // 如果cookie中有信息,判断为已经登录过一次的
      if (cookies.isKey('token')) {
        store.dispatch('loginByCookieAction', cookies.get('token'))
          .then(res => {
            next()
          })
      } else {
        next({ path: '/login' })
      }
    } else { // 有role信息,就判断权限
      const path = to.path
      // console.log(map.get(path))
      if (map.has(path) && map.get(path).meta.role.includes(role)) {
        next()
      } else {
        message.info('没有找到页面')
        next({ path: '/404' })
      }
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})
export default router
