<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <!--    显示的是当前路由地址所对应的的内容-->
<!--    <keep-alive> 通过路由加载页面之后 通过该标签可将内容暂时缓存到内存中 避免下次重新请求数据
exclude="Detail" 除去detail组件不要缓存 -->
    <keep-alive >
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
