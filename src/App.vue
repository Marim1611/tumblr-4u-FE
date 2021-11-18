<template>

  <div id="app">
     <Header></Header>
      <component v-bind:is="component"></component>
      <button v-on:click="component='signIn'">CLICKMEE!!!!</button>
        
        
     

     
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content_1 from './components/Content_1.vue'
import SignIn from './components/SignIn.vue'



 
 
export default {

  name: 'App',
 

  components: {

    Header,
    'signIn' : SignIn,
    'content_1': Content_1
    
    
     
  },
  data(){

    return{

      component: 'content_1'
    }
    
  }
}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
</style>