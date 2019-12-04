<template>
  <div id="app">
    <JsScroll></JsScroll>
  </div>
</template>

<script>
import Vue from 'vue'
import JsScroll from './lib/index.js'
Vue.use(JsScroll)
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
