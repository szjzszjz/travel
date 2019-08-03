<template>
  <div>
    <home-header></home-header>
<!--    引入分页组件-->
    <home-Swiper></home-Swiper>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style scoped>
</style>
