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
<FlyScroll :fStyle="vOption"></FlyScroll>
```

```js
vOption:{
  width: "100%",            //滚动区域 - 可视宽度（支持 %和px）
  height: "300px",          //滚动区域 - 可视高度（支持 %和px）
  barWidth:"2px",           //滚动条的宽度 必填 建议：2~4个像素
  barColor:"#666",          //滚动条颜色
  railColor:"#eee",         //导轨颜色
  barMargin:"0px",          //垂直滚动条距离整个容器右侧距离
  type: "vertical",         //滚动条类型,纵向滚动和水平滚动 默认:纵向(vertical),可设置为横向(horizontal).
  hWidth: "0px",            //可移动区域的宽度 type: "horizontal" 必填
},
```

### 2.版本说明

#### v1.1.12：
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

### 3.友情捐赠
如果您觉得对您有帮助，您可以请我喝杯奶茶。

![Image](https://raw.githubusercontent.com/yaodabao/flyscroll/master/static/wx_coffee.jpg)
