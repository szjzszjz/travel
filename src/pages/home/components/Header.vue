<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xeb99;</div>
    </div>
    <div class="header-input">
      <span class="iconfont arrow-icon">&#xeb9c;</span>
      输入城市游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.city}}
        <span class="iconfont">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']) // ...展开运算符 映射state里面的属性 直接获取值
  }
}
</script>

<style lang="stylus" scoped>
  /*@import "../../../assets/styles/varibles.styl"*/
  /*@import "~@/assets/styles/varibles.styl"*/
  @import "~styles/varibles.styl"

  .header {
    display: flex;
    height: $headerHeight
    line-height: $headerHeight
    background: $bgColor;
    color: #ffffff;

    .header-left { // 返回
      margin-left: 0;
      width: $headerHeight;
      height: $headerHeight
      text-align: center
      float: left;
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
      padding: 0 1rem
      float: right;
      font-size: 10px
      text-align: center;
    }
    .header-right div{
      width:100%
      height:3rem

    }
    .arrow-icon{

      margin: .5rem 0;
      font-size 0.24rem;
    }
    a{
      color: #ffffff
    }
  }
</style>
