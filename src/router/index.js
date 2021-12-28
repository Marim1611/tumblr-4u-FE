//import { createRouter, createWebHistory } from 'vue-router'
import Vue from "vue";
import VueRouter from "vue-router";
import Explore from '../components/explore/Explore'
import Home from '../components/homePage/HomePage.vue'
import SignIn from '../components/registerPages/SignIn.vue'
import SignUp from '../components/registerPages/SignUp.vue'
import Age from '../components/registerPages/Age.vue'
import forgotPassword from '../components/registerPages/ForgetPassword.vue'
//import WelcomePage from '../components/registerPages/WelcomePage.vue'
import Render from '../components/renderOrder/Render.vue'
import DashBoard from '../components/homePage/HomePageNewPost.vue'
import NewBlog from '../components/blog/CreateNewBlogPage'
import CreatedBlogPage from '../components/blog/CreatedBlogPage.vue'
import SearchResults from '../components/search/SearchResultsPage'
import Trending from '../components/registerPages/Trending'
import Profile from '../components/profile/Profile.vue'
import Interests from '../components/registerPages/InterestsPage'
import Messaging from '../components/chat/MessagingMobileView.vue'
import SearchResultsOut from '../components/search/SearchResultsOutside'
import Likes from '../components/profile/likes.vue'
import Posts from '../components/profile/posts.vue'
import followingCard from '../components/profile/followingCard.vue'
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
    path: '/age',
    name: 'age',
    component:Age,
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component:forgotPassword,
  },
   {
        path: '/home',
        name: 'Home',
        component: Home,
        default:true
      },
      
      {
        path: '/explore',
        name: 'explore',
        component:Explore,
        props: true
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
        path: '/trending',
        name: 'trending',
        component:Trending
      },
  
      {
        path: '/blog/created',
        name: 'CreatedBlogPage',
        component:CreatedBlogPage
 
      },
      {
        path: '/autoCompleteSearchDash/:word',
        name: 'autoCompleteSearchDash',
        component:SearchResults,
        props: true
      },
      {
        path: '/profile',
        name: 'profile',
        component:Profile,
        props: true
      },
      {
        path: '/getting_to_know_tumblr',
        name: 'getting_to_know_tumblr',
        component:Interests,
      },
      {
        path: '/messaging',
        name: 'messaging',
        component:Messaging
      },
      {
        path: '/search/:word',
        name: 'search',
        component:SearchResultsOut,
        props: true
      },
      {
        path: '/posts',
        name: 'posts',
        component:Posts
      },
    
      {
        path: '/followingcard',
        name: 'followingCard',
        component:followingCard
      }
      
  
      
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;



 