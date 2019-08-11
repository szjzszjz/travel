<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-bottom">
          当前城市
        </div>
        <div class="button-list">
          <div class="button">北京</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-bottom">
          热点城市
        </div>
        <div class="button-list">
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
          <div class="button">北京</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-bottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
        <div class="title border-bottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
        <div class="title border-bottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'List',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>

  .list{
    /*background: red*/
    overflow hidden
    position: absolute
    top:6rem
    right:0
    bottom:0
    left:0
  }
  .border-bottom
    &:befor
      border-color: #666
    &:after
      border-color: #666

  .title {
    background: #eeeeee
    height: 2rem
    line-height: 2rem
    padding-left .5rem
  }

  .button-list{
    overflow: hidden
    padding: .5rem
    margin:0 1rem 0 0
    /*background: skyblue*/

  }
  .button{
    float: left
    width: 29.3%
    /*background: yellowgreen*/
    text-align center
    padding:.3rem 0
    margin: .3rem
    border: 0.5px solid #000
    border-radius: 3px
  }
  .item-list{
    /*background: yellowgreen*/
    margin:0 1rem 0 0
  }
  .item{
    /*background: burlywood*/
    padding:.3rem .5rem
    line-height 1.8rem
  }

</style>
