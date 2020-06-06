<template>
    <div class="guide">
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        :title="title"
        :sub-title="subTitle"
        @back="() => this.$router.push({path:'/home'})"
      />
      <a-button type="primary" @click.prevent.stop="guide">开始引导</a-button>
    </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import steps from './steps.js'
export default {
  data () {
    return {
      driver: null,
      title: '引导页',
      subTitle: '使用driver.js制作'
    }
  },
  created () {

  },
  mounted () {
    this.driver = new Driver({
      className: 'scoped-class', // className to wrap driver.js popover
      animate: true, // Animate while changing highlighted element
      opacity: 0.75, // Background opacity (0 means only popovers and without overlay)
      padding: 10, // Distance of element from around the edges
      allowClose: true, // Whether clicking on overlay should close or not
      overlayClickNext: false, // Should it move to next step on overlay click
      doneBtnText: '完成', // Text on the final button
      closeBtnText: '关闭', // Text on the close button for this step
      nextBtnText: '下一步', // Next button text for this step
      prevBtnText: '上一步' // Previous button text for this step
      // Called when moving to next step on any step
    })
    // this.driver = new Driver()
  },
  methods: {
    guide () {
      console.log('guide')
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>

<style scoped lang="less">

</style>
