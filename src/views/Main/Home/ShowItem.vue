<template>
    <div class="main">
      <div >
        <IconSvg :icon-class="this.initData.iconType" width="50px" height="50px"></IconSvg>
      </div>
      <div class="right-area" >
        <div>{{ this.initData.name }}</div>
        <!-- <div>{{ this.initData.data | toThousandFilter }}</div> -->
        <countTo :startVal='0' :endVal='this.initData.data' :duration='5000'></countTo>
      </div>
    </div>
</template>

<script>
import countTo from 'vue-count-to'
export default {
  components: { countTo },
  props: {
    initData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  created () {
    // console.log(this.initData)
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">
.main{
  min-height: 80px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .right-area{
    :nth-child(1){
      color: rgba(0,0,0,.45);
      font-size: 16px;
    }
    :nth-child(2){
      font-size: 20px;
    }
  }
}
</style>
