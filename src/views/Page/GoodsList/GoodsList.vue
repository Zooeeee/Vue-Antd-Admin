<template>
  <a-row :gutter="[40,16]" style="margin-top:20px;">
    <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"
    v-for="(item, index) in [1,2,3,4,5,6,7,8,9]" :key="index">
       <Good ></Good>
    </a-col>
  </a-row>
</template>

<script>
import Good from './Good.vue'
export default {
  components: { Good },
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

</style>
