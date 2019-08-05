<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!--      border-bottom 底部1px边框-->
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img"
             :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        title: '长隆野生动物世界',
        desc: '广州长隆野生动物世界成人票(特定日)【当天可定，随买随用】广州长隆野生动物世界成人票(特定日)【当天可定，随买随用】',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg'
      }, {
        id: '0002',
        title: '长隆野生动物世界',
        desc: '广州长隆野生动物世界成人票(特定日)【当天可定，随买随用】广州长隆野生动物世界成人票(特定日)【当天可定，随买随用】',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg'
      }, {
        id: '0003',
        title: '长隆野生动物世界',
        desc: '广州长隆野生动物世界成人票(特定日)【当天可定，随买随用】广州长隆野生动物世界成人票(特定日)【当天可定，随买随用】',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg'
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

  .item {
    display: flex
    overflow: hidden
    height: 6rem
  }

  .item-img {
    height: 5.6rem
    width 5.6rem
    padding 0.2rem
  }

  .item-info {
    padding: .2rem
    min-width 0

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

    .item-button {
      margin-top: .1rem
      background-color sandybrown
      border-radius: 0.6rem
    }
  }

</style>
