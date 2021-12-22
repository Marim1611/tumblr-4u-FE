<template>

  <div id="app">
    <!-- <router-view/> -->
      <!-- <ViewPostCard/>-->
      <!-- <CreatedBlogPage v-bind:Username="u"
                        v-bind:Title="t"></CreatedBlogPage > -->
        <router-link to="/blog/created"  v-bind:Username="u"
                        v-bind:Title="t">      
                        
        </router-link>

     
  </div>
  
</template>

<script>
 
 
// import NewBlog from './components/blog/CreateNewBlogPage'
import CreatedBlogPage from './components/blog/CreatedBlogPage'
//import ViewPostCard from'./components/general/ViewPostCard'
export default {

  name: 'App',
 

  components: {
   CreatedBlogPage,
  // ViewPostCard
  },
  data(){

    return{
      u:"ahmed",
      t:"mm"
       
    }
    
  }
}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

</style>