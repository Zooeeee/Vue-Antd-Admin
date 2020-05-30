<template>
  <div>
    <a-row :gutter="[16,16]" id="showItemData">
      <a-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6"
      v-for="(item, index) in showItemData" :key="index">
        <ShowItem
          :initData = "item"
          :key="index">
        </ShowItem>
      </a-col>
    </a-row>
    <a-row :gutter="[16,16]">
      <a-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
        <ShowLineChart :initData="initData.lineChartData"></ShowLineChart>
      </a-col>
      <a-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <ShowRadar :initData="initData.radarChartData"></ShowRadar>
      </a-col>
    </a-row>
    <a-row style="margin-top:20px;" >
      <a-col :span="24">
        <Des></Des>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import ShowItem from './ShowItem'
import ShowLineChart from './ShowLineChart'
import ShowRadar from './ShowRadar'
import Des from './Des'
import { getInitData } from '@/api/home.js'
export default {
  components: { ShowItem, ShowLineChart, ShowRadar, Des },
  data () {
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
      initData: {}
    }
  },
  created () {
  },
  mounted () {
    getInitData().then(res => {
      // console.log(res.data)
      this.initData = res.data
    })
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
.ant-col{
  background: #F1F2F6;
}
#showItemData{
  margin-top: 15px !important;
}
</style>
