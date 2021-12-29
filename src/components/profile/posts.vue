<template>
  <div>
      <Profile/>
      <b-container fluid class="PostsMargin">
      <b-row>
        <b-col cols="3"></b-col>
        <b-col cols="5">
          <profileCard
            v-for="post in posts"
            v-bind:key="post.id"
            :text="post.text"
            :photo="post.photo"
            :profileImg="post.profileImg"
            :quote="post.quote"
            :link="post.link"
            :chat="post.chat"
            :audio="post.audio"
            :video="post.video"
            :tag="post.tag"
            :note="post.note"
            :flag="0"
          />
          </b-col>
        <b-col  cols="4">
          <h4 class="third">RECENTLY LIKED</h4>
          
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Profile from './Profile.vue'
import ProfileCard from "./ProfileCard.vue";

import Browser from "../../mocks/browser";
import axios from "axios";
export default {
  name: "posts",
  async created() {
      console.log("%%%%%%$$$$------------$$$$$$$%%%%%%%%%%%%$$$$$$$$$$%")
    console.log(this.blogId)
      let myRoute=""
         if (this.isMockServer(Browser().baseURL))
         myRoute=Browser().baseURL+'/posts'
         else
        myRoute=Browser().baseURL+`/blog/${this.blogId}/getBlogPosts`
      try {
      
         await axios.get(myRoute,
         { headers: { 'Authorization':   `Bearer ${localStorage.getItem('token')}` } }
         ).then(res => {
           
            this.posts =res.data.res.postsToShow;
            console.log(  this.posts )
       
          })
    } catch (e) {
      console.error(e);
    }

  },
  methods:{
    isMockServer(baseUrl){
     
        if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
          return false
          else 
          return true
    },  
  },
  data(){
      return{
      flag: false,
      posts: [],
      }
  },
  components: {
    ProfileCard,
    Profile
  },
  computed:{
     blogId: function () {
      return this.$store.state.user.primaryBlogId;
    },
  }
};
</script>

<style scoped>
.PostsMargin{
    margin-top:50px;

}

</style>
