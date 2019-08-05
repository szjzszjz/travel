<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xeb99;</div>
    </div>
    <div class="header-input">
      <span class="iconfont arrow-icon">&#xeb9c;</span>
      输入城市游玩主题
    </div>
    <div class="header-right">
      {{city}}
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
  /*@import "../../../assets/styles/varibles.styl"*/
  /*@import "~@/assets/styles/varibles.styl"*/
  @import "~styles/varibles.styl"

  .header {
    display: flex;
    line-height: 3.04rem;
    background: $bgColor;
    color: #ffffff;

    .header-left { // 返回
      margin-left: 0.4rem;
      width: 2rem;
      float: left;
      .back-icon{

      }
    }

    .header-input {
      flex: 1;
      height: 2.04rem; // 定义高度
      line-height: 2.04rem; // 定义内容高度
      margin-top: 0.5rem;
      margin-left: 0.2rem;  //左外边距
      padding-left: 0.2rem;  //左内边距
      background: #ffffff;
      border-radius: 0.2rem;
      color: #ccc;
    }

    .header-right { // 城市
      width: 3.6rem;
      float: right;
      text-align: center;
      .arrow-icon{
        margin-left: -2rem;
        font-size 0.24rem;
      }
    }
  }
</style>
