<template>
  <div id="app">
    <div style="width: 80%; height: 100%; margin: 0 auto;">
      <FlyScroll :fStyle="hOption" :dataChangeTag="num">
        <div class="h">
          <div>{{num}}我是测试内容，因此我需要占行</div>
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
        height: "200px",          //滚动区域 - 可视高度
        barWidth:"4px",          //滚动条的宽度
        barColor:"#000",          //滚动条颜色
        railColor:"#eee",         //导轨颜色
        barMargin:"0px",         //垂直滚动条距离整个容器右侧距离单位（px）
        type: "horizontal",         //默认:纵向(vertical),可设置为横向(horizontal).
        hWidth: "2000px",
      },
      vOption: {
        width: "100%",            //滚动区域 - 可视宽度
        height: "600px",            //滚动区域 - 可视高度
        barWidth:"4px",            //滚动条的宽度
        barColor:"#000",          //滚动条颜色
        railColor:"#eee",         //导轨颜色
        type: "vertical",         //默认:纵向(vertical),可设置为横向(horizontal).
        barMargin:"0px",         //垂直滚动条距离整个容器右侧距离单位（px）
      },

      num: 0,
    }
  },
  created(){
    var _this = this;
    setInterval(function(){
      _this.num ++;
      console.log(_this.num)
    },2000)
  },
}
</script>

<style>
  html,body,#app{
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
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
