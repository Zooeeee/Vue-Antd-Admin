<template>
  <a-result status="403" title="403" sub-title="对不起,您没有权限进入该页面">
    <template #extra>
      <a-button type="primary" @click="backHome">
        返回首页
      </a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    backHome () {
      this.$router.push({ path: '/home' })
    }
  }
}
</script>
