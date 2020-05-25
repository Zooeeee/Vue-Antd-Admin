import Mock from 'mockjs'
// 获取 mock.Random 对象
const Random = Mock.Random
Random.csentence()
export const initData = () => {
  return {
    showItemData: [
      {
        iconType: 'youkexinxi-',
        name: 'New Visits',
        data: 102400
      },
      {
        iconType: 'shouyetubiao-10',
        name: 'Messages',
        data: 81212
      },
      {
        iconType: 'huobi',
        name: 'Purchases',
        data: 9280
      },
      {
        iconType: 'gouwuche',
        name: 'Shoppings',
        data: 13600
      }
    ],
    lineChartData: {
      expected: [220, 132, 260, 134, 90, 230, 210],
      actual: [220, 182, 191, 234, 290, 135, 310]
    },
    radarChartData: [
      {
        value: [93, 38, 100, 96, 93],
        name: '诸葛亮'
      },
      {
        value: [98, 72, 91, 94, 96],
        name: '曹操'
      }
    ]
  }
}
