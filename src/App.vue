<template>
  <div id="app">
    <FlyScroll :fStyle="hOption">
      <div class="h">
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
        <div>11我是测试内容，因此我需要占行</div>
        <div>12我是测试内容，因此我需要占行</div>
        <div>13我是测试内容，因此我需要占行</div>
        <div>14我是测试内容，因此我需要占行</div>
        <div>15我是测试内容，因此我需要占行</div>
        <div>16我是测试内容，因此我需要占行</div>
        <div>17我是测试内容，因此我需要占行</div>
        <div>18我是测试内容，因此我需要占行</div>
        <div>19我是测试内容，因此我需要占行</div>
      </div>

    </FlyScroll>
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
        <div>11我是测试内容，因此我需要占行</div>
        <div>12我是测试内容，因此我需要占行</div>
        <div>13我是测试内容，因此我需要占行</div>
        <div>14我是测试内容，因此我需要占行</div>
        <div>15我是测试内容，因此我需要占行</div>
        <div>16我是测试内容，因此我需要占行</div>
        <div>17我是测试内容，因此我需要占行</div>
        <div>18我是测试内容，因此我需要占行</div>
        <div>19我是测试内容，因此我需要占行</div>
      </div>

    </FlyScroll>
  </div>
</template>

<script>
import Vue from 'vue'
import FlyScroll from './lib/index.js'
Vue.use(FlyScroll)
export default {
  name: 'App',
  data () {
    return {
      hOption: {
        width: "100%",            //滚动区域 - 可视宽度
        height: "300px",          //滚动区域 - 可视高度
        barWidth:"4px",          //滚动条的宽度
        barColor:"#000",          //滚动条颜色
        railColor:"#eee",         //导轨颜色
        barMargin:"0px",         //垂直滚动条距离整个容器右侧距离单位（px）
        type: "horizontal",         //默认:纵向(vertical),可设置为横向(horizontal).
        hWidth: "1800px",
      },
      vOption: {
        width: "100%",            //滚动区域 - 可视宽度
        height: "300px",          //滚动区域 - 可视高度
        barWidth:"4px",          //滚动条的宽度
        barColor:"#000",          //滚动条颜色
        railColor:"#eee",         //导轨颜色
        barMargin:"0px",         //垂直滚动条距离整个容器右侧距离单位（px）
      }

    }
  },
}
</script>

<style>
  .v div{
    height: 80px;
  }
  .h{
    width: 2000px; overflow: hidden;
  }
  .h div{
    width: 200px; height: 40px; float: left;
  }

</style>
