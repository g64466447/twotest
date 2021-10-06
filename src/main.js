import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* import AMap from 'vue-amap' */
import Vant from 'vant';
import 'vant/lib/index.css';
/* Vue.use(VueAMap); */
/* VueAMap.initAMapApiLoader({
    key: 'c4de786c74a450ac841ea096528c6ff1',
    plugin: ['AMap.Autocomplete', 'AMap.Geocoder', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.AMapManager', 'AMap.Geolocation'],
    v: '1.4.4',
    uiVersion: '1.0.11'
}); */
/* use(VueAMap) */
/* import axios from 'axios';

import Vue from 'vue';
Vue.prototype.$http = axios;
//默认的根路径
axios.defaults.baseURL = '/api' */
var app = createApp(App).use(store).use(router).use(Vant);
app.mount('#app')