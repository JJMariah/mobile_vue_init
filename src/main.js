// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import api from './api/index'
import 'vant/lib/index.css';

Vue.use(Vant);

import '@/permission'
import store from './store'
Vue.config.productionTip = false
// 将API方法绑定到全局
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
