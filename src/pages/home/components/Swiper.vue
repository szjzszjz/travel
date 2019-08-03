<!--首页轮播组件-->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src='item.imgUrl'/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!--    左右箭头-->
      <!--    <div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--    <div class="swiper-button-next" slot="button-next"></div>-->
      <!--    滚动条-->
      <!--    <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true // 循环轮播图片
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/a31023dce497dfebeaced802008c6209.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/3f5ff03fa0c024b930f515e63ae2c702.jpg_945x288_7dff4510.jpg'
      }, {
        id: '0003',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/b72df47942fb28fcd7bf481f01e785f5.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active {
    background #fff //设置轮播图底部圆点的颜色
  }

  .wrapper {
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom 30.475%
    background: #eeeeee

    .swiper-img {
      width 100%; //设置图片自适应屏幕宽度
    }
  }
</style>
