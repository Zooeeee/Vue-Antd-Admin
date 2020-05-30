<template>
  <div>
     <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        :title="title"
        :sub-title="subTitle"
        @back="() => this.$router.push({path:'/home'})"
      />
    <a-divider>自动获取焦点</a-divider>
      <a-row type="flex" justify="center">
        <a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
            <a-input v-focus></a-input>
        </a-col>
      </a-row>
    <a-divider>一键复制</a-divider>
    <a-row type="flex" justify="center">
        <a-col  :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
            <a-input-search placeholder="input search text" v-model="copyText" size="large" >
              <a-button type="primary" slot="enterButton" v-copy="copyText">
                <a-icon type="copy" />
              </a-button>
            </a-input-search>
        </a-col>
    </a-row>
    <a-divider>节流和防抖</a-divider>
      <a-row type="flex" justify="center">
          <a-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" style="display:flex;justify-content:space-around;">
            <a-button type="primary" @click="alertSth">普通</a-button>
            <a-button type="primary" v-throttling="testThrottling">节流</a-button>
            <a-button type="primary" v-antiShake="testAntiShake">防抖</a-button>
          </a-col>
      </a-row>
    <a-divider>波纹动画</a-divider>
      <a-row :gutter="[16,16]" type="flex" justify="center">
        <a-col :xs="12" :sm="12" :md="8" :lg="4" :xl="4">
           <div class="circleDemo">未添加</div>
        </a-col>
        <a-col :xs="12" :sm="12" :md="8" :lg="4" :xl="4">
           <div v-waves class="circleDemo">普通</div>
        </a-col>
        <a-col :xs="12" :sm="12" :md="8" :lg="4" :xl="4">
          <div v-waves.yellow class="circleDemo">黄色波纹</div>
        </a-col>
        <a-col :xs="12" :sm="12" :md="8" :lg="4" :xl="4">
          <div v-waves.black class="circleDemo">黑色波纹</div>
        </a-col>
        <a-col :xs="12" :sm="12" :md="8" :lg="4" :xl="4">
          <div v-waves.yellow="1000" class="circleDemo">黄色波纹延时</div>
        </a-col>
         <a-col :xs="12" :sm="12" :md="8" :lg="4" :xl="4">
          <div v-waves.black="1000" class="circleDemo">黑色波纹延时</div>
        </a-col>
      </a-row>
     <a-divider >吸附</a-divider>
     <div type="primary" v-sticky>吸附于顶端</div>
     <div style="height:2000px;">
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '指令',
      subTitle: '封装好的vue指令',
      copyText: '需要复制的内容',
      testThrottling: {
        time: 1000,
        event: 'click',
        callback: () => {
          this.$message.info('节流,一段时间只能执行一次')
        }
      },
      testAntiShake: {
        time: 1000,
        event: 'click',
        callback: () => {
          this.$message.info('节流优化后的点击,只会在某一次点击后一段时间内无动作才会执行')
        }
      }
    }
  },
  methods: {
    alertSth () {
      this.$message.info('普通点击,短时间内可以执行多次')
    }
  }
}
</script>

<style lang="less" scoped>
#test{
    position: relative;   /*定位*/
    top: 10px;
    left: 10px;
    width: 200px;
    height: 200px;
    background: #666;    /*设置一下背景*/
  }
.circleDemo {
  height:100px;
  width:100px;
  background-color:white;
  border-radius:50%;
  color:black;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
