//import { createRouter, createWebHistory } from 'vue-router'
import Vue from "vue";
import VueRouter from "vue-router";
import Explore from '../components/HelloWorld.vue'
import Home from '../homePage/HomePage.vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import WelcomePage from '../components/WelcomePage.vue'
import DashBoard from '../homePage/HomePageNewPost.vue'
import NewBlog from '../components/CreateBlogPage'
import CreatedBlog from '../components/CreatedBlogPage'
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
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
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
      {
        path: '/new/blog',
        name: 'newBlog',
        component:NewBlog
      },
  
      {
        path: '/blog/created',
        name: 'createdBlog',
        component:CreatedBlog
      },
  
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;



