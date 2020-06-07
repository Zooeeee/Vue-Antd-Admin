<template>
  <div class="box">
    <a-descriptions
      title="Information"
      bordered
      :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
    >
      <a-descriptions-item label="Name">
        管理系统模板
      </a-descriptions-item>
      <a-descriptions-item label="作者">
        张尹
      </a-descriptions-item>
      <a-descriptions-item label="Time">
        2020-05
      </a-descriptions-item>
      <a-descriptions-item label="主要技术">
        Vue
      </a-descriptions-item>
      <a-descriptions-item label="UI框架">
        Ant-Design
      </a-descriptions-item>
      <a-descriptions-item label="参考界面">
        Vue-Element-Admin
      </a-descriptions-item>
      <a-descriptions-item label="特色">
        根据登录获得的token进行路由控制,和侧边栏导航的渲染
        <br />
        封装了常见的指令和过滤器(在工具分类可以预览)
        <br />
        大数据表格(支持十万条数据的流畅渲染)
        <br />
        富文本编辑器
        <br />
        拖拽列表
      </a-descriptions-item>
    </a-descriptions>
  </div>
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
.box{
  background-color: white;
}
</style>
