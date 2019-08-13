<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div id="test"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
#test{
  width: 100%
  background-color: #90988c
  height 200rem
}
</style>
