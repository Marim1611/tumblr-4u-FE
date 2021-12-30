<template>
  <div>
    <Profile/>
    <div class="row row-cols-1 row-cols-md-4 likesCards">
    
        <profileCard
            v-for="(post,i) in posts"
            v-bind:key="i"
            :post="post"
            :x="0"
            :l="1"
            :profileUser="profileUser"
            
          />
    <div class="col mb-4">      
    </div>
    
     </div>
    
    </div>
    
    
    
    
    
    
    

    

   <!--<div class="card-deck">
      <div class=card>

          <profileCard
            v-for="post in posts"
            v-bind:key="post.id"
            :img="post.img"
            :content="post.content"
            :tag="post.tag"
            :notes="post.notes"
            :link="post.link"
            :flag="1"
          />
          </div>
          </div>-->

  
</template>

<script>
import axios from "axios";
import Profile from './Profile.vue'
import ProfileCard from "./ProfileCard.vue";
import Browser from "../../mocks/browser";
export default {
  name: "likes",
  async created() {
    console.log("%%%%%%$$$$------------$$$$$$$%%%%%%%%%%%%$$$$$$$$$$%");
    console.log(this.blogId);
    let myRoute = "";
    if (this.isMockServer(Browser().baseURL))
      myRoute = Browser().baseURL + "/posts";
    else myRoute = Browser().baseURL + `/blog/${this.blogId}/getLikedPosts`;
    try {
      await axios
        .get(myRoute, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          this.posts = res.data.res.postsToShow;
          this.recentlyPost = this.posts[0];
        });
    } catch (e) {
      alert(e);
    }

    if (this.isMockServer(Browser().baseURL))
         myRoute= Browser().baseURL+'/blog'
         else
        myRoute= Browser().baseURL+`/blog/view/${this.posts.blogId}`
        console.log(myRoute)
       try {
         await axios.get(myRoute,
          { headers: { 'Authorization':`Bearer ${localStorage.getItem('token')}` } })
          .then(res => {    
            this.profileUser={
           name: res.data.res.data.name,
           img:res.data.res.data.img,
          }
             
          })
    } catch (e) {
      console.error(e);
    }
    
  },
  data() {
    return {
      flag: false,
      posts: [],
      notes: [],
      notesCount: [],
      profileUser:{},
      
    };
  },
  computed:{
     blogId: function () {
      return this.$store.state.user.primaryBlogId;
    },
  },
  methods:{
    isMockServer(baseUrl) {
      if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
        return false;
      else return true;
    },
  },
  components: {
    ProfileCard,
    Profile,
  },
};
</script>

<style scoped>
#TheHeader {
  position: fixed;
  top: 0;
  width: 100%;
}
.likesCards{
  margin-top:20px;
  margin-left:10px;
}
</style>