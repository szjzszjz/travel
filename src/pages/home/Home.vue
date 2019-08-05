<template>
  <div>
    <home-header></home-header>
<!--    引入分页组件-->
    <home-Swiper></home-Swiper>
<!--    首页图标排列组件-->
    <home-icons></home-icons>
<!--    首页推荐组件-->
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style scoped>
</style>
