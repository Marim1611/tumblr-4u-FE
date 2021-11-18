//import { createRouter, createWebHistory } from 'vue-router'
import Vue from "vue";
import VueRouter from "vue-router";
import Explore from '../components/HelloWorld.vue'
import Home from '../homePage/HomePage.vue'
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/explore',
    name: 'Explore',
    component:Explore
  },
  //  {
  //   path: '/inbox',
  //   name: 'Inbox',
  //   component:Inbox
  // }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;



