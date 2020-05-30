<template>
    <div>
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        :title="title"
        :sub-title="subTitle"
        @back="() => this.$router.push({path:'/home'})"
      />
      <a-back-top>
        <div class="ant-back-top-inner">
          UP
        </div>
      </a-back-top>
       <div style="height:2000px;"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: '返回顶部',
      subTitle: '下滑可见'
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
.ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>
