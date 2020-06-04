import { loginByUsername, loginByCookie } from '@/api/user.js'
import cookies from 'vue-cookies'
const user = {
  state: {
    submitDisabled: false,
    userInfo: {
      nickName: '',
      role: ''
    }
  },
  getters: {
    getUserInfo: state => {
      return state.userInfo
    }
  },
  mutations: {
    setSubmitDisabled: state => {
      state.submitDisabled = !state.submitDisabled
    },
    setUserInfo: (state, userInfo) => {
      state.userInfo = userInfo
    },
    removeUserInfo: state => {
      state.userInfo = {
        nickName: '',
        role: ''
      }
    }
  },
  actions: {
    loginByUsernameAction: ({ commit }, loginInfo) => {
      return new Promise((resolve, reject) => {
        commit('setSubmitDisabled')
        loginByUsername(loginInfo).then(res => {
          if (res.data.code === '400') {
            commit('setSubmitDisabled')
            reject(new Error('账号密码错误'))
          } else {
            commit('setUserInfo', {
              nickName: res.data.nickName,
              role: res.data.role
            })
            commit('setSubmitDisabled')
            cookies.set('token', res.data.role)
            cookies.set('nickName', res.data.nickName)
            resolve('成功')
          }
        })
      })
    },
    loginByCookieAction: ({ commit }, cookie) => {
      return new Promise((resolve, reject) => {
        loginByCookie(cookie).then(res => {
          commit('setUserInfo', {
            nickName: res.data.nickName,
            role: cookie
          })
          resolve(res)
        })
      })
    }
  }
}

export default user
