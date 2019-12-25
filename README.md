# flyscroll

> 一款自定义滚动条组件

## Build Setup

### 1.使用方式

``` bash
# 安装依赖
npm install flyscroll --save
# yarn add flyscroll

# main.js 使用方式
import FlyScroll from "flyscroll"
Vue.use(FlyScroll);

```

```html
<div class="title">1.常规 - 纵向滚动</div>
  <div style="width: 100%; height: 200px;">
    <FlyScroll :fStyle="vOption">
      <!-- <div class="v">
        <div>1我是测试内容，因此我需要占行</div>
        <div>2我是测试内容，因此我需要占行</div>
        <div>3我是测试内容，因此我需要占行</div>
        <div>4我是测试内容，因此我需要占行</div>
        <div>5我是测试内容，因此我需要占行</div>
        <div>6我是测试内容，因此我需要占行</div>
        <div>7我是测试内容，因此我需要占行</div>
        <div>8我是测试内容，因此我需要占行</div>
        <div>9我是测试内容，因此我需要占行</div>
        <div>10我是测试内容，因此我需要占行</div>
      </div> -->
      <div v-html="str"></div>

    </FlyScroll>
  </div>

  <div class="title">2.常规 - 横向滚动</div>
  <div style="width: 100%; height: 200px;">
    <FlyScroll :fStyle="hOption">
      <div class="h" style="width: 2000px;">
        <div>1我是测试内容，因此我需要占行</div>
        <div>2我是测试内容，因此我需要占行</div>
        <div>3我是测试内容，因此我需要占行</div>
        <div>4我是测试内容，因此我需要占行</div>
        <div>5我是测试内容，因此我需要占行</div>
        <div>6我是测试内容，因此我需要占行</div>
        <div>7我是测试内容，因此我需要占行</div>
        <div>8我是测试内容，因此我需要占行</div>
        <div>9我是测试内容，因此我需要占行</div>
        <div>10我是测试内容，因此我需要占行</div>
      </div>
    </FlyScroll>
  </div>

  <div class="title">3.router-view - 动态数据</div>
  <div class="menu">
    <button @click="routerC('/')">默认</button>
    <button @click="routerC('/other')">other</button>
  </div>
  <div style="width: 100%; height: 200px;">
    <FlyScroll :fStyle="test3" :dataChangeTag="routerCNum">
      <router-view></router-view>
    </FlyScroll>
  </div>
```

```js

  data () {
    return {
      test3: {
        barWidth:"10px",            //滚动条的宽度
        barColor:"#000",          //滚动条颜色
        railColor:"#eee",         //导轨颜色
        type: "vertical",         //默认:纵向(vertical),可设置为横向(horizontal).
        barMargin:"0px",         //垂直滚动条距离整个容器右侧距离单位（px）
      },
      hOption: {
        barWidth:"10px",          //滚动条的宽度
        barColor:"#000",          //滚动条颜色
        railColor:"#eee",         //导轨颜色
        barMargin:"0px",         //垂直滚动条距离整个容器右侧距离单位（px）
        type: "horizontal",         //默认:纵向(vertical),可设置为横向(horizontal)
      },
      vOption: {
        barWidth:"10px",            //滚动条的宽度
        barColor:"#000",          //滚动条颜色
        railColor:"#eee",         //导轨颜色
        type: "vertical",         //默认:纵向(vertical),可设置为横向(horizontal).
        barMargin:"0px",         //垂直滚动条距离整个容器右侧距离单位（px）
      },

      routerCNum: 0,
      str: '',
    }
  },
```

注：具体Dome，参考src下App.vue。

#### 浏览器变化时

插件会自动监测浏览器变换，触发重绘。

### 2.参数说明

 参数  | 类型 | 说明
 ---- | ----- | -----
 fStyle  | Object | 组件基本样式
 dataChangeTag  | Number | （主动触发重绘滚动条）如果外部数据变化,则需要传递一个永久自增的数字,以便于我们重绘滚动条。

### 3.版本说明


#### v1.2.14：
1.插件重构，并优化；


### 4.Github

[https://github.com/yaodabao/flyscroll](https://github.com/yaodabao/flyscroll)

### 5.友情捐赠
如果您觉得对您有帮助，您可以请我喝杯奶茶。

![Image](https://github.com/yaodabao/flyscroll/blob/master/static/wx_coffee.jpg)
