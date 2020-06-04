<template>
  <div>
    <a-tooltip placement="topLeft" title="主题配色" id="toolTheme">
      <a-icon type="bg-colors" style="font-size:20px;"  @click="clickHandle" ></a-icon>
      <!-- <a-avatar shape="square" icon="bg-colors" @click="clickHandle" /> -->
    </a-tooltip>
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
    clickHandle () {
      this.$message.warning('TODO:更换主题')
    }
  }
}
</script>

<style scoped lang="less">

</style>
