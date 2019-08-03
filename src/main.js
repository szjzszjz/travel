// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/border.css' // 解决一像素边框的问题
import 'styles/iconfont.css' // 在webpack.base.conf.js 中添加style别名

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App }, // 局部组件
  template: '<App/>' // 渲染局部组件
})

// 路由就是根据网址的不同 返回不同的内容给用户
