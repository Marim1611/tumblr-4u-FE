<template>
  <div id="app">
<<<<<<< Updated upstream
     <Header></Header>
      <component v-bind:is="component"></component>
      <button v-on:click="component='signIn'">CLICKMEE!!!!</button>
        
        
     

     
=======
     <search-bar></search-bar>
>>>>>>> Stashed changes
  </div>
</template>

<script>
<<<<<<< Updated upstream
import Header from './components/Header.vue'
import Content_1 from './components/Content_1.vue'
import SignIn from './components/SignIn.vue'



 
=======
import searchBar from './components/search.vue';
>>>>>>> Stashed changes

export default {

  name: 'App',

  components: {
<<<<<<< Updated upstream

    Header,
    'signIn' : SignIn,
    'content_1': Content_1
    
    
     
  },
  data(){

    return{

      component: 'content_1'
    }
    
=======
     'search-bar': searchBar
>>>>>>> Stashed changes
  }
}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
</style>