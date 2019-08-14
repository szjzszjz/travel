<template>
  <div>
    <detail-banner @handleHeaderEvent="handleHeaderEvent"></detail-banner>
    <detail-header :showHeader="showHeader"></detail-header>
    <detail-list :list="list" :showList="showList"></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      showHeader: true,
      showList: true,
      list: [{
        level: 1,
        title: '标题一',
        children: [{
          level: 2,
          title: '二级标题1',
          children: [{
            level: 3,
            title: '三级标题1'
          }, {
            level: 3,
            title: '三级标题2'
          }, {
            level: 3,
            title: '三级标题3'
          }]
        }, {
          level: 2,
          title: '二级标题2',
          children: [{
            level: 3,
            title: '三级标题1'
          }, {
            level: 3,
            title: '三级标题2'
          }, {
            level: 3,
            title: '三级标题3'
          }]
        }, {
          level: 2,
          title: '二级标题3'
        }]
      }, {
        level: 1,
        title: '标题二'
      }, {
        level: 1,
        title: '标题三'
      }, {
        level: 1,
        title: '标题四'
      }]
    }
  },
  methods: {
    handleHeaderEvent (show) {
      this.showHeader = show
      this.showList = show
      console.log('显示标题' + this.showHeader)
    }
  }
}
</script>

<style lang="stylus" scoped>
  #test {
    width: 100%
    background-color: #90988c
    height 200rem
  }
</style>
