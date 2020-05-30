<template>
    <div>
       <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        :title="title"
        :sub-title="subTitle"
        @back="() => this.$router.push({path:'/home'})"
      />
      <AvatarUpload></AvatarUpload>
    </div>
</template>

<script>
import AvatarUpload from '@/components/AvatarUpload/AvatarUpload.vue'
export default {
  components: { AvatarUpload },
  data () {
    return {
      title: '头像上传',
      subTitle: '使用vue-image-crop-upload'
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
