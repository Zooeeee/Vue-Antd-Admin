<template>
    <div>
      <a-tooltip placement="topLeft" title="消息" id="toolInfo">
        <!-- <a-avatar shape="square" icon="bell" @click="clickHandle" /> -->
        <a-badge :count="infoCout">
           <a-icon type="bell" style="font-size:20px;"  @click="clickHandle" ></a-icon>
          <!-- <a-avatar shape="square" icon="bell" @click="clickHandle" /> -->
        </a-badge>
      </a-tooltip>
    </div>
</template>

<script>
export default {
  data () {
    return {
      infoCout: Math.round(Math.random() * 100)
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    clickHandle () {
      this.$message.warning('TODO:消息中心')
    }
  }
}
</script>

<style scoped lang="less">

</style>
