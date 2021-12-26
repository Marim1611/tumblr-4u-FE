 <template>
	<div id="radar">
    <h4 v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">Radar</h4>
                <div
            id="divider2"
            v-bind:style="{
              'background-color': homeTheme[homeThemeIndex].fontColor,
            }"
          ></div>
         <PostCard v-bind:post="posts[index]" v-bind:maxWidth="postCardWidth"  />
    </div>
</template>

<script>
import PostCard from "./ViewPostCard.vue"
import axios from 'axios';
import Browser from '../../mocks/browser'
export default {
  data(){
return{
  postCardWidth:"300px",
  posts:[],
  index:0
  
}
  },
components:{
PostCard:PostCard
},

 computed: {
     
    homeTheme: function () {
      return this.$store.state.homeTheme;
    },
     
    homeThemeIndex: function () {
      return this.$store.state.homeThemeIndex;
    },
  },
     async created() {
      /// radar posts
     try {
         await axios.get( Browser().baseURL+'/ranPosts',
         { headers: { 'Authorization':   `Bearer ${localStorage.getItem('token')}` } }
         ).then(res => {
            this.posts = res.data.postsToShow;       
          })
    } catch (e) {
           console.log("error in dashboard")
      console.error(e);
    }
  this.index=this.randomPost();
   console.log( this.posts[this.index])
  },

 methods: {
    randomPost() {
 
      return   Math.floor(Math.random() * this.posts.length);
      
    }
    }
 
}
</script>

<style scoped>
#radar{
  width: 350px;
  margin: 40px;
}
#divider2 {
  width: 300px;
  height: 0.5px;
  margin-bottom: 15px;
}
</style>