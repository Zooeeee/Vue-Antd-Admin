import Mock from 'mockjs'
// 获取 mock.Random 对象
const Random = Mock.Random
// 使用mockjs模拟数据
export const normalTableData = function () {
  const res = []
  for (let i = 0; i <= 100; i++) {
    const one = {
      key: i.toString(),
      name: Random.cname(),
      age: Random.natural(18, 100),
      address: Random.city()
    }
    res.push(one)
  }
  return res
}
