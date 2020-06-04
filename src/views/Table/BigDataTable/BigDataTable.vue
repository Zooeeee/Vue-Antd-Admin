<template>
  <div>
    <a-page-header
          style="border: 1px solid rgb(235, 237, 240)"
          :title="title"
          :sub-title="subTitle"
          @back="() => this.$router.push({path:'/home'})"
      />
       <div class="wraper">
      <a-empty v-if="!dataFlag" id="empty" />
      <bigdataTable
        v-if="dataFlag"
        ref="bigdataTable"
        :showIndex="true"
        class="bigData"
        v-model ="data"
        :col-width="250"
        :columns="columns"
        :fixed="true"
        stripe
        :fixedCol="0"
        :indexWidth="100"
        :canEdit="true"
        >
      </bigdataTable>
    </div>
  </div>
</template>
<script>
import bigdataTable from '@/components/vue-bigdata-table'
import { getBigDataTableData } from '@/api/table.js'

export default {
  components: { bigdataTable },
  data () {
    return {
      title: '支持十万条数据的大数据表格',
      subTitle: '时间主要花在接收数据',
      dataFlag: false,
      data: [],
      columns: [
        // { title: 'id', align: 'center' },
        { title: '姓名', align: 'center' },
        { title: '年龄', align: 'center' },
        { title: '籍贯', align: 'center' }
      ]
    }
  },
  mounted () {
    getBigDataTableData().then(res => {
      this.data = res.data
      this.dataFlag = true
    })
  }
}
</script>
<style lang="less" scoped>
.wraper{
  margin: 0px auto;
  padding: 40px;
  width: 1000px;
  height: 600px;
  overflow: auto;
}

</style>
