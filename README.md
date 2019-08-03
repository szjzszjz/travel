# travel

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## plugins  
[Vue 分页插件](https://github.com/surmon-china/vue-awesome-swiper)  
安装(指定稳定版本2.6.7)  
```
npm install vue-awesome-swiper@2.6.7 --save
```  
[项目中分页组件](https://github.com/szjzszjz/travel/blob/index-swiper/src/pages/home/components/Swiper.vue)
## 包安装   
### fastClick 
* 目的：解决项目中click事件有时候在某些机型上会出现300ms延迟的情况  
```
安装fastclick依赖
npm install fastclick --save  

重启服务 
npm run start  
```  
```
项目中引入  
import fastClick from 'fastclick'  

使用  
fastClick.attach(document.body)  
```  
### stylus  
* 目的：CSS 预处理，顾名思义，预先处理 CSS。那 stylus 咋预先处理呢？stylus 给 CSS 添加了可编程的特性，也就是说，在 stylus 中可以使用变量、函数、判断、循环一系列 CSS 没有的东西来编写样式文件，执行这一套骚操作之后，这个文件可编译成 CSS 文件。  
```
npm install stylus --save   
npm install stylus-loader --save   
npm run start  
```  

## 知识点  
* ### 1、配置别名  
在`webpack.base.conf.js`文件中配置自定义别名
```
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'styles': resolve('src/assets/styles'), //自定义style别名
    }
  },
```  
* 使用方法  
```
配置别名之前
@import "../../../assets/styles/varibles.styl"
@import "~@/assets/styles/varibles.styl"
配置别名以后
@import "~styles/varibles.styl"
import 'styles/iconfont.css' // 在webpack.base.conf.js 中添加style别名
```  
* ### 2、设置全局变量  
创建全局文件：src/assets/styles/`varibles.styl`  
```
添加全局变量
$bgColor = #00bcd4  //全局背景颜色
```  
使用方法  
```
@import "~styles/varibles.styl"
background: $bgColor;
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
