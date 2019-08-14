<template>
  <div id="list" v-if="showList">
    <div class="list-item" v-for="(item,index) of list" :key="index" >
      <div class="item-title" @click="handleTitleEvent(item)">
        <img class="image" v-if="item.level == 1" src="@/assets/img/happy.png" alt="">
        <img class="image" v-else-if="item.level == 2" src="@/assets/img/niu.png" alt="">
        <img class="image" v-else src="@/assets/img/mei.png" alt="">
        <div class="title">
          {{item.title}}+{{showList}}
        </div>
      </div>
      <hr>
      <div v-if="item.children">
        <detail-list :list="item.children" :showList="showList"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array,
    showList: Boolean,
    show: true
  },
  data () {
    return {
      images: [
        '@/assets/img/happy.png',
        '@/assets/img/niu.png',
        '@/assets/img/mei.png'
      ]
    }
  },
  methods: {
    handleTitleEvent (item) {
      console.log(item.level)
      if (item.children) {
        console.log('children')
      }
    }
  },
  // 自定义局部指令
  directives: {
    'rainbow': {
      bind (el, binding, vnode) {
        el.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8)
      }
    }
  }

}
</script>

<style lang="stylus" scoped>
  #list {
    /*background-color: #90988c*/
  }

  .list-item {
    padding-left 2rem
    padding-top 1rem
    padding-bottom:1rem

    .item-title{
      position: relative
      height 2rem
      /*background black*/

      .title {
        position: absolute
        top: 0
        /*background: #666*/
        height: 100%
        line-height 2rem
        margin-left 1rem
        display: inline-block
      }
      .image {
        /*background #90988c*/
        width 2rem
        height 2rem
      }
    }
  }

</style>
