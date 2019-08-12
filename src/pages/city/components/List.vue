<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-bottom">当前城市</div>
        <div class="button-list-area">
          <div class="button">{{this.$store.state.city}}</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-bottom">热点城市</div>
        <div class="button-list-area">
          <div class="button" v-for="city of hot" :key="city.id" @click="handleChangeCity(city.name)">{{city.name}}</div>
        </div>
      </div>

<!--          :ref 给每个区域绑定一个唯一标识符-->
      <div class="area"
           v-for="(items,key) of cities"
           :key="key"
           :ref="key"
      >
        <div class="title border-bottom" >{{key}}</div>
        <div class="item-list-area" v-for="city of items" :key="city.id">
          <div class="item border-bottom" @click="handleChangeCity(city.name)">{{city.name}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'List',
  // 接收父组件传过来的数据
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleChangeCity (city) {
      // this.$store.dispatch('changeCity', city) // 调用action 然后再调用mutation
      this.$store.commit('changeCity', city) // 直接调用mutation
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper)
  },
  // 监听letter的变化
  watch: {
    letter () {
      console.log('list:' + this.letter)
      // 根据ref获取对应的dom区域 并滚动到对应的区域
      const ele = this.$refs[this.letter][0]
      this.scroll.scrollToElement(ele)
    }
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

  .button-list-area{
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
  .item-list-area{
    /*background: yellowgreen*/
    margin:0 1rem 0 0
  }
  .item{
    /*background: burlywood*/
    padding:.3rem .5rem
    line-height 1.8rem
  }

</style>
