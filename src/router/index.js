
import Vue from 'vue'
import Router from 'vue-router'

import test_router from '../example/test_router'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'test_router',
    component: test_router
  },
];

const router = new Router({
  base: '/inforelease/',
  // mode: 'history', //去掉url中的#
  routes
});


export default router;
