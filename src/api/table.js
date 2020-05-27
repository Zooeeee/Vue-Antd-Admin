import request from '@/utils/request'

export function getNormalTableData () {
  return request({
    url: '/table/normalTable',
    method: 'get'
  })
}
