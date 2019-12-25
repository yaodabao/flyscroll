<template>
  <div id="app">
    <div style="width: 80%; height: 100%; margin: 0 auto;">
      <div class="title">1.常规 - 纵向滚动</div>
      <div style="width: 100%; height: 200px;">
        <FlyScroll :fStyle="vOption">
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
  created(){
    var _this = this;

    setTimeout(function(){
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
    },1000)

  },
  methods:{
    routerC(url){
      this.routerCNum ++;
      this.$router.push({path: url});
    },
  }
}
</script>

<style>
  html,body,#app{
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .title{
    font-size: 18px;
    font-weight: bold;
    line-height: 40px;
    border-bottom: 1px solid #666666;
    margin: 10px 0 40px 0;
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
