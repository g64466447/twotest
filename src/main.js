import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* import axios from 'axios';
import Vue from 'vue';
Vue.prototype.$http = axios;
//默认的根路径
axios.defaults.baseURL = '/api' */
createApp(App).use(store).use(router).mount('#app')