import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// axios的引入 以this.axios的形式使用
import axios from 'axios'
import VueAxios from 'vue-axios'
// 配置的按需引入antd组件
import { andtImport } from '@/config/antd.config.js'
// cookie
// 配置cookie
import cookies from 'vue-cookies'
// 引入svg组件
import IconSvg from '@/components/icon/IconSvg'
// 引入filters
import * as filters from './filters/filter.js'
// 从配置文件按需引入Echarts
import { importVueEcharts } from '@/config/eCharts.config.js'
// 全局注册icon-svg
Vue.component('IconSvg', IconSvg)
Vue.prototype.$cookies = cookies

// 使用vue-axios注册axios
Vue.use(VueAxios, axios)
// 引入mockjs
require('./mock/index.js')
// 注册filters
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false
// 配置的按需引入antd组件
andtImport()
importVueEcharts()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
