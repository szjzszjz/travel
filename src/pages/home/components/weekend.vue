<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <!--      border-bottom 底部1px边框-->
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
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
  data () {
    return {
      weekendList: [{
        id: '0001',
        title: '长隆野生动物世界',
        desc: '广州长隆野生动物世界成人票(特定日)【当天可定，随买随用】广州长隆野生动物世界成人票(特定日)【当天可定，随买随用】',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg'
      }, {
        id: '0002',
        title: '长隆野生动物世界',
        desc: '广州长隆野生动物世界成人票(特定日)【当天可定，随买随用】广州长隆野生动物世界成人票(特定日)【当天可定，随买随用】',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg'
      }, {
        id: '0003',
        title: '长隆野生动物世界',
        desc: '广州长隆野生动物世界成人票(特定日)【当天可定，随买随用】广州长隆野生动物世界成人票(特定日)【当天可定，随买随用】',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg'
      }]
    }
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
