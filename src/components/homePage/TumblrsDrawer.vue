<template>
  <div>
    <v-navigation-drawer
      id="blogDrawer"
      v-bind:width="655"
      v-bind:right="true"
      v-model="postToBegin"
      app
    >
   
     <!--  this.tumblrsObj.coverImg?this.tumblrsObj.coverImg:coverDefaultPhoto -->
      <div
        id="cover"
        v-bind:style="{
          'background-image': 'url(' +coverDefaultPhoto + ')',
           
        }"
      >

      
            <b-row>
              
       
            <div id="iconsDiv">
             <li>
                <b-icon
                  v-on:click="closeDrawer"
                  id="icon"
                  icon="x"
                  font-scale="2"
                  aria-hidden="true"
                ></b-icon>
              </li>

              <li v-if="!isOpenSearch">
                <div id="nameDiv" >
                  <p  v-if="!myUrl" @mouseover="myUrl=true" class="searchP">    {{ this.tumblrsObj.name }}  </p>
                    
        <p v-else @mouseover="myUrl=false"   class="searchP">    {{ this.tumblrsObj.name }}.tumblr.com   </p>
                
                </div>
              </li>

              <li v-else>
                <div >
                  
                  <input
                    v-model.trim="inputValue"
                    v-on:click="inputClicked = !inputClicked"
                    class="dropdown-input"
                    type="text"
                    placeholder="Search"
                  />
                  <div v-if="!inputValue"  v-show="inputClicked"   v-bind:style="{
                'background': homeTheme[homeThemeIndex].cardColor,
              }">
            <div
             class="sub-menu"
             id="searchList"
          >
              <p   
             
              v-bind:style="{
                          color: homeTheme[homeThemeIndex].fontColor,
                          'font-style': homeTheme[homeThemeIndex].fontStyle,
                          'cursor':'pointer'
                        }"
            >
              Popular tags
            </p>
            <p  v-for="item in popularTags"   v-bind:key="item.name"
              v-bind:style="{
                          color: homeTheme[homeThemeIndex].fontColor,
                          'font-style': homeTheme[homeThemeIndex].fontStyle,
                          'cursor':'pointer'
                        }"
            >
              {{ item }}
            </p>
          </div>
        </div>
        <div v-else   v-bind:style="{
                'background': homeTheme[homeThemeIndex].cardColor }">
                  <div
             class="sub-menu"
             id="searchList"
          >
              <p   
             
              v-bind:style="{
                          color: homeTheme[homeThemeIndex].fontColor,
                          'font-style': homeTheme[homeThemeIndex].fontStyle,
                          'cursor':'pointer'
                        }"
            >
              Popular tags
            </p>
            <p   
             v-for="item in popularTags"   v-bind:key="item.name"
             v-show="itemVisible(item)"
              v-bind:style="{
                          color: homeTheme[homeThemeIndex].fontColor,
                          'font-style': homeTheme[homeThemeIndex].fontStyle,
                          'cursor':'pointer'
                        }"
            >
              {{ item }}
            </p>
          </div>
         
          
        </div>
                </div>
              </li>
              <li>
                <div v-if="!isOpenSearch" :style="{'width':'40px'}"></div>
              </li>
              <li>
                  <b-icon
                    class="searchP"
                    v-on:click="isOpenSearch = !isOpenSearch"
                    id="icon"
                    icon="search"
                    font-scale="2"
                    aria-hidden="true"
                  ></b-icon>
                  
                 
              </li>
              <li>
                <b-icon
                  id="icon"
                  icon="patch-plus-fill"
                  font-scale="2"
                  aria-hidden="true"
                ></b-icon>
              </li>
              <li>
                <b-icon
                  id="icon"
                  v-on:click="toggleShare"
                  icon="reply-all-fill"
                  font-scale="2"
                  aria-hidden="true"
                ></b-icon>
              </li>
              <li>
                <b-icon
                  id="icon"
                  v-on:click="toggleDotted"
                  icon="three-dots"
                  font-scale="2"
                  aria-hidden="true"
                ></b-icon>
              </li>
              <!-- <li>
                    <b-icon id="icon" icon="three-dots" font-scale="2"  aria-hidden="true"></b-icon> 
                </li> -->
              <li>
                <v-btn v-if="!disableFollow" v-on:click="toggleFollow" elevation="2" small >{{
                  this.isFollow.status
                }}</v-btn>
              </li>
            </div>
        
        </b-row>
        <div class="menu-item">
          <transition name="fade" appear>
            <div
              class="sub-menu"
              id="dottedList"
              v-if="isOpendotted"
              v-bind:style="{
                'background': homeTheme[homeThemeIndex].cardColor,
              }"
            >
              <div v-for="(item, i) in dottedItems" :key="i" class="menu-item" v-on:click="blockBlog(item)">
                <li>
                  <div id="item">
                    <li>
                      <p
                        v-bind:style="{
                          color: homeTheme[homeThemeIndex].fontColor,
                          'font-style': homeTheme[homeThemeIndex].fontStyle,
                          display: 'inline-block',
                          margin: 'auto 1px',
                        }"
                      >
                        {{ item }}
                      </p>
                    </li>
                  </div>
                </li>
              </div>
            </div>
          </transition>
        </div>
        <div class="menu-item-share">
          <transition name="fade" appear>
            <div
           
              class="sub-menu-share"
              v-if="isOpenShare"
              v-bind:style="{
                'background': homeTheme[homeThemeIndex].cardColor,
              }"
            >
              <div
               id="shareList"
                v-for="(item, i) in shareItems"
                v-bind:key="i"
                class="menu-item"
              >
                <li>
                  <div id="item">
                    <li>
                      <p
                        v-bind:style="{
                          color: homeTheme[homeThemeIndex].fontColor,
                          'font-style': homeTheme[homeThemeIndex].fontStyle,
                          display: 'inline-block',
                          margin: 'auto 3px',
                        }"
                      >
                        {{ item }}
                      </p>
                    </li>
                  </div>
                </li>
              </div>
            </div>
          </transition>
        </div>
        <div id="avatarDiv">
           <div id="profileImg">
            <img
              class="imgshape"
              :src="this.tumblrsObj.avatar?this.tumblrsObj.avatar:avatarDefaultPhoto"
              alt="Avatar"
            />
          </div>
          <!-- <div class="avatarStyle">
            <avatar
              username="Jane Doe"
              v-bind:src="this.tumblrsObj.avatar?this.tumblrsObj.avatar:avatarPhoto"
              v-bind:size="100"
            ></avatar>
          </div> -->
 
