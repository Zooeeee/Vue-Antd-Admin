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
          <!-- <a-menu-item :key="item.name" v-else>
            {{ item.path }}
          </a-menu-item> -->
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
