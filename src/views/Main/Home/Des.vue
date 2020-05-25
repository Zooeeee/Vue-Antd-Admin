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
      <a-descriptions-item label="配置">
        Vue-cli: 4.3.1
        <br />
        Vue:3.x
        <br />
        数据模拟: Mock
        <br />
        数据展示: ECharts
        <br />
        路由加载条: NProgress
        <br />
        Cookie: Vue-cookies
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
