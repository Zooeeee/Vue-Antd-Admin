import Mock from 'mockjs'
// 获取 mock.Random 对象
const Random = Mock.Random
// 使用mockjs模拟数据
const normal = {
  username: '321',
  password: '321'
}

const admin = {
  username: '123',
  password: '123'
}
export const userLogin = function (req) {
  const data = JSON.parse(req.body)
  // console.log(data)
  const res = {
    code: '200',
    nickName: Random.cname()
  }
  if (data.username === admin.username && data.password === admin.password) {
    res.role = 'admin'
    return res
  } else if ((data.username === normal.username && data.password === normal.password)) {
    res.role = 'normal'
    return res
  } else {
    return {
      code: '400'
    }
  }
}

export const getUserInfoByCookie = function (req) {
  // console.log('api/getUserInfoByCookie')
  return {
    nickName: Random.cname()
  }
}
