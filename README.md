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
## 问题解决  
* 项目中click事件有时候在某些机型上会出现300ms延迟的情况  
解决方法：在工程目录下打开命令行 执行如下命令  
```
npm install fastclick --save  

重启服务 
npm run start  

引入  
import fastClick from 'fastclick'  

使用  
fastClick.attach(document.body)  
```  
安装fastclick依赖  

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
