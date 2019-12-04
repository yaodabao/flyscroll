import JsScroll from './JsScroll.vue'
let scroll = {}

scroll.install = function (Vue, options) {
  Vue.prototype.$msg = 'Hello I am test.js'
  Vue.prototype.$myMethod = function (arr) {
    console.log(arr)
  }
  Vue.component(JsScroll.name, JsScroll)
}
export default scroll
