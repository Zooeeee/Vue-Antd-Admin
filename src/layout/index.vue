<template>
  <a-layout  style="min-height: 100vh">
    <!-- 侧边导航栏 -->
    <SiderBar></SiderBar>
    <a-layout>
      <!-- 头部 -->
      <HeadBar ></HeadBar>
      <!-- 标签 -->
      <!-- <TabsBar></TabsBar> -->
      <!-- 主要内容 -->
      <Content></Content>
      <!-- 页脚 -->
      <FooterBar></FooterBar>
    </a-layout>
  </a-layout>
</template>

<script>
import SiderBar from './SiderBar/SiderBar'
import FooterBar from './FooterBar/FooterBar'
import HeadBar from './HeadBar/HeadBar'
// import TabsBar from './TabsBar/TabsBar'
import Content from './Content/Content'

export default {
  components: { SiderBar, FooterBar, HeadBar, Content },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }

}
</script>

<style>
</style>
