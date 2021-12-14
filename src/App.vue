<template>

  <div id="app">
     <!--       <router-view/> 
       -->

            <!--<router-link to="/new/blog" >
                 </router-link>-->


       <CreatedBlogPage/>
       <!--
      -->

        
     

     
  </div>
  
</template>

<script>
 
 
// import NewBlog from './components/blog/CreateNewBlogPage'
import CreatedBlogPage from './components/blog/CreatedBlogPage.vue'
//import SignUp from './components/registerPages/SignUp.vue'
export default {

  name: 'App',
 

  components: {
    //'SignUp':SignUp 
    CreatedBlogPage
 },
  data(){

    return{

       
    }
    
  }
}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

</style>