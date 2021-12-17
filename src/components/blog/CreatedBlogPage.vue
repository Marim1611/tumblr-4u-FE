<template>
<body style="background-color:#001935;">
<div class="container">
    <HomePageNavBar/>
    <br/><br/><br/>
  <div class="row">
        <div class="col-1" > </div>

        <div class="col-7">
            <div class="Posts" v-if="post_flag">
                 <CreatePostSection/>  
            </div>

            <div class="postss">
                    <ul class="pst">
                    <li class="posts_list" v-for="post of posts" :key="post.id">
                         <div class="row">
                            <div class="col">
                              <div class="username-post">{{ post.username }}<br/>  </div>
                              <v-img class="imgggg" :src="post.image_link" ></v-img>    
                              <div class="comment" {{post.comment}} ></div>     
                              <div class="note">{{ post.notes_cnt}} notes </div> 
                            </div>

                            <!--<div class="col">
                              <button class="three-dots" v-on:click="three_dots_handler"><b-icon  icon="three-dots-vertical"></b-icon></button>
                              <div class="three-dots-box"  v-if="three_dots_flag">
                              <button class="R">Report</button>
                              <button class="B">Block</button>
                              <button class="C">Close</button>
                              </div>
                            </div> -->

                         </div>        
                    </li>
                    </ul>
            </div>
            
            <div class="Followers" v-if="followers_flag==true">
                <p id="p1"> {{followers_count}} Followers  </p> 
               <!-- <input type="text" class="follower-search" placeholder=" Search your followers " v-on:change="search_follower">-->
                <div class="follower_names">
                    <ul class="f_names">
                    <li class="names_list" v-for="follower of followers  " :key="follower.id">
                         <div class="row">
                            <div class="col">
                            <v-img class="imggg" :src="follower.image_link" ></v-img>         
                            <div class="username-follower">{{ follower.username }}<br/>  </div>
                            <div class="title-follower">{{follower.title}} </div>
                            </div>

                            <div class="col">
                              <button class="three-dots" v-on:click="three_dots_handler"><b-icon  icon="three-dots-vertical"></b-icon></button>
                              <div class="three-dots-box"  v-if="three_dots_flag"><!--to be  handeled-->
                                <button class="R">Report</button>
                                <button class="B">Block</button>
                                <button class="C">Close</button>
                              </div>
                            </div>

                          </div>
                    </li>
                    </ul>
                 </div>
              </div>
         </div> 

        <div class="col-4 " >
              <div class="form-group">
                     <button class="button-follower" v-on:click="button_follower_action"> Followers &emsp; &emsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;{{followers_count}}</button>
              </div>
              <div class="form-group">
                     <button class="button-post" v-on:click="button_post_action"> Posts &emsp;&emsp;&emsp; &nbsp; &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;{{post_count}}</button>
              </div>
                <!--<div class="form-group">
                     <button class="button-queue" v-on:click="button_queue_action"> queue &emsp;&emsp;&emsp; &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;{{queue_count}}</button>
                </div>-->
        </div>

   </div>
</div>
<div class="end"></div>
</body>
</template>

<script>
import axios from "axios";
import CreatePostSection from '../createPost/CreatePostSection.vue'
import HomePageNavBar from '../homePage/HomePageNavBar.vue'
export default {
  name: 'CreatedBlog',

  props: {
},
  components: {  
  CreatePostSection,
  HomePageNavBar 
  },
  methods: {
 button_follower_action(){
    this.followers_flag=true;
    this.post_flag=false;

 },
 button_post_action(){
     this.post_flag=true;
     this.followers_flag=false;

 },
inc_followers_count(){

    this.followers_count++;
},
three_dots_handler(){
    if(this.three_dots_flag)this.three_dots_flag=false;
    else this.three_dots_flag=true;
}

 },
  data(){
    return{  
        followers_count:0,
        post_count:0,
        followers_flag:false,
        post_flag:false,
        followers:[],
        posts:[],
        image:" ",
        three_dots_flag:false

    }
  },
  async created(){
    try {
      const res = await axios.get(`http://localhost:3002/Followers`);
      const res2 = await axios.get(`http://localhost:3002/Posts`);

      this.followers = res.data;
      this.followers_count = this.followers.length;

      this.posts = res2.data;
      this.post_count=this.posts.length;

    } catch (e) {
      console.error(e);
    }


  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-follower{
 background-color:#001935;
 color: white;
}
.button-post{
 background-color:#001935;
 color: white;
}
.button-test-follower{
 background-color:#001935;
 color: white;  
}
.button-test-draft{
 background-color:#001935;
 color: white; 
}
.end{
    height: 700px;
}
#p1{
color: seashell;
}
#p2{
color: seashell;
}
.follower-search{
    position: relative;
    left:180px;
    top:-40px;
    color:white;
    background-color: rgb(90, 81, 114);
}
.f_names{
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}
.names_list{
  margin: 0px;
  padding: 0px;
  background-color: white;
  color:black;
  border-style: solid ;
}
.Posts{
    position: relative;
    left:-70px;
    top:-20px;

}
.imggg{
      border-radius: 8px;
      width: 50px;
      position: relative;
      top:20px;
      left: 5px;
}
.username-follower{
    position: relative;
    left: 65px;
    top:-20px;
    font-weight: bold;
}
.title-follower{
    position: relative;
    left: 65px;
    top:-20px;
}
.three-dots{
    position: relative;
    left: 270px;
    top:10px;
}
.three-dots-box{
  position: relative;
  left: 250px;
  top: 20px;
  background-color: white;
  border-style: solid white ;
  width: 70px;
}
</style>