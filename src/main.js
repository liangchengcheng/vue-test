import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerMap from './routers'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueResource)
Vue.use(VueRouter)

$.ajaxSettings.crossDomain = true;

//实例化VueRouter
let router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true
});

let app = Vue.extend({});

routerMap(router);

router.start(app, "#app");
