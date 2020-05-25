<template>
    <!-- 头部 -->
  <a-layout-header style="background: #fff; padding: 0"  >
  <!-- 面包屑导航 -->
    <a-row id="main">
      <a-col :xs="20" :sm="20" :md="18" :lg="20" :xl="20" id="breadArea">
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
      <a-col :xs="0" :sm="0" :md="4" :lg="3" :xl="3" class="toolArea">
        <div class="cursor">
         <!-- 全屏 -->
          <a-tooltip placement="topLeft" :title="!fullscreen? '全屏' : '退出全屏'">
            <a-avatar   :icon="!fullscreen? 'fullscreen' : 'fullscreen-exit'" @click="handleFullScreen" />
          </a-tooltip>
        </div>
        <div class="cursor">
         <!-- 帮助 -->
          <a-tooltip placement="topLeft" title="帮助">
            <a-avatar  icon="question-circle" />
          </a-tooltip>
        </div>
      </a-col>
      <!-- 头像 -->
      <a-col :xs="4" :sm="4" :md="2" :lg="1" :xl="1" id="avatarArea">
        <div class="cursor">
          <!-- <a-avatar  style="color: #f56a00; backgroundColor: #fde3cf">
            {{ this.$store.getters.getUserInfo.nickName }}
          </a-avatar> -->
          <a-dropdown placement="bottomLeft" id="dropdown" >
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              <a-avatar size="large" style="color: #f56a00; backgroundColor: #fde3cf">
                  {{ this.$store.getters.getUserInfo.nickName }}
              </a-avatar>
            </a>
            <a-menu slot="overlay">
              <a-menu-item v-for="(item, index) in dropDownData" :key="index">
                <router-link :to="item.to">{{item.des}}</router-link>
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="quit">
                退出登录
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<style scoped lang="less">
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
export default {
  data () {
    return {
      fullscreen: false,
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
