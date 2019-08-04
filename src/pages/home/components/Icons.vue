<template>
  <div class="icons">
    <div class="icon" v-for="item of iconList" :key="item.id">
      <div class="icon-img">
        <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/group.png"/>
      </div>
      <p class="icon-desc">
        item.text
      <p/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data: function () {
    return {
      iconList: [{
        id: '0001',
        text: '0001',
        iconUrl: 'https://s.qunarzz.com/homenode/images/touchheader/group.png'
      }, {
        id: '0002',
        text: '0001',
        iconUrl: 'https://s.qunarzz.com/homenode/images/touchheader/tuan.png'
      }, {
        id: '0003',
        text: '0001',
        iconUrl: 'https://s.qunarzz.com/homenode/images/touchheader/freeTravel.png'
      }, {
        id: '0004',
        text: '0001',
        iconUrl: 'https://s.qunarzz.com/homenode/images/touchheader/car.png'
      }, {
        id: '0005',
        text: '0001',
        iconUrl: 'https://s.qunarzz.com/homenode/images/touchheader/aroundtravel.png'
      }, {
        id: '0006',
        text: '0001',
        iconUrl: 'https://s.qunarzz.com/homenode/images/touchheader/jr.png'
      }, {
        id: '0007',
        text: '0001',
        iconUrl: 'https://s.qunarzz.com/homenode/images/touchheader/card.png'
      }, {
        id: '0008',
        text: '0001',
        iconUrl: 'https://s.qunarzz.com/homenode/images/touchheader/youlun.png'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .icons {
    overflow: hidden
    height: 0
    padding-bottom 50% //高度为宽度的50%
    background aquamarine

    .icon {
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height 0
      padding-bottom: 25%
      background: palevioletred
      .icon-img{
        position: absolute
        top:0
        left:0
        right:0
        bottom: .44rem
        box-sizing:border-box
        padding: .1rem
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
        line-height: 20re;
        height: 20px;
        background: $darkTextColor;
      }
    }
  }
</style>
