<template>
   <a-layout-content id="box" style="margin: 0 16px">
      <!-- 主要内容 -->
      <keep-alive>
         <router-view></router-view>
      </keep-alive>
    </a-layout-content>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">
// #box{
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// }
</style>
