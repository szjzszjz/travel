<template>
<div class="search">
  <input type="text" placeholder="输入城市或者拼音">
</div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search{
    margin-top -1px
    background: $bgColor
    height:3rem
    line-height:3rem
    text-align: center
  }

  .search input{
    border: none
    border-radius: 4px
    padding:2px 4px
    height:1.7rem
    width:90%
    color: $darkTextColor
    text-align center
  }

</style>
