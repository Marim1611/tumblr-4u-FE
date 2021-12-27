<template>
  <div id="drawerBg">
    <v-navigation-drawer
      id="blogDrawer"
      v-bind:width="600"
      v-bind:right="true"
      v-model="postToBegin"
      app
    >
      <div
        id="cover"
        v-bind:style="{
          'background-image': 'url(' + this.tumblrsObj.coverImg + ')',
           
        }"
      >

      
            <b-row>
            
        
            <div id="iconsDiv">
            

            <div id="leftDiv">
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
                  <p   class="searchP">    {{ this.tumblrsObj.name }}  </p>
                    
        
                
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
                'background-color': homeTheme[homeThemeIndex].cardColor,
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
                'background-color': homeTheme[homeThemeIndex].cardColor }">
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
            </div>
              <li>
                <div v-if="!isOpenSearch" :style="{'width':'40px'}"></div>
              </li>
              <div id="rightDiv">
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
                  v-on:click="toggleShare"
                  icon="reply-all-fill"
                  font-scale="2"
                  aria-hidden="true"
                ></b-icon>
              </li>
              <li>
                  <b-icon
                    class="searchP"
                    id="icon"
                    icon="gear-fill"
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

              </div>
              
              <!-- <li>
                    <b-icon id="icon" icon="three-dots" font-scale="2"  aria-hidden="true"></b-icon> 
                </li> -->
              
            </div>
         
        </b-row>
        <div class="menu-item">
          <transition name="fade" appear>
            <div
              class="sub-menu"
              id="dottedList"
              v-if="isOpendotted"
              v-bind:style="{
                'background-color': homeTheme[homeThemeIndex].cardColor,
              }"
            >
              <div v-on:click=" closeDotted(item)" v-for="(item, i) in dottedItems" :key="i" class="menu-item">
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
        <div class="menu-item-share">
          <transition name="fade" appear>
            <div
           
              class="sub-menu-share"
              v-if="isOpenShare"
              v-bind:style="{
                'background-color': homeTheme[homeThemeIndex].cardColor,
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
          <router-link to ="/profile"
          >
           <div id="profileImg">
            <img
              class="imgshape"
              :src="this.tumblrsObj.avatar?this.tumblrsObj.avatar:avatarPhoto"
              alt="Avatar"
            />
          </div>
          </router-link>
          
           
          <p id="userName">
            <!-- {{ this.tumblrsObj.name }} -->
          {{ this.tumblrsObj.name }}
          </p>
        </div>

         <b-col id="postsList">
            <div id="dashBoard" v-for="(post, i) in myPosts" :key="i">
      <PostCard v-bind:post="post" v-bind:maxWidth="postCardWidth" />
       </div>
        </b-col>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
 
import PostCard from "../general/ViewPostCard.vue";
import axios from 'axios';
import Browser from '../../mocks/browser'
import Vue from "vue";
/**
 *  TumblrDrawer with profile view of a tumblr user -not the current user- should appear when current user clicks on some user in the search drop down list
 * @example [none]
 */
export default {
  name: "TumblrDrawer",
  components: {
    PostCard:PostCard,
  },
  data: function () {
    return {
      drawerIsClosed:false,
      showBlogDrawer1:false,
       postCardWidth:"540px",
      isFollow: { status: "Follow" },
      inputValue: "",
      name:"",
      avatarPhoto:
        "https://assets.tumblr.com/images/default_avatar/octahedron_closed_128.png",
      isOpendotted: false,
      isOpenShare: false,
      isOpenSearch: false,
      openPopularTags:false,
      inputClicked:false,
      myPosts:[],
      dottedItems: ["Archive", "Following", "Close"],
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
     /**
     * Function to toggle the follow button to follow or unfollow user in the drawer profile
     * @public This is a public method
     * @param {none}
     */
    toggleFollow() {
      if (this.isFollow.status == "Follow")
        Vue.set(this.isFollow, "status", "Unfollow");
      else if (this.isFollow.status == "Unfollow")
        Vue.set(this.isFollow, "status", "Follow");
    },
    toggleShare(){
      this.isOpenShare = !this.isOpenShare
      this.isOpendotted=false
    },
     toggleDotted(){
      this.isOpendotted = !this.isOpendotted
      this.isOpenShare=false
    },
     closeDotted(item){
       if (item == "Close")
      this.isOpendotted = false
       
    }, isMockServer(baseUrl){
     
        if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
          return false
          else 
          return true
    },      
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
    }
  },
  props: {
     showBlogDrawer: Boolean,
    tumblrsObj: Object,
  },
      async created(){
         let myRoute=""
         if (this.isMockServer(Browser().baseURL))
         myRoute=Browser().baseURL+'/posts'
         else
        myRoute=Browser().baseURL+`/blog/${this.tumblrsObj.id}/getBlogPosts`
      try {
      
         await axios.get(myRoute,
         { headers: { 'Authorization':   `Bearer ${localStorage.getItem('token')}` } }
         ).then(res => {
            this.myPosts = res.data.postsToShow;
       
          })
    } catch (e) {
      console.error(e);
    }

  }
  
};
</script>

<style scoped>
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
}
#icon {
  color: white;
  cursor: pointer;
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
