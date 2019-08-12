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

export default {
  name: 'Home',
  data: function () {
    return {
      city: '上号',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
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
      axios.get('/api/index.json').then(this.getHomeInfoSuccess)
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
    this.getHomeInfo()
  }
}
</script>

<style scoped>
</style>
