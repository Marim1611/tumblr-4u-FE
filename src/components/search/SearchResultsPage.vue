<template>
 <div v-bind:style="{
      'background-color': homeTheme[homeThemeIndex].backgroundColor,
    }">
    
    <div>
      <NavBar />
 <div
            id="divider"
            v-bind:style="{
              'background-color': homeTheme[homeThemeIndex].fontColor,
            }"
          ></div>
      <b-container class="container">
     
      
    <b-row> 
       
        <h1 v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor,'font-family':homeTheme[homeThemeIndex].fontStyle}">{{this.$route.params.word}}</h1>
 
           
             <b-icon id="icon"  icon="grid-1x2-fill" font-scale="2" aria-hidden="true"  :style="{'color': homeTheme[homeThemeIndex].fontColor, 'cursor':'pointer' }"></b-icon> 
   
     
    <b-col />
        
       <b-col id="postsList">
            <div id="dashBoard" v-for="(post, i) in dashBoardPosts" :key="i">
      <PostCard v-bind:post="post" v-bind:maxWidth="postCardWidth1" />
       </div>
        <!-- <div class="row" v-for="(rowIdx,i) in Math.ceil(dashBoardPosts.length / 3)" :key="i">
     <b-row class="one-third column" v-for="(item,i) in dashBoardPosts.slice(3 * (rowIdx - 1), 3 * rowIdx)"  :key="'A'+i">
            
      
      <PostCard v-bind:post="item" v-bind:maxWidth="postCardWidth2" />
 
 </b-row>
    
</div> -->
         
       </b-col>
        <b-col  id="sidePanel" >
          
                <RelatedTags/>
                 <RelatedBlogs/>
            
       </b-col>
  </b-row>
</b-container>
      
    </div>
  
    
      

      
 </div>

  
</template>

<script>
import axios from 'axios';
 //import api from '../../api';
import NavBar from '../homePage/HomePageNavBar.vue';
//import axios from 'axios'; 
// import { MatchMedia } from "vue-component-media-queries";
// import MobileNavBar from "../homePage/HomePageMobileNavBar.vue";
import PostCard from "../general/ViewPostCard.vue";
import RelatedTags from "./RelatedTagsCard.vue";
import RelatedBlogs from "./RelatedBlogsCard.vue"
export default {
    name:'search',
   components: {
    NavBar:NavBar,
    // MatchMedia: MatchMedia,
    // MobileNavBar: MobileNavBar,
    PostCard:PostCard,
    RelatedTags:RelatedTags,
    RelatedBlogs:RelatedBlogs
   
     
  },
  data : function () {
    return {
         postCardWidth1:"650px",
         postCardWidth2:"300px",  
         dashBoardPosts:[]
        
    }
  },
  
  computed:{
    
    //     dashBoardPosts: function () {
    //   return this.$store.state.blogs;
    // },
    homeTheme: function(){
            return this.$store.state.homeTheme;
        },
        homeThemeIndex: function(){
            return this.$store.state.homeThemeIndex;
        },
    
  },
    props:{
        searchWord:String
    },
     async created() {
    try {
     
       console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")   
       const res =await axios.get('http://localhost:3000/autoCompleteSearchDash')
      this.dashBoardPosts = res.data.resultPostHashTag;
       console.log(res.data)
    } catch (e) {
        console.log("^^^^^^^^^^^^^^^^^^")
      console.error(e);
    }
  },
}
</script>

<style scoped>
 #dashBoard {
  align-items: center;  
  display: inline;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 70px;
  padding-left: 500px;
}
#sidePanel{
    
    margin: 0px 10px 15px 250px;
}
#container{
    width:100%;
    
}

#divider {
  width: 100%;
  height: 1px;
}
</style>