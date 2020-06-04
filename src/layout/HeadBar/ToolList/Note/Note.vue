<template>
  <div>
    <a-tooltip placement="topLeft" :title="title" id="toolNote">
       <a-icon type="snippets" style="font-size:20px;"  @click="showDrawer"  ></a-icon>
      <!-- <a-avatar shape="square" icon="snippets" @click="showDrawer" /> -->
    </a-tooltip>
     <a-drawer
        :title="title"
        placement="bottom"
        :closable="false"
        :visible="visible"
        :after-visible-change="afterVisibleChange"
        @close="onClose"
      >
        <a-textarea v-model="content" :autoSize="{ minRows: 10, maxRows: 20 }" />
      </a-drawer>
  </div>
</template>

<script>
// import draggable from ‘vuedraggable‘
export default {
  data () {
    return {
      title: '便签',
      content: ' ',
      visible: false,
      role: this.$cookies.get('token')
    }
  },
  created () {
    // const role = this.$cookies.get('token')
    // console.log('===')
    // console.log(localStorage.getItem('myNoteC' + this.role))
    if (localStorage.getItem('myNoteC' + this.role)) {
      this.content = localStorage.getItem('myNoteC' + this.role)
    } else {
      // this.content = '便签，在下次打开时，依然会读取到上一次的记录。是个非常小巧实用的本地备忘录'
      localStorage.setItem('myNoteC' + this.role, '便签，在下次打开时，依然会读取到上一次的记录。是个非常小巧实用的本地备忘录')
      this.content = localStorage.getItem('myNoteC' + this.role)
    }
  },
  mounted () {
  },
  methods: {
    afterVisibleChange (val) {
      console.log('visible', val)
    },
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
      localStorage.setItem('myNoteC' + this.role, this.content)
    }
  }
}
</script>

<style scoped lang="less">
</style>
