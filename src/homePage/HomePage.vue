<template>
  <div id="homeDiv" v-bind:style="{'background-color': homeTheme[homeThemeIndex].backgroundColor}">
   
  <NavBar/> 
  <div id="divider" v-bind:style="{'background-color': homeTheme[homeThemeIndex].fontColor}"  ></div>
  <CreatPostSection/>
    
    
  </div>
</template>

<script>
import NavBar from './HomePageNavBar.vue';  
import CreatPostSection from '../components/HomeCreatePost/HomeCreatePostSection.vue'
export default {
  name: 'HomePage',
  components: {
    'NavBar':NavBar,
    'CreatPostSection':CreatPostSection
     
  },
   computed: {
        homeTheme: function(){
            return this.$store.state.homeTheme;
        },
        homeThemeIndex: function(){
            return this.$store.state.homeThemeIndex;
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
 
</style>
