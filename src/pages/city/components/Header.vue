<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont header-back">&#xeb99;</div>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'Header'

}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header {
    position: relative
    height $headerHeight
    line-height: $headerHeight
    background $bgColor
    text-align: center
    color: $darkTextColor
    font-size 1.2rem
  }

  .header-back {
    position: absolute
    top: 0
    left: 0
    width: $headerHeight
  }
</style>
