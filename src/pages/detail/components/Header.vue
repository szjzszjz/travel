<template>
    <div id="header">
      <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
        <span class="iconfont">&#xeb99;</span>
      </router-link>

      <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
        <router-link to="/">
          <div class="iconfont header-fixed-back">&#xeb99;</div>
        </router-link>
        景点详情
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showAbs: false,
      opacityStyle: {
        opacity: 1
      }
    }
  },
  methods: {
    handelScroll () {
      const offset = document.documentElement.scrollTop
      if (offset > 64) {
        console.log('>>>64')
        this.showAbs = false
        const opacity = (offset - 64) / 64
        if (opacity <= 1) {
          console.log(opacity)
          this.opacityStyle = {
            opacity
          }
        }
      } else {
        this.showAbs = true
      }
      console.log(document.documentElement.scrollTop)
    }
  },
  activated () {
    window.addEventListener('scroll', this.handelScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
  /*#header{
    position: relative
  }*/
  .header-abs{
    position absolute
    top:.5rem
    left:.5rem
    height:2rem
    width 2rem
    border-radius: 50%
    background-color: rgba(0,0,0,0.3)
  }
  .header-abs span{
    padding: .5rem
    line-height 2rem
    text-align center
    color: #ffffff
  }

  .header-fixed{
    position fixed
    top:0
    left:0
    right:0
    line-height $headerHeight
    text-align center
    height:$headerHeight
    background-color: $bgColor
    color: $darkTextColor
    font-size 1.2rem
  }
  .header-fixed-back{
    position absolute
    top:0
    left:0
    width $headerHeight
  }

</style>
