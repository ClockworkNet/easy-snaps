require('./bootstrap');

import Vue from 'vue';
import App from './vue-components/app.vue';

import percent from './filters/percent.js';
Vue.filter('percent', percent);



const app = new Vue(App);

app.$mount('#app');