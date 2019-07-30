// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import router from './router'
import '../static/js/rem.js'
import iView from 'iview'; // 导入组件库

import 'iview/dist/styles/iview.css'; // 导入样式
import 'swiper/dist/css/swiper.css';
import 'fullpage.js/vendors/scrolloverflow';
import VueFullPage from 'vue-fullpage.js';
import axios from './axios';
import 'babel-polyfill'
// ...

Vue.use(VueFullPage);
Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
