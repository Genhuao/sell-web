// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Axios from 'axios';

import Goods from './components/goods/goods.vue';
import Ratings from './components/ratings/ratings.vue';
import Seller from './components/seller/seller.vue';

import './common/stylus/index.styl';

Vue.prototype.$axios = Axios;
Axios.default.baseURL = 'http://192.168.1.107/api/';
Axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
Axios.interceptors.response.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

Vue.use(VueRouter);
Vue.config.productionTip = false;

let router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {path: '/', redirect: {name: 'goods'}},
    {name: 'goods', path: '/goods', component: Goods},
    {name: 'ratings', path: '/ratings', component: Ratings},
    {name: 'seller', path: '/seller', component: Seller}
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
