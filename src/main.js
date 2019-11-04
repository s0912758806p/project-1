// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import './Js/jquery-3.4.1';
import './Js/dist/assets/owl.carousel.min.css';
import './Js/dist/owl.carousel';
import './Js/dist/aos';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
