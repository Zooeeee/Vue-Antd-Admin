<template>
  <div id="box">
    <a-page-header
          style="border: 1px solid rgb(235, 237, 240)"
          :title="title"
          :sub-title="subTitle"
          @back="() => this.$router.push({path:'/home'})"
      />
    <!-- <a-empty v-if="!dataFlag" id="empty" /> -->
    <a-table :columns="columns" :data-source="data" bordered
    :pagination="{
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '30', '40']
    }">
      <template
        v-for="col in ['name', 'age', 'address']"
        :slot="col"
        slot-scope="text, record"
      >
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="e => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
          <span v-if="record.editable">
            <a @click="() => save(record.key)">Save</a>
            <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
              <a>Cancel</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a :disabled="editingKey !== ''" @click="() => edit(record.key)">操作</a>
          </span>
        </div>
      </template>
    </a-table>
   </div>
</template>
<script>
import { getNormalTableData } from '@/api/table.js'
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: '25%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '年龄',
    dataIndex: 'age',
    width: '15%',
    scopedSlots: { customRender: 'age' }
  },
  {
    title: '住址',
    dataIndex: 'address',
    width: '40%',
    scopedSlots: { customRender: 'address' }
  },
  {
    title: '操作',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]

const data = []

export default {
  data () {
    this.cacheData = data.map(item => ({ ...item }))
    return {
      title: '普通的内联编辑表格',
      subTitle: '时间主要花在接收数据',
      data,
      columns,
      editingKey: '',
      dataFlag: false
    }
  },
  mounted () {
    getNormalTableData().then(res => {
      this.data = res.data
      // this.dataFlag = !this.dataFlag
      this.cacheData = res.data.map(item => ({ ...item }))
    })
  },
  methods: {
    handleChange (value, key, column) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.data = newData
      }
    },
    edit (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      this.editingKey = key
      if (target) {
        target.editable = true
        this.data = newData
      }
    },
    save (key) {
      const newData = [...this.data]
      const newCacheData = [...this.cacheData]
      const target = newData.filter(item => key === item.key)[0]
      const targetCache = newCacheData.filter(item => key === item.key)[0]
      if (target && targetCache) {
        delete target.editable
        this.data = newData
        Object.assign(targetCache, target)
        this.cacheData = newCacheData
      }
      this.editingKey = ''
    },
    cancel (key) {
      const newData = [...this.data]
      const target = newData.filter(item => key === item.key)[0]
      this.editingKey = ''
      if (target) {
        Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
        delete target.editable
        this.data = newData
      }
    }
  }
}
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
