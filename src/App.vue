<template>
  <div id="app">
    <div style="width: 80%; height: 100%; margin: 0 auto;">
      <div style="width: 100%; height: 200px;">
        <FlyScroll :fStyle="hOption" :dataChangeTag="num">
          <div class="h">
            <div>{{num2}}我是测试内容，因此我需要占行</div>
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
      <div style="width: 100%; height: 200px;">
        <FlyScroll :fStyle="vOption" :dataChangeTag="num2">
          <!-- <div class="v">
            <div>{{num2}}我是测试内容，因此我需要占行</div>
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
        barWidth:"4px",          //滚动条的宽度
        barColor:"#000",          //滚动条颜色
        railColor:"#eee",         //导轨颜色
        barMargin:"0px",         //垂直滚动条距离整个容器右侧距离单位（px）
        type: "horizontal",         //默认:纵向(vertical),可设置为横向(horizontal)
      },
      vOption: {
        barWidth:"4px",            //滚动条的宽度
        barColor:"#000",          //滚动条颜色
        railColor:"#eee",         //导轨颜色
        type: "vertical",         //默认:纵向(vertical),可设置为横向(horizontal).
        barMargin:"0px",         //垂直滚动条距离整个容器右侧距离单位（px）
      },

      num: 0,
      num2: 0,
      str: '',
    }
  },
  created(){
    var _this = this;
    // setInterval(function(){
    //   _this.num2 ++;
    // },5000);

      setTimeout(function(){
        _this.num2 ++;
        _this.str = '<div class="v">'+
          '<div>1我是测试内容，因此我需要占行</div>'+
          '<div>2我是测试内容，因此我需要占行</div>'+
          '<div>3我是测试内容，因此我需要占行</div>'+
          '<div>4我是测试内容，因此我需要占行</div>'+
          '<div>5我是测试内容，因此我需要占行</div>'+
          '<div>6我是测试内容，因此我需要占行</div>'+
          '<div>7我是测试内容，因此我需要占行</div>'+
          '<div>8我是测试内容，因此我需要占行</div>'+
          '<div>9我是测试内容，因此我需要占行</div>'+
          '<div>10我是测试内容，因此我需要占行</div>'+
        '</div>';
      },5000)

    // this.vOption.height = (document.documentElement.clientHeight - 200) + "px";
    // //初始化新增监听
    // var _this = this;
    // window.onresize = function(){
    //   _this.num++;
    //   _this.vOption.height = (document.documentElement.clientHeight - 200) + "px";
    // }
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
