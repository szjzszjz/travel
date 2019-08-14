<template>
<!--  @touchstart touchmove touchend必须是小写-->
    <ul class="list" >
      <li class="item"
          @click="clickLetter"
          @touchstart.prevent="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          v-for="item of letters"
          v-rainbow
          :key="item"
          :ref="item"
      >{{item}}</li>
    </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  // 刚刚跳转到页面的时候传过来的数据为空
  // 当ajax请求完成之后数据传过来有效的数据
  // 此时执行update钩子方法
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // 性能提升 一
    console.log('startY: ' + this.startY)
  },
  computed: {
    letters () {
      const letters = []
      for (let key in this.cities) {
        // console.log(key)
        letters.push(key)
      }
      return letters
    }
  },
  methods: {
    clickLetter (event) {
      // 向父組件传值
      this.$emit('changeLetter', event.target.innerText)
    },
    // 点击触摸
    handleTouchStart () {
      this.touchStatus = true
    },
    // 触摸移动
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }

        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 96 - this.startY
          const index = Math.floor(touchY / 24)
          console.log(touchY, index)
          if (index >= 0 && index < this.letters.length) {
            // console.log(this.startY, touchY, index)
            this.$emit('changeLetter', this.letters[index])
          }
        }, 5) // 设置10毫秒的间隔 通过限流提高性能 二
      }
    },
    // 离屏
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list{
    background: #ffffff;
    position: absolute;
    top: 6rem;
    right: 0;
    bottom: 0;
    width: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .item{
    line-height: 1.5rem;
    height: 1.5rem;
    width:2rem
    text-align: center;
    font-size: 1.1rem;
    color: $bgColor;
  }
</style>
