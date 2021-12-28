<template>
<body style="background-color:#001935;">
      <HomePageNavBar/>
     <div class="Posts"> <CreatePostSection v-if="indxFlag2==0 "/>  </div>

<div class="container">
    <br/><br/><br/>
  <div class="row">
        <div class="col-0" > </div>

        <div class="col-8">
            <div  class="no-post"  v-if=" noPostsFlag==true && indxFlag2==0 ">            
                  <p class="p1">No posts available<br /></p>
                   <svg   viewBox="0 0 112 112" width="100" height="100" fill="rgba(var(--white-on-dark), 0.65)">
                    <path d="M25 8h31v29.5h31v41.015l-62-62V8zm0 17L13.243 13.243 9 17.485l16 16V95h61.515l8.752 8.752 4.243-4.242L87 87 25 25zm37 7V8l25 24H62z"></path>
                    </svg>
                  <p class="p2">Learn how to make a post.</p>
            </div>
            <p class="zero-follower"  v-if=" noPostsFlag==true && indxFlag2==1 "> 0 Followers</p>
            <div class="postss" v-if="indxFlag2==0 && noPostsFlag==false">
                    <ul class="pst">
                    <li class="posts_list" v-for="post of posts " :key="post.id">
                       <ViewPostCard v-bind:post="post"
                        v-bind:maxWidth="postCardWidth"
                        ></ViewPostCard> 
                    </li>
                    </ul>
            </div>
            <div class="Followers" v-if="indxFlag2==1 && noPostsFlag==false">
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

            <div class="Activity" v-if="indxFlag2==2 ">
                <Activity  v-bind:flag="noPostsFlag" />
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
    noPostsFlag:Boolean ,
    indxFlag:Number,
    Posts:Array,
    followersIds:Array,
    blogId:String,
    Notes:Array,
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
          this.indxFlag2=1;
      },
      button_post_action(){
          this.post_flag=true;
          this.followers_flag=false;
          this.activityFlag=false;
          this.indxFlag2=0;

      },
      buttonActivityAction(){
          this.post_flag=false;
          this.followers_flag=false;
          this.activityFlag=true;
          this.indxFlag2=2;

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
        //posts:this.Posts,
        image:" ",
        threeDotsFlag:false,
        activityFlag:false,
        searchFollower:" ",
        postCardWidth:"540px",
        Username:"",
        Title:"",
        indxFlag2:this.indxFlag

    }
  },

/* async created(){
   
      try {
        for (i = 0; i < this.followersIds.length; i++) {
         await axios.get(Browser().baseURL+`/user/follow/${this.followersIds[i]}`,
         { headers: { 'Authorization':   `Bearer ${localStorage.getItem('token')}` } }
         ).then(res => {
           this.followers[i] = res.data;//object of eh?
          console.log("followeeeeeeeeeers")
          console.log(res.data)
       
          })
         }
    } catch (e) {
      console.error(e);
    }
    this.followers_count = this.followers.length;

  }*/

  ///////////////
  /* async created(){
           console.log("aaaaaaaaaaaaaaaaaaaaaaaaa") ;
        try {
    
         await axios.get(Browser().baseURL+'/features').then(res => {
            this.followers = res.data.followers;
            this.posts= res.data.posts;
            this.followers_count = this.followers.length;
            this.post_count=this.posts.length;
            console.log(this.followers+"aaaaaaaaaaaaaaaaaaaaaaaaa")    
          })
        } catch (e) {
            console.log("^^^^^^^^^^^^^^^^^^")
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
.Posts{
  position: relative;
  top: 50px;
  left: 290px;
}
.no-post{
  position: relative;
  top:200px;
  left:340px;
  width: 500px;
  height: 200px;
}
.no-post-icon{
  position: relative;
  color: white;
}
.p1{
  color: rgb(221, 198, 198);
  font-size: 25px;
  position: relative;
  left: -50px;
}
.p2{
  color: rgb(240, 219, 219);
  font-size: 20px;
  position: relative;
  left:-55px;
}
.zero-follower{
  color: white;
  font-size: 25px;
  position: relative;
  top: -10px;
  left:150px;
}

</style>