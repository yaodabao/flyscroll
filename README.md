# flyscroll

> 一款自定义滚动条插件

## Build Setup

1.使用方式

``` bash
# 安装依赖
npm install flyscroll --save

# 卸载依赖
# npm uninstall flyscroll

# main.js 使用方式
import FlyScroll from "flyscroll"
Vue.use(FlyScroll);

```

```html
<FlyScroll :fStyle="vOption"></FlyScroll>
```

```js
vOption:{
  width: "100%",            //宽度
  height: "100px",          //高度
  barWidth:"0px",           //滚动条的宽度 必填
  barColor:"#666",          //滚动条颜色
  railColor:"#eee",         //导轨颜色
  barMargin:"0px",          //垂直滚动条距离整个容器右侧距离
  type: "vertical",         //滚动条类型,纵向滚动和水平滚动 默认:纵向(vertical),可设置为横向(horizontal).
  hWidth: "0px",            //可移动区域的宽度 type: "horizontal" 必填
},
```

2.版本说明

2019-12-06 - v1.1.1：
修复无法使用问题。

2019-12-06 - v1.1.0：
基本自定义滚动条功能完成。

2019-12-05 - v1.0.6：
完成一个完整的插件开发流程，并且成功应用于项目，接下来就是插件核心内容的开发过程，敬请期待....
