import FlyScroll from './FlyScroll.vue'
let scroll = {}

scroll.install = function (Vue, options) {
  Vue.prototype.$msg = 'Hello I am test.js'
  Vue.prototype.$myMethod = function (arr) {
    console.log(arr)
  }
  Vue.component(FlyScroll.name, FlyScroll)
}
export default scroll