<p id="userName">
          {{ this.tumblrsObj.title }}
          </p>
 
          
        </div>

         <b-col id="postsList">
          
           <div  v-if="myPosts.length">
 <div  id="dashBoard" v-for="(post, i) in myPosts" :key="i">
      <PostCard v-bind:post="post" v-bind:maxWidth="postCardWidth" />
       </div>
           </div>
           <div id="noPosts">
    <p id="noPostsP"
      v-bind:style="{
                          color: homeTheme[homeThemeIndex].fontColo2,
                          'font-style': homeTheme[homeThemeIndex].fontStyle,
                          
                        }"
    >No posts yet</p>
           </div>
        
           
        </b-col>
      </div>
    </v-navigation-drawer>
    <BlockDialog  v-if="this.showBlockDialog"
    v-bind:blocked="this.tumblrsObj.name"
     v-on:hideMe="hideBlockDialog($event)"
      v-on:doBlock="doBlock($event)"/>
  </div>
</template>

<script>
import PostCard from "../general/ViewPostCard.vue";
 import Vue from "vue";
import Browser from "../../mocks/browser";
import axios from "axios";
import BlockDialog from '../general/BlockDialog.vue'
/**
 *  TumblrDrawer with profile view of a tumblr user -not the current user- should appear when current user clicks on some user in the search drop down list
 * @example [none]
 */
