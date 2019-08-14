import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id', // 动态路由
      name: 'Detail',
      component: Detail
    }
  ],

  // 每次做路由切换的时候 让初始页面x,y都为0 避免页面之间相互影响
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  },
  mode: 'history'
})
