<template>
    <div>
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        :title="title"
        :sub-title="subTitle"
        @back="() => this.$router.push({path:'/home'})"
      />
      <Editor></Editor>
    </div>
</template>

<script>
import Editor from '@/components/Tinymce/Tinymce.vue'
export default {
  components: { Editor },
  data () {
    return {
      title: '富文本编辑器',
      subTitle: '使用了wangEditor作为富文本编辑器'
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
