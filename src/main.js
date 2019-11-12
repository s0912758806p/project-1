// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import MintUI from 'mint-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'mint-ui/lib/style.css';

import './Js/jquery-3.4.1';
import './Js/dist/assets/owl.carousel.min.css';
import './Js/dist/owl.carousel';
import './Js/dist/aos';

Vue.use(ElementUI, MintUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: (h) => h(App),
	components: { App },
	template: '<App/>'
});
