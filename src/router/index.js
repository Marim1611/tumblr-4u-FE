//import { createRouter, createWebHistory } from 'vue-router'
import Vue from "vue";
import VueRouter from "vue-router";
import Explore from '../components/HelloWorld.vue' 
import Home from '../components/homePage/HomePage.vue'
import SignIn from '../components/registerPages/SignIn.vue'
import SignUp from '../components/registerPages/SignUp.vue'
//import WelcomePage from '../components/registerPages/WelcomePage.vue'
import Render from '../components/renderOrder/Render.vue'
import DashBoard from '../components/homePage/HomePageNewPost.vue'
import NewBlog from '../components/blog/CreateNewBlogPage'
import CreatedBlog from '../components/blog/CreatedBlogPage'
import SearchResults from '../components/search/SearchResultsPage'
Vue.use(VueRouter);
const routes = [
  {
   
    path: '/',
    name: 'Render',
    component: Render
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
      {
        path: '/search',
        name: 'search',
        component:SearchResults,
        props: true
      },

  
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;



