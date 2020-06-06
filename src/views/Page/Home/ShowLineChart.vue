<template>
  <div>
    <chart id="chart1" style=" background-color: white;width:100%;height:300px;padding-top:40px" :options="orgOptions" :autoresize ="true">
    </chart>
  </div>
</template>

<script>
export default {
  props: ['initData'],
  data () {
    return {
      orgOptions: {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['预期', '实际']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '预期',
            type: 'line',
            smooth: true,
            data: [1, 1, 1, 1, 1, 1, 1]
          },
          {
            name: '实际',
            type: 'line',
            smooth: true,
            data: [1, 1, 1, 1, 1, 1, 1]
          }
        ],
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
  // 使用watch来实现异步加载
  watch: {
    initData (val, oldVal) { // 普通的watch监听
      this.orgOptions.series[0].data = val.expected
      this.orgOptions.series[1].data = val.actual
    }
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style scoped lang="less">

</style>
