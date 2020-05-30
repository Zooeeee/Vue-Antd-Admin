// 自定义指令
import copy from './copy'
import antiShake from './antiShake'
import throttling from './throttling'
import drag from './drag'
import focus from './focus'
import waves from './waves'
import sticky from './sticky'
// 引入指令
const directives = {
  copy,
  antiShake,
  drag,
  throttling,
  focus,
  waves,
  sticky
}
// 这种写法可以批量注册指令
export default {
  install (Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  }
}
