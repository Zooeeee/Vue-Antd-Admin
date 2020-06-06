<template>
    <chart id="chart1" style=" background-color: white;width:100%;height:300px;padding-top:40px" :options="orgOptions" :autoresize ="true">
    </chart>
</template>

<script>
export default {
  props: ['initData'],
  data () {
    return {
      orgOptions: {
        title: {
          text: '能力值对比图',
          x: 'right'
        },
        tooltip: {},
        legend: {
          data: ['诸葛亮', '曹操'],
          x: 'left'
        },
        radar: {
        // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: '统帅', max: 100 },
            { name: '武力', max: 100 },
            { name: '智力', max: 100 },
            { name: '政治', max: 100 },
            { name: '魅力', max: 100 }
          ]
        },
        series: [{
          name: '能力值对比图',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [1, 1, 1, 1, 1],
              name: '路人甲'
            },
            {
              value: [1, 1, 1, 1, 1],
              name: '路人乙'
            }
          ]
        }],
        animation: true,
        animationEasing: 'cubicIn',
        animationDuration: function (idx) {
          return idx * 100
        },
        animationDelayUpdate: function (idx) {
          return idx * 100
        }
      }
    }
  },
  created () {

  },
  computed: {
  },
  mounted () {
  },
  // 使用watch来实现异步加载
  watch: {
    initData (val, oldVal) { // 普通的watch监听
      // console.log('watch')
      // console.log(val)
      this.orgOptions.series[0].data = val
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">

</style>
