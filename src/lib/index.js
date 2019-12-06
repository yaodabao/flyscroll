import FlyScroll from './FlyScroll.vue'
let scroll = {}

scroll.install = function (Vue) {
  Vue.component(FlyScroll.name, FlyScroll)
}
export default scroll
