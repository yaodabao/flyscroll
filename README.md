# flyscroll

> 一款自定义滚动条组件

## Build Setup

### 1.使用方式

``` bash
# 安装依赖
npm install flyscroll --save

# main.js 使用方式
import FlyScroll from "flyscroll"
Vue.use(FlyScroll);

```

```html
<div style="width: 100%; height: 200px;">
  <FlyScroll :fStyle="vOption">
    <div class="v">
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
```

```js
vOption:{
  barWidth:"2px",           //滚动条的宽度 必填 建议：鼠标点击拖动功能建议像素宽度为6~10像素
  barColor:"#666",          //滚动条颜色
  railColor:"#eee",         //导轨颜色
  barMargin:"0px",          //垂直滚动条距离整个容器右侧距离
  type: "vertical",         //滚动条类型,纵向滚动和水平滚动 默认:纵向(vertical),可设置为横向(horizontal).
  hWidth: "0px",            //可移动区域的宽度 type: "horizontal" 必填
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


#### v1.2.7：
1.修复滚动条样式bug；

#### v1.1.22：
1.解决组件内部router-view内部页面数据变化，无法重绘滚动条问题；

#### v1.1.21：
1.修复细节bug，并增加鼠标点击滚动条拖动滑动功能；

#### v1.1.20：
1.修复浏览器大小变化，滚动条不联动变化问题；
2.修复组件内数据动态加载，无法自行联动滚动条变化问题；

#### v1.1.17：
1.修复滚动区域插槽父元素解构，初始化滚动条不显示问题；

#### v1.1.15：
1.修复组件内部数据更新后，滚动条未与之联动问题；

#### v1.1.14：
1.修复滚动扩散bug；

#### v1.1.3：
1.修复滚动抖动问题；
2.修复浏览器大小变化，不重新加载滚动条bug；
3.修复其他细节问题；

#### v1.1.2：
修复无法使用问题。

#### v1.1.0：
基本自定义滚动条功能完成。

#### v1.0.6：
完成一个完整的插件开发流程，并且成功应用于项目，接下来就是插件核心内容的开发过程，敬请期待....

### 4.Github

[https://github.com/yaodabao/flyscroll](https://github.com/yaodabao/flyscroll)

### 5.友情捐赠
如果您觉得对您有帮助，您可以请我喝杯奶茶。

![Image](https://github.com/yaodabao/flyscroll/blob/master/static/wx_coffee.jpg)
