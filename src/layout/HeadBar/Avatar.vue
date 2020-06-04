<template>
  <div >
    <a-avatar class="cursor" shape="square" size="large" id="avatarArea" style="color: #f56a00; backgroundColor: #fde3cf">
      {{ this.$store.getters.getUserInfo.nickName }}
    </a-avatar>
    <a-dropdown placement="bottomLeft"  >
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          <a-icon type="down" style="transform: translateY(10px);"/>
      </a>
      <a-menu slot="overlay">
        <a-menu-item v-for="(item, index) in dropDownData" :key="index" @click="TODO">
          <router-link :to="item.to">{{item.des}}</router-link>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="quit" @click="quitHandle()">
          退出登录
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dropDownData: [
        {
          des: '首页',
          to: { path: '/home' }
        },
        {
          des: '个人中心',
          to: { path: '/home' }
        }
      ]
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    TODO () {
      this.$message.warning('TODO')
    },
    quitHandle () {
      console.log('quit')
      const that = this
      this.$confirm({
        title: '提醒',
        content: '是否真的要退出账户',
        okText: '确认',
        cancelText: '取消',
        onOk () {
          console.log('退出账户')
          console.log(that.$cookies.isKey('token'))
          that.$cookies.remove('token')
          that.$cookies.remove('nickName')
          that.$store.commit('removeUserInfo')
          that.$router.push({ path: '/login' })
          that.$message.warning('已经退出账户')
        },
        onCancel () {
          console.log('onCancel')
        }
      })
    }
  }
}
</script>

<style  lang="less" scoped>
.cursor{
  cursor: pointer;
}
</style>
