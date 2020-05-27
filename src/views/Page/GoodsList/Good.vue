<template>
   <a-card hoverable >
    <img
      slot="cover"
      alt="example"
      src="@/../static/img/page/1.jpg"
    />
    <div class="price">
      <div class="sale">
        <div>￥123</div>
        <div>
           <del>￥242</del>
        </div>
      </div>
      <div class="collect">
        <a-icon type="star" />
        <div>443</div>
      </div>
    </div>
    <div id="des">渐变色嘻哈字母印花连帽 </div>
     <!-- 渐变色嘻哈字母印花连帽 -->
  </a-card>
</template>

<script>
export default {
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
.price{
  font-size: 14px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .sale{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
     flex:1;
  }
  .collect{
     display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex:1;
  }
}
</style>
