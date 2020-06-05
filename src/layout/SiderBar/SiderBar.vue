<template>
    <a-layout-sider
    breakpoint="lg"
    collapsed-width="0"
    @collapse="onCollapse"
    @breakpoint="onBreakpoint"
    theme="light"
    >
      <!-- 侧边栏 -->
      <div  id="logo" />
      <a-menu theme="light"
        mode="inline"
        :defaultOpenKeys="defaultOpenKeys"
        :selectedKeys="[$route.path]"
        id="navList"
      >
        <template v-for="(item) in this.navListDate" >
          <a-sub-menu :key="item.name" v-if="item.children">
            <span slot="title"><a-icon :type="item.iconType" /><span>{{ item.name }}</span></span>
            <a-menu-item v-for="(one) in item.children" :key="one.to">
              <router-link :to="one.to"> {{ one.name }}</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item :key="item.to" v-else>
            <router-link :to="item.to"> <a-icon :type="item.iconType" /> {{ item.name }}</router-link>
          </a-menu-item>
        </template>
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
      const path = this.$route.path
      let res = ''
      for (const iterator of this.navListDate) {
        if (iterator.to === path) {
          res = iterator.name
          break
        }
        if (iterator.children) {
          for (const one of iterator.children) {
            if (one.to === this.$route.path) {
              res = iterator.name
            }
          }
        }
      }
      return [res]
    }
  },
  created () {
    // 根据权限渲染
    const role = this.$store.getters.getUserInfo.role
    console.log(navList)
    const data = navList.filter(ele => ele.role.includes(role))
    for (let i = 0; i < data.length; i++) {
      if (data[i].children) {
        data[i].children = data[i].children.filter(ele => ele.role.includes(role))
      }
    }
    this.navListDate = data
    console.log(data)
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
#logo {
  height: 65px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  background-image: url('../../../static/img/logo/admin.png');
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center 0;
}
</style>
