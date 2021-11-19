<template>
  <div id="homeDiv" v-bind:style="{'background-color': homeTheme[homeThemeIndex].backgroundColor}">
<!--    
  <NavBar/>  -->
  <MatchMedia query="(max-width: 480px)" v-slot="{ matches }">
    <MobileNavBar v-if="matches" /> 
    <div v-else>
         <NavBar/> 
<div id="divider" v-bind:style="{'background-color': homeTheme[homeThemeIndex].fontColor}"  ></div>
  <CreatPostSection/>
  <div id="dashBoard"  v-for="(post, i) in dashBoardPosts" :key="i" >

   <DashBoard v-bind:post="post" />
  </div>
    </div>
 
    
  </MatchMedia>  
  
  

  </div>
</template>

<script>
import { MatchMedia } from "vue-component-media-queries";
import MobileNavBar from './HomePageMobileNavBar.vue'
import NavBar from './HomePageNavBar.vue';  
import CreatPostSection from '../components/HomeCreatePost/HomeCreatePostSection.vue'
import DashBoard from './HomePageViewPost.vue'

export default {
  name: 'HomePage',
  components: {
    'NavBar':NavBar,
    'CreatPostSection':CreatPostSection,
    'DashBoard':DashBoard,
    'MobileNavBar':MobileNavBar,
      'MatchMedia':MatchMedia,
     
  },
   computed: {
        homeTheme: function(){
            return this.$store.state.homeTheme;
        },
        homeThemeIndex: function(){
            return this.$store.state.homeThemeIndex;
        },
         dashBoardPosts: function(){
            return this.$store.state.blogs;
        },
  },
}
</script>

<style scoped>
 #homeDiv{
width:100%;
height: 100%;
 }
#divider{
  width: 100%;
  height: 1px;
}
#dashBoard{
 align-items: center;
  display: inline;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 20px;
   
}
</style>
