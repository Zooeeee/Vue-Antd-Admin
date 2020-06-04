<template>
  <div >
    <a-tooltip placement="topLeft" :title="!fullscreen? '全屏' : '退出全屏'" id="toolScreenFull">
      <a-icon :type="!fullscreen? 'fullscreen' : 'fullscreen-exit'" style="font-size:20px;"  @click="handleFullScreen" ></a-icon>
      <!-- <a-avatar shape="square"   :icon="!fullscreen? 'fullscreen' : 'fullscreen-exit'" @click="handleFullScreen" /> -->
    </a-tooltip>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fullscreen: false
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    // 全屏
    handleFullScreen () {
      const element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    }
  }
}
</script>

<style scoped lang="less">

</style>
