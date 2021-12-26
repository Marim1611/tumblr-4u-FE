<template>
<body style="background-color:#001935;">
      <HomePageNavBar/>
<div class="container">
    <br/><br/><br/>
  <div class="row">
        <div class="col-0" > </div>

        <div class="col-8">
            <div class="Posts" v-if="post_flag">
                 <CreatePostSection/>  
            </div>

            <div class="postss" v-if="post_flag">
                    <ul class="pst">
                    <li class="posts_list" v-for="post of posts " :key="post.id">
                       <ViewPostCard v-bind:post="post"
                        v-bind:maxWidth="postCardWidth"
                        ></ViewPostCard> 
                    </li>
                    </ul>
            </div>
            
            <div class="Followers" v-if="followers_flag==true">
                <p id="p1"> {{followers_count}} Followers  </p> 
                <input type="text" class="follower-search" placeholder=" Search your followers " v-on:change="searchFollower">
                <div class="follower_names">
                    <ul class="f_names">
                    <li class="names_list" v-for="follower of followers  " :key="follower.id">
                        <Followers v-bind:image="follower.image_link"
                        v-bind:username="follower.username"
                        v-bind:title="follower.title"
                        v-bind:followerFlag="follower.followerFlag"
                        ></Followers>
                    </li>
                    </ul>
                 </div>
              </div>

            <div class="Activity" v-if="activityFlag==true">
                <Activity/>
              </div>

         </div> 

        <div class="col-4 " >
              <p id="u">{{Username}} <br/></p>
              <p id="t" > {{Title}} </p> 
              <div class="form-group">
                     <button class="button-follower" v-on:click="button_follower_action"> Followers &emsp; &emsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;{{followers_count}}</button>
              </div>
              <div class="form-group">
                     <button class="button-post" v-on:click="button_post_action"> Posts &emsp;&emsp;&emsp; &nbsp; &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;{{post_count}}</button>
              </div>
              <div class="form-group">
                     <button class="button-activity" v-on:click="buttonActivityAction"> Activity <b-icon  icon="graph-up" class="graph-up"></b-icon> </button>
              </div>
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
import Activity from './Activity.vue'
import Followers from './Followers.vue'
import ViewPostCard from '../general/ViewPostCard.vue'
import Browser from '../../mocks/browser'

export default {
  name: 'CreatedBlogPage',

  props: {
    Username:String,
    Title:String,
    blogId:String 
},
  components: {  
  CreatePostSection,
  HomePageNavBar,
  Activity ,
  Followers,
  ViewPostCard,
  },
  methods: {
 button_follower_action(){
    this.followers_flag=true;
    this.post_flag=false;
    this.activityFlag=false;

 },
 button_post_action(){
     this.post_flag=true;
     this.followers_flag=false;
     this.activityFlag=false;

 },
 buttonActivityAction(){
     this.post_flag=false;
     this.followers_flag=false;
     this.activityFlag=true
 },
inc_followers_count(){

    this.followers_count++;
},
threeDotsHandler(){
    if(this.threeDotsFlag)this.threeDotsFlag=false;
    else this.threeDotsFlag=true;
},
 /*async getInfo() {
 try {
         await axios.get(Browser().baseURL+`/user/new/blog`
         ,
         { headers: { 'Authorization':   `Bearer ${localStorage.getItem('token')}` } }
         ).then(res => {
            this.Username=res.data.name;
            this.Title=res.data.title;
          })
    } catch (e) {
      console.error(e);
    }
 }*/
    /*created: function(){
        this.getInfo();
    },*/
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
        threeDotsFlag:false,
        activityFlag:false,
        searchFollower:" ",
        postCardWidth:"540px",

    }
  },



  /*async created(){

        try {
         await axios.get(Browser().baseURL+`/blog/followers/${this.blogId}`
         ,
         
          { headers: { 'Authorization':`Bearer ${localStorage.getItem('token')}` } })
          .then(res => {            
           this.followers = res.data.followers;//object of eh?
           this.followers_count = this.followers.length;
            //this.posts= res.data.posts; 
            //this.post_count=this.posts.length;    
            //this.blogId=??to be sent to followers       
          })
    } catch (e) {
      console.error(e);
    }
        

  },*/
    /*async created(){
      try {
      
         await axios.get(Browser().baseURL+`/blog/${this.blogId}/getBlogPosts`,
         { headers: { 'Authorization':   `Bearer ${localStorage.getItem('token')}` } }
         ).then(res => {
            this.posts = res.data.postsToShow;
            console.log("myyyyyyyyyyyy postsssssssssssssss")
            console.log(res.data)
       
          })
    } catch (e) {
      console.error(e);
    }
  }*/
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
.button-activity{
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
    left:530px;
    top:-40px;
    color:white;
    background-color: rgb(90, 81, 114);
}
.f_names{
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}
.pst{
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  position: relative;
  left: 120px;
}
.names_list{
  margin: 0px;
}
.follower_names{
  margin: 0px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
}
.posts_list{
  margin: 0px;
  padding: 5px;


}
.Posts{
    position: relative;
    left:100px;
    top:-20px;
}
.imggg{
      border-radius: 8px;
      width: 50px;
      position: relative;
      top:20px;
      left: 5px;
}
.imgggg{
      border-radius: 8px;
      width: 800px;
      position: relative;
      top:0px;
      left: 0px;

}
.pp{
      border-radius: 0px;
      width: 100px;
      height: 60px;
      position: relative;
      top:00px;
      left: 00px;
}

.username-post{
  font-weight: bold;
  position: relative;
  top:0px;
  left: 10px;
}


.three-dots-post{
    position: relative;
    left: 550px;
    top:-15px;

}
.three-dots-box-posts{
  position: relative;
  left: 650px;
  top:-420px;
  background-color: white;
  border-style: solid white ;
  width: 100px;
  height: 80px;
}

.postss{
  position: relative;
  top: 100px;

}
.cls{
  position: relative;
  top: 10px;
  left:10px;
  font-weight: bold;

}
.cpy{
  position: relative;
  top: 10px;
  left:00px;
  font-weight: bold;

}
.comment{
  position: relative;
  top:0px;
  left: 00px;
}
.note{
  position: relative;
  top:0px;
  left: 00px;
  color: darkseagreen;
}
.box{
  position: relative;
  top:0px;
  background-color: white;
  color:black;
  border-style: solid ;
}
.graph-up{
  position: relative;
  left:130px ;
}
#u{
color: white;
font-size: 20px;
}
#t{
color: rgb(201, 180, 180);
position: relative;
top:-10px;
}
</style>