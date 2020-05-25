import request from '@/utils/request'

export function loginByUsername (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function loginByCookie (data) {
  return request({
    url: '/user/login',
    method: 'get',
    data
  })
}
