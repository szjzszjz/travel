<template>
  <div>
    <div id="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerData.bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          {{bannerData.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.bannerData.galleryImgs.length}}
        </div>
      </div>
    </div>
    <fade>
      <common-gallery :imgs=imgs v-show="showGallery" @hiddenGallery="hiddenGallery"></common-gallery>
    </fade>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import Fade from 'common/fade/Fade'

export default {
  name: 'Banner',
  props: {
    bannerData: Object
  },
  data () {
    return {
      showGallery: false,
      imgs: ['https://imgs.qunarzz.com/vs_ceph_vs_tts/68a2d941-1044-47d8-bf44-9e2ab2f2902c.jpg_r_480x320x90_9944e4ed.jpg',
        'https://imgs.qunarzz.com/vs_ceph_vs_tts/f9dfeeea-80af-4d5e-8f16-aaea269be925.jpg_r_390x260x90_b6bdedc7.jpg']
    }
  },
  components: {
    CommonGallery,
    Fade
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
      this.$emit('handleHeaderEvent', false)
    },
    hiddenGallery () {
      this.showGallery = false
      this.$emit('handleHeaderEvent', true)
    }
  }
}
</script>

<style lang="stylus" scoped>
  #banner {
    position: relative
  }

  .banner-img {
    display: block //解决：CSS图片下方带有4px间隙
    width: 100%
  }

  .banner-info {
    position: absolute
    bottom: 0
    left: 0
    right: 0
    height: 2rem
    color: #ffffff
    /*从上到下的渐变色*/
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
  }

  .banner-title {
    height: 2rem
    line-height: 2rem
    padding: 0 .5rem
    float: left
  }

  .banner-number {
    height: 2rem
    line-height: 2rem
    padding: 0 1rem
    margin-right .5rem
    background-color: rgba(0, 0, 0, 0.3)
    float: right
    border-radius: 1rem
  }

  .banner-icon {
    padding: 0 .5rem
  }

</style>
