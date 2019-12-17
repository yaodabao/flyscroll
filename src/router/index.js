
import Vue from 'vue'
import Router from 'vue-router'

import test_router from '../example/test_router'
import other from '../example/other'

Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'test_router',
    component: test_router
  },
  {
    path: '/other',
    name: 'other',
    component: other
  },
];

const router = new Router({
  // mode: 'history', //去掉url中的#
  routes
});


export default router;
