<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page ,index) of pages" :key="index">

        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src='item.imgUrl'/>
          </div>
          <p class="icon-desc">
            {{item.desc}}
          <p/>
        </div>

      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    icons: Array
  },
  computed: {
    pages: function () {
      const pages = []
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8)
        // console.log('第'+page+'页')
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'

  .icons {
    overflow: hidden
    height: 0
    padding-bottom 50% //高度为宽度的50%
    /*background aquamarine*/

    .icon {
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height 0
      padding-bottom: 25%
      /*background: palevioletred*/
      .icon-img{
        position: absolute
        top:0
        left:0
        right:0
        bottom: 20%
        padding: .8rem
        background: #blue
        .icon-img-content{
          display: block
          margin:0 auto
          height: 100%
        }
      }

      .icon-desc {
        position: absolute;
        left: 0;
        right: 0
        bottom: 0;
        line-height: 20%;
        width: 80%
        height: 20%;
        margin: 0 auto
        font-size: 0.14rem
        /* background: $darkTextColor;*/
        align-items: center;
        display: flex;
        /*display: block*/
        justify-content: space-around;
        ellipsis()
      }
    }
  }
</style>
