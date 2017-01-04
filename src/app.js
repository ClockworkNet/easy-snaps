require('./bootstrap');

import Vue from 'vue';
import App from './vue-components/app.vue';
import Notice from './vue-components/notice.vue';
import Snapshot from './vue-components/output.vue';
import Gbu from './vue-components/gbu.vue';
import Projects from './vue-components/projects.vue';

Vue.component('notice', Notice);
Vue.component('snapshot', Snapshot);
Vue.component('gbu', Gbu);
Vue.component('projects', Projects);

import percent from './filters/percent.js';
Vue.filter('percent', percent);

const app = new Vue(App);


app.$mount('#app');