<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <!--      border-bottom 底部1px边框-->
      <li class="item border-bottom" v-for="item of weekends" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekends: Array
  }

}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title {
    line-height: 1.8rem
    background-color #cccccc
    text-indent 1rem //文本缩进
  }

  .item-img-wrapper {
    overflow: hidden
    height: 0
    padding-bottom 33.9%
    .item-img {
      width: 100%
      padding 0.2rem
    }
  }

  .item-info {
    padding:.2rem
    .item-title {
      line-height: 1.5rem
      color: black
      ellipsis() //结合使用 min-width 0
    }

    .item-desc {
      line-height: 2.2rem
      font-size: 0.13rem
      color: #90988c
      ellipsis()
    }
  }

</style>
