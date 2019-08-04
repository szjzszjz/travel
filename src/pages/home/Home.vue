<template>
  <div>
    <home-header></home-header>
<!--    引入分页组件-->
    <home-Swiper></home-Swiper>
<!--    首页图标排列组件-->
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style scoped>
</style>
