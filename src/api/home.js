import request from '@/utils/request'

export function getInitData () {
  return request({
    url: '/main/home',
    method: 'get'
  })
}
