//import { createRouter, createWebHistory } from 'vue-router'
import Vue from "vue";
import VueRouter from "vue-router";
import Explore from '../components/HelloWorld.vue'
import Home from '../homePage/HomePage.vue'
import SignIn from '../components/SignIn.vue'
import WelcomePage from '../components/WelcomePage.vue'
import DashBoard from '../homePage/HomePageNewPost.vue'
Vue.use(VueRouter);
const routes = [
  {
   
    path: '/',
    name: 'WelcomePage',
    component: WelcomePage
  },
  {
   
    path: '/signIn',
    name: 'SignIn',
    component: SignIn,
  },
   {
        path: '/home',
        name: 'Home',
        component: Home,
        default:true
      },
      
      {
        path: '/explore',
        name: 'Explore',
        component:Explore
      },
      {
        path: '/dashBoard',
        name: 'dashBoard',
        component:DashBoard
      },
  
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;



