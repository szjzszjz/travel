<template>
  <div id="container" @click="clickEvent">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(img ,index) of imgs" :key="index">
          <img class="gallery-img" :src='img'/>
        </swiper-slide>
      </swiper>
    </div>
    <div class="gallery-pagination" slot="pagination"></div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.gallery-pagination',
        // bullets:圆点（默认） fraction：分式  progress：进度条 custom：自定义
        paginationType: 'fraction',
        // 当周围的dom元素发生变化的时候 swiper自我刷新
        observer: true, // 打开观察者模式
        observeParents: true // 允许观察父类组件
      }
    }
  },
  methods: {
    clickEvent () {
      this.$emit('hiddenGallery')
    }
  }
}
</script>

<style lang="stylus" scoped>

  #container {
    display: flex // 弹性布局
    flex-direction: column // 布局方向：纵向
    justify-content: center // 位于纵向的中心位置
    background-color: black
    position: fixed //位置固定
    top: 0
    right: 0
    bottom: 0
    left: 0
  }

  .wrapper {
    width: 100%
    padding-top 7rem
    /*background-color: yellowgreen*/
  }

  .gallery-img {
    width: 100%
  }

  .gallery-pagination {
    text-align: center
    color: #ffffff
    margin-top:7rem
    /*background-color: #555*/
  }

</style>
