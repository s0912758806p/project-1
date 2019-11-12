import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';

import Home from '../components/Home';
import Product from '../components/Product.vue';
import Oursecret from '../components/Oursecret.vue';
import Awards from '../components/Awards.vue';
import Events from '../components/Events.vue';
import About from '../components/About.vue';

Vue.use(Router, Vuex);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/oursecret',
      name: 'Oursecret',
      component: Oursecret
    },
    {
      path: '/awards',
      name: 'Awards',
      component: Awards
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/',
      redirect: 'Home'
    }
  ]
});
