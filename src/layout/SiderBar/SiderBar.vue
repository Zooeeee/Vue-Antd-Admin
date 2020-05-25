<template>
    <a-layout-sider
    breakpoint="lg"
    collapsed-width="0"
    @collapse="onCollapse"
    @breakpoint="onBreakpoint"
    >
      <!-- 侧边栏 -->
      <div class="logo" />
      <a-menu theme="dark"
        mode="inline"
        :defaultOpenKeys="defaultOpenKeys"
        :selectedKeys="[$route.path]"
      >
        <a-sub-menu v-for="(item) in this.navListDate" :key="item.name">
          <span slot="title"><a-icon :type="item.iconType" /><span>{{ item.name }}</span></span>
          <a-menu-item v-for="(one) in item.children" :key="one.to">
            <router-link :to="one.to"> {{ one.name }}</router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
</template>

<script>
import { navList } from '@/config/siderBarList.config.js'
export default {
  data () {
    return {
      navListDate: []
    }
  },
  computed: {
    defaultOpenKeys () {
      // console.log(this.$route.path)
      // console.log(this.navListDate)
      let res = ''
      for (const iterator of this.navListDate) {
        for (const one of iterator.children) {
          if (one.to === this.$route.path) {
            res = iterator.name
          }
        }
      }
      return [res]
    }
  },
  created () {
    const role = this.$store.getters.getUserInfo.role
    const data = navList.filter(ele => ele.role.includes(role))
    for (let i = 0; i < data.length; i++) {
      data[i].children = data[i].children.filter(ele => ele.role.includes(role))
    }
    this.navListDate = data
  },
  mounted () {
  },
  methods: {
    onCollapse (collapsed, type) {
      // console.log(collapsed, type)
    },
    onBreakpoint (broken) {
      // console.log(broken)
    }
  }
}
</script>

<style scoped lang="less">
.logo {
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
