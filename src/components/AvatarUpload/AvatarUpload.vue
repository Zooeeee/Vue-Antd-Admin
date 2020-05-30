<template>
  <div >
    <a-avatar :size="64" style="cursor:pointer" @click="toggleShow" icon="user" />
    <my-upload
    @crop-success="cropSuccess"
    @crop-upload-success="cropUploadSuccess"
    @crop-upload-fail="cropUploadFail"
    v-model="show"
    :width="200"
    :height="200"
    img-format="png"
    :size="size"
    langType='zh'
    :noRotate='false'
    field="Avatar1"
    url="https://httpbin.org/post"></my-upload>
    <img :src="imgDataUrl">
  </div>
</template>

<script>
import 'babel-polyfill' // es6 shim
import myUpload from 'vue-image-crop-upload'
export default {
  data () {
    return {
      imgDataUrl: '',
      show: false,
      size: 2.1
    }
  },
  components: {
    'my-upload': myUpload
  },
  methods: {
    toggleShow () {
      this.show = !this.show
    },
    cropSuccess (imgDataUrl, field) {
      console.log('-------- crop success --------', imgDataUrl, field)
    },
    // 上传成功回调
    cropUploadSuccess (jsonData, field) {
      console.log('-------- upload success --------')
      this.imgDataUrl = jsonData.files.Avatar1
      console.log(jsonData)
      console.log('field: ' + field)
    },
    // 上传失败回调
    cropUploadFail (status, field) {
      console.log('-------- upload fail --------')
      console.log('上传失败状态' + status)
      console.log('field: ' + field)
    }
  }

}
</script>

<style scoped lang="less">

</style>
