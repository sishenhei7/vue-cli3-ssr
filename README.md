# vue-cli3-ssr
ssr build upon vue-cli3 with Vue 2.0, vue-router &amp; vuex

## 介绍

我在[vue-ssr-test](https://github.com/sishenhei7/vue-ssr-test)里面已经做了一个ssr框架。

但是由于vue-cli3的开发体验很好，所以我计划把ssr建立在vue-cli3上面。

## 使用

目前项目已经能够正常运行了，方法如下：

```
// 开发环境, 已启用热更新(localhost:8080)
npm run dev

// 生产环境(localhost:8080)
npm start
```

## 优点

1. 开发环境拥有和vue-cli3一样的报错体验等。
2. 生产环境的客户端配置使用的是vue-cli3的配置。
3. 支持利用vue inspect命令导出webpack设置。
4. 支持利用npm run report导出manifest的可视化视图。

## 难点

项目中使用官网介绍的[以一个文件的方式使用解析好的配置](https://cli.vuejs.org/zh/guide/webpack.html#%E5%AE%A1%E6%9F%A5%E9%A1%B9%E7%9B%AE%E7%9A%84-webpack-%E9%85%8D%E7%BD%AE)来导入vue-cli3使用的webpack配置。
