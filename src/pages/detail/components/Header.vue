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
        opacity: 0
      }
    }
  },
  methods: {
    handelScroll () {
      const offset = document.documentElement.scrollTop
      if (offset > 64 && offset < 132) {
        console.log('>>>64')
        this.showAbs = false
        const opacity = (offset - 64) / 64
        // console.log(opacity)
        if (opacity <= 1) {
          this.opacityStyle = {
            opacity
          }
        }
      } else {
        if (offset <= 64) {
          this.showAbs = true
        }
        if (offset > 132) {
          this.opacityStyle = {
            opacity: 1
          }
        }
      }
    }
  },
  // 渲染界面的时候执行该周期函数
  activated () {
    // 对所有的界面绑定监听事件
    window.addEventListener('scroll', this.handelScroll)
  },
  // 离开界面的时候执行
  deactivated () {
    // 当离开界面的时候解除事件的绑定
    window.removeEventListener('scroll', this.handelScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

// #header{
// position: relative
// }
.header-abs {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
}

.header-abs span {
  padding: 0.5rem;
  line-height: 2rem;
  text-align: center;
  color: #ffffff;
}

.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  line-height: $headerHeight;
  text-align: center;
  height: $headerHeight;
  background-color: $bgColor;
  color: $darkTextColor;
  font-size: 1.2rem;
}

.header-fixed-back {
  position: absolute;
  top: 0;
  left: 0;
  width: $headerHeight;
}
</style>
