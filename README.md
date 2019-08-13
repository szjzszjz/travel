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
## git 分支开发
1、git上建立分支  
2、找到项目当前文件夹，打开命令行窗口  
3、将分支拉取下来：`git pull`  
4、切换到分支上进行开发：`git checkout index-icons`   

5、开发完毕在当前项目文件夹下，执行命令：`git add .`  
6、提交：`git commit -m '提交日志'`  
7、推送到分支远程仓库：`git push`  
8、回到主分支：`git checkout master`  
9、将主分支代码合并到主干上：`git merge origin/index-icons`
10、推送至远程仓库：`git push`  


## 拉取某个分支的代码内容  
在利用命令行或者git bash执行命令 `git clone -b index-icons https://github.com/szjzszjz/travel.git`
  
## plugins  
### 1、[vue-awesome-swiper（Vue轮播图插件）](https://github.com/surmon-china/vue-awesome-swiper)  
安装(指定稳定版本2.6.7)  
```
npm install vue-awesome-swiper@2.6.7 --save
```  
应用1: [项目中轮播图组件](https://github.com/szjzszjz/travel/blob/index-swiper/src/pages/home/components/Swiper.vue)  
应用2： [图片浏览组件](https://github.com/szjzszjz/travel/blob/master/src/common/gallery/Gallery.vue)  
### 2、[better-scroll(Vue上下滚动视图插件)](https://github.com/ustbhuangyi/better-scroll)  
安装  
```text
npm install better-scroll --save
```  
应用:[项目中滚动视图组件](https://github.com/szjzszjz/travel/blob/master/src/pages/city/components/List.vue)  

### 3、[vuex](https://vuex.vuejs.org/zh/)
* 目的：Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式  
安装  
```text
npm install vuex --save
```
应用：[项目中对vuex的具体使用](https://github.com/szjzszjz/travel/tree/master/src/store)

## 包安装   
### 1、fastClick 
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
### 2、stylus  
* 目的：CSS 预处理，顾名思义，预先处理 CSS。那 stylus 咋预先处理呢？stylus 给 CSS 添加了可编程的特性，也就是说，在 stylus 中可以使用变量、函数、判断、循环一系列 CSS 没有的东西来编写样式文件，执行这一套骚操作之后，这个文件可编译成 CSS 文件。  
```
npm install stylus --save   
npm install stylus-loader --save   
npm run start  
```  

### 3、axios  
* 目的：处理ajax请求  
```text
npm install axios --save
npm run start
```  

## 知识点  
### 1、配置别名  
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
### 2、设置全局变量  
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
### 3、请求转发  
找到配置文件：config/index.js  
配置如下内容  
```vuejs
    proxyTable: {
      '/api':{
        target: 'http://localhost:8081',
        pathRewrite: {
          '^/api':'/static/mock'
        }
      }
    }
```

### 4、keep-alive 标签
应用
```vuejs
<!--    <keep-alive> 通过路由加载页面之后 通过该标签可将内容暂时缓存到内存中 避免下次重新请求数据-->
    <keep-alive>
      <router-view/>
    </keep-alive>
```
详情页面动态路由及banner布局
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
