<template>
  <div>
<!--    首页导航条-->
    <home-header></home-header>
<!--    引入分页组件-->
    <home-Swiper :list="swiperList"></home-Swiper>
<!--    首页图标排列组件-->
    <home-icons :icons="iconList"></home-icons>
<!--    首页推荐组件-->
    <home-recommend :recommends="recommendList"></home-recommend>
<!--    周末旅游列表-->
    <home-weekend :weekends="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data: function () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess: function (res) {
      res = res.data
      console.log(res.ret)
      if (res.ret && res.data) {
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
      }
    }
  },
  // 页面渲染之后
  mounted: function () {
    console.log('页面渲染之后 mounted')
    this.lastCity = this.city
    this.getHomeInfo()
  },
  // 当页面被重新显示的时候会被执行
  activated () {
    // 避免<keep-alive>内存缓存带来的影响 通过判断城市是否相同，来决定是否发送ajax请求
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
    console.log('activated')
  }
}
</script>

<style scoped>
</style>
