<template>
    <!-- 头部 -->
  <a-layout-header style="background: #fff; padding: 0; height: 60px;"  >
  <!-- 面包屑导航 -->
    <a-row id="main">
      <a-col :xs="24" :sm="24" :md="12" :lg="14" :xl="18" id="breadArea">
        <a-breadcrumb >
          <a-breadcrumb-item>
            <router-link :to="{path: '/home'}">首页</router-link>
          </a-breadcrumb-item>
          <a-breadcrumb-item v-for="(item, index) in this.$route.meta.des" :key="index">
            {{ item }}
          </a-breadcrumb-item>
        </a-breadcrumb>
      </a-col>
      <!-- 工具按钮 -->
      <a-col :xs="16" :sm="16" :md="8" :lg="8" :xl="4" >
        <ToolList></ToolList>
      </a-col>
      <!-- 头像 -->
      <a-col :xs="8" :sm="8" :md="4" :lg="2" :xl="2" >
        <Avatar></Avatar>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<style lang="less" scoped >
.cursor{
  cursor: pointer;
}
#main{
  display: flex;
  flex-direction: row;
  align-items: center;
  .toolArea{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
}
</style>

<script>
import Avatar from './Avatar'
import ToolList from './ToolList/ToolList.vue'
export default {
  components: { ToolList, Avatar },
  data () {
    return {
      dropDownData: [
        {
          des: '首页',
          to: { path: '/home' }
        },
        {
          des: '个人中心',
          to: { path: '/userHome' }
        }
      ]
    }
  },
  computed: {
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