export default {
  name: "TumblrDrawer",
  components: {
    PostCard:PostCard,
    BlockDialog:BlockDialog
  },
  data: function () {
    return {
      myUrl:false,
      drawerIsClosed:false,
      showBlogDrawer1:false,
       postCardWidth:"540px",
      isFollow: { status: "Follow" },
      inputValue: "",
      name:"",
      avatarDefaultPhoto:
        "https://assets.tumblr.com/images/default_avatar/octahedron_closed_128.png",
      coverDefaultPhoto:
        "https://assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1",
      isOpendotted: false,
      isOpenShare: false,
      isOpenSearch: false,
      openPopularTags:false,
      inputClicked:false,
      showBlockDialog:false,
       
       myPosts:[],
      dottedItems: ["Archive", "Ask", "", "Close"],
      shareItems: ["Facebook", "Twitter"],
      popularTags:["#art", "#crochet", "#baking", "#Block", "#Close","#art", "#crochet", "#baking"]
    };
  },
 
  methods: {
      closeDrawer() {
      this.$emit("closeDrawer", false);
     
    },
    hideDrawer() {
      this.showBlogDrawer1=this.showBlogDrawer;
    },
   
     itemVisible(item) {
      let currentName = item.toLowerCase();
      let currentInput = this.inputValue.toLowerCase();
      return currentName.includes(currentInput);
    },
    hideBlockDialog(hide){
 this.showBlockDialog = hide;
    },
   async doBlock(block){
 this.showBlockDialog = block;
 this.dottedItems[2]="Unblock"
  try {
          await axios.post( Browser().baseURL+`/blog/block/${this.blogId}`,
         
          {
             blockedBlogId:  this.tumblrsObj.id,
           },
            { headers: { 'Authorization':   `Bearer ${localStorage.getItem('token')}` } },
          ) 
     } catch (e) {
       console.error(e);
     }

    },
  
     /**
     * Function to toggle the follow button to follow or unfollow user in the drawer profile
     * @public This is a public method
     * @param {none}
     */
  async toggleFollow() 
  {
      if (this.isFollow.status == "Follow")
      {
        console.log("%$-------------%$%$")
        console.log( this.tumblrsObj.id)
  try {
          await axios.post( Browser().baseURL+'/follow',
         
          {
             blogId:  this.tumblrsObj.id,
           },
            { headers: { 'Authorization':   `Bearer ${localStorage.getItem('token')}` } },
          ) 
     } catch (e) {
       console.error(e);
     }
     Vue.set(this.isFollow, "status", "Unfollow");

      }
       
      else if (this.isFollow.status == "Unfollow")
      {
         try {
          await axios.post( Browser().baseURL+'/unfollow',
         
          {
             blogId:  this.tumblrsObj.id,
           },
            { headers: { 'Authorization':   `Bearer ${localStorage.getItem('token')}` } },
          ) 
     } catch (e) {
       console.error(e);
     }
      Vue.set(this.isFollow, "status", "Follow");
      }
       
    },
    toggleShare(){
      this.isOpenShare = !this.isOpenShare
      this.isOpendotted=false
    },
     toggleDotted(){
      this.isOpendotted = !this.isOpendotted
      this.isOpenShare=false
    //    console.log("---------------- please ------------------")
    // console.log(this.blockedBlogIds)
    //    console.log(this.tumblrsObj.id)
    //  console.log(this.blockedBlogIds.indexOf(this.tumblrsObj.id))
    if(this.blockedBlogIds.indexOf(this.tumblrsObj.id) == -1)
     this.dottedItems[2]='Block'
     else
      this.dottedItems[2]='Unblock'

    
    },
     isMockServer(baseUrl){
     
        if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
          return false
          else 
          return true
    },
     async blockBlog(item){
        if (item == "Block")
        {
          this.showBlockDialog=true;
        }
          else if (item == "Unblock")
          {
   Vue.set(this.dottedItems,2, "Block");
        try{
           await axios.post( Browser().baseURL+ `/blog/unblock/${this.blogId}`,
         
          {
             unblockedBlogId:  this.tumblrsObj.id,
           },
            { headers: { 'Authorization':   `Bearer ${localStorage.getItem('token')}` } },
          ) 

        }
    
          catch (e) {
       console.error(e);
     }
     } 
      }
  },
  computed: {
      postToBegin: {
      get() {
        return this.showBlogDrawer;
      },
      set(newVal) {
        return newVal;
      },
      },
       getDisableFollow: {
      get() {
        return this.disableFollow;
      },
      set(newVal) {
        return newVal;
      },
      },
     /**
     * Function to get the home page color theme array from the store
     * @public This is a public method
     * @param {none}
     */
    homeTheme: function () {
      return this.$store.state.homeTheme;
    },
     /**
     * Function to get the home page colortheme Index from the store
     * @public This is a public method
     * @param {none}
     */
    homeThemeIndex: function () {
      return this.$store.state.homeThemeIndex;
    },
      blogId: function () {
      return this.$store.state.user.primaryBlogId;
    },
     blockedBlogIds: function () {
      return this.$store.state.user.blockedBlogsId;
    },
  },
  props: {
     showBlogDrawer: Boolean,
    tumblrsObj: Object,
    disableFollow:Boolean
  },
  async created(){
   
  
     let myRoute=""
         if (this.isMockServer(Browser().baseURL))
         myRoute=Browser().baseURL+'/posts'
         else
         //`/blog/${this.blogId}/getBlogPosts`
        myRoute=Browser().baseURL+`/blog/${this.tumblrsObj.id}/getBlogPosts`
      try {
      
         await axios.get(myRoute,
         { headers: { 'Authorization':`Bearer ${localStorage.getItem('token')}` } }
         ).then(res => {
             this.myPosts = res.data.res.postsToShow
          //  this.myPosts = res.data.res.data.postsToShow;
       
          })
    } catch (e) {
      console.error(e);
    }

  }
    
  
};
</script>

