import Mock from 'mockjs'
// 使用mockjs模拟数据

import { userLogin, getUserInfoByCookie } from './user.js'
import { initData } from './home.js'
import { normalTableData, bigTableData } from './table.js'

const serverUrl = '/api/v1'
Mock.setup({
  timeout: '500-2000'
})
Mock.mock(serverUrl + '/user/login', 'post', userLogin)
Mock.mock(serverUrl + '/user/login', 'get', getUserInfoByCookie)
Mock.mock(serverUrl + '/main/home', 'get', initData)
Mock.mock(serverUrl + '/table/normalTable', 'get', normalTableData)
Mock.mock(serverUrl + '/table/bigTableData', 'get', bigTableData)
