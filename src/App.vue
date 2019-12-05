<template>
  <div id="app">
    <FlyScroll></FlyScroll>
  </div>
</template>

<script>
import Vue from 'vue'
import FlyScroll from './lib/index.js'
Vue.use(FlyScroll)
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