<style scoped>
#noPosts{
  margin-top: 80px;
  text-align: center;
}
#noPostsP{
   font-size:50px;
   font-weight: bold;
}

#cover{
  max-width: 100%;
  height: 300px;  
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
   background-color: #464747;
}
#profileImg {
  text-align: center;
  width: 110px;
 
  margin: auto;
  padding: auto;
}
.imgshape {
  border-radius: 50%;
  position: relative;
  top: 5px;
  border-style: solid;
  border-width: 5px;
  border-color: white;
}
 
#avatarDiv {
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  justify-content: center;
  margin-top: 40px; 
}
#rightDiv{
  display: flex;
  flex-direction: row;
}
#leftDiv{
  display: flex;
  flex-direction: row;
  
}
#searchList{
  overflow-y: scroll;
  height: 140px;
}
.menu-item .sub-menu {
  position: absolute;
  /* top: 0; */
  left: 55%;
  /* left: 100px; */
  /* top: 20px; */
  /* right: 0; */
  transform: translateX(100%) translateY(-80%);
  width: max-content;
  border-radius: 5px;
}
#postsList{
  margin-left: 10px;
 
}
.menu-item-share .sub-menu-share {
  position: absolute;
  /* top: 0; */
  left: 48%;
  /* left: 100px; */
  /* top: 20px; */
  /* right: 0; */
  transform: translateX(100%) translateY(-110%);
  width: max-content;
  border-radius: 5px;
}

.searchP {
  display: inline-block;
  padding: 3px;
}

#homeDrawer {
  width: 90%;
  display: flex;
}
#spacer {
  width: 300px;
}
#nameDiv{
display: inline-block;
text-align: center;
}
#icon {
  color: white;
  cursor: pointer;
}
#dottedList{
margin-top:70px;
}
#navbar {
  align-items: center;
  width: 100%;
  height: 20%;
  position: relative;
  display: flex;
}
 
#userName{
  position: relative;
   text-align: center;
  font-size: 50px;
  color: 'black';
  font-weight: bold;
  margin: auto;
  padding: auto;
  margin-left: 200px;

              
}
#iconsDiv {
  display: flex;
  flex-direction: row;
  text-align: center;
  position: relative;
  flex-grow: 2;
  flex-shrink: 2;
  float: right;
  height: 200px;
  
  justify-content: space-around;
}
ul {
  position: absolute;
  display: flex;
  flex-direction: row;
  padding: 0;
  float: right;
  margin: 0;
}
li {
  position: relative;
  padding: 10px;
  list-style: none;
}
#input_container {
  position: relative;
  padding: 0 0 0 20px;
  margin: 0 20px;
  border: none;

  direction: rtl;
  width: 100px;
}
.dropdown-input,
.dropdown-selected {
  padding: 10px 10px;
  border-radius: 8px;
  opacity: 0.3;
  background-color:#d9ffcc ;
  width: 150px;
  line-height: 1.5em;
  outline: none;
}
#iconS {
  position: absolute;
  bottom: 2px;
  left: 5px;
  width: 24px;
  height: 24px;
  color: white;
  cursor: pointer;
}

.dropdown-input:focus,
.dropdown-selected:hover {
  background: #fff;
  border-color: #e2e8f0;
}

.dropdown-input::placeholder {
  opacity: 0.7;
  color: white;
}
 
#item {
  padding: 0px;
  margin: 0px;
  width: 100px;
}
#item:hover {
  background:  grayscale(100%) brightness(51%);
  cursor: pointer;
}

.avatarStyle {
  width: 25px;
  margin: auto;
  padding: auto;
  /* position: absolute; */
  /* right: 50%; */
}
.searchP{
  
  color: white;
  font-size: 20px;
  margin-left: 10px;
                    
}
 
</style>
