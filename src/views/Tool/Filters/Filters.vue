<template>
  <div>
    <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        :title="title"
        :sub-title="subTitle"
        @back="() => this.$router.push({path:'/home'})"
    />
    <a-row :gutter="[16,16]" style="margin-top:20px;" align="middle"  type="flex">
      <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <a-card title="数字格式化(单位)" :bordered="true" hoverable>
          <a-input addon-before="原数字"  v-model="one"  />
          <p>{{ one | numberFormatter }}</p>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <a-card title="将字符串第一个字符大写" :bordered="true" hoverable>
          <a-input addon-before="原字符串"  v-model="two"  />
          <p>{{ two | uppercaseFirst }}</p>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <a-card title="字符串循环复制,count->次数" :bordered="true" hoverable>
          <a-input addon-before="原字符串"  v-model="five"  />
          <a-input-number   v-model="fiveCount" :min="2" :max="5"  />
          <div style="word-wrap:break-word;">{{ five | repeatStr(fiveCount) }}</div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <a-card title="现金额大写转换函数(支持负数) " :bordered="true" hoverable>
          <a-input-number   v-model="seven"   />
          <p>金额: {{ seven | upDigit }}</p>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <a-card title="字符串替换" :bordered="true" hoverable>
          <a-input addon-before="原字符串" v-model="six"  />
          <a-input addon-before="被替换的字符" v-model="sixTwo"  />
          <a-input addon-before="取代的字符" v-model="sixThree"  />
          <div style="word-wrap:break-word;">{{ six | replaceAll(sixTwo,sixThree) }}</div>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <a-card title="去除空格 " :bordered="true" hoverable>
          <a-input addon-before="原字符串"  v-model="three"  />
          <p>1-所有空格: |{{ three | trim(1) }}|</p>
          <p>2-前后空格: |{{ three | trim(2) }}|</p>
          <p>3-前空格: |{{ three | trim(3) }}|</p>
          <p> 4-后空格: |{{ three | trim(4) }}|</p>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <a-card title="字母大小写切换 " :bordered="true" hoverable>
          <a-input addon-before="原字符串"  v-model="four"  />
          <p>1:首字母大写: {{ four | changeCase(1) }}</p>
          <p>2:首字母小写: {{ four | changeCase(2) }}</p>
          <p>3:大小写转换: {{ four | changeCase(3) }}</p>
          <p>4:全部大写: {{ four | changeCase(4) }}</p>
          <p>5:全部小写: {{ four | changeCase(5) }}</p>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
        <a-card title="手机号和身份证号进行保护" :bordered="true" hoverable>
          <a-input addon-before="原字符串"  v-model="eight"  />
          <a-input-number   v-model="eightStart" :min="0" :max="eight.length"  />
          <a-input-number   v-model="eightEnd" :min="0" :max="eight.length-eightStart"  />
          <div style="word-wrap:break-word;">{{ eight | plusXing(eightStart,eightEnd) }}</div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '过滤器',
      subTitle: '封装好的过滤器',
      one: 1000,
      two: 'zoe',
      three: 'zoe',
      four: 'zoe',
      five: 'zoe',
      fiveCount: 2,
      six: 'aaaaaaa',
      sixTwo: 'a',
      sixThree: 'b',
      seven: 1000,
      eight: '42105661002596851',
      eightStart: 1,
      eightEnd: 2
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
