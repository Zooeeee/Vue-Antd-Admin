<template>
    <div class="toolList">
        <ScreenFull class="item"/>
        <Note class="item"/>
        <Theme class="item"/>
        <Info class="item"/>
    </div>
</template>

<script>
import ScreenFull from './ScreenFull/ScreenFull.vue'
import Note from './Note/Note.vue'
import Info from './Info/Info.vue'
import Theme from './Theme/Theme.vue'
export default {
  components: { ScreenFull, Note, Info, Theme },
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
.toolList{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  // justify-content: center;
  align-items: center;
}
.item{
  cursor: pointer;
  &:hover{
    transform: translateY(-3px);
    color: orangered;
  }
}
</style>
