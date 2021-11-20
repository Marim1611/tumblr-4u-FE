<template>
<div id="app">
  <MatchMedia query="(max-width: 480px)" v-slot="{ matches }">
    <MobileNavBar v-if="matches" /> 
    <NavBar v-else /> 
    
  </MatchMedia>  
  
<!-- 
   <NavBar/> 
   <router-view/>  -->

   

</div>
</template>

<script>
import { MatchMedia } from "vue-component-media-queries";
import MobileNavBar from './homePage/HomePageMobileNavBar.vue'
import NavBar from './homePage/HomePageNavBar.vue'
//import Drawer from './components/TumblrsDrawer.vue'
export default {
  name: 'App',
  components:{
   'MobileNavBar':MobileNavBar,
   'NavBar':NavBar,
     'MatchMedia':MatchMedia,
    
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
 

</style>