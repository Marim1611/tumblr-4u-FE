<template>
 
<div id="navDiv"  > 
   <nav id = 'navbar' v-bind:style="{'background': homeTheme[homeThemeIndex].backgroundColor}">
  <div id="navItem" >
      <b-icon id="icon" v-on:click="openDrawerNav" icon="justify" font-scale="1.5"  aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor, 'float': 'right'}" ></b-icon> 
         <v-navigation-drawer id="homeDrawer" v-model="showDrawer" app v-bind:style="{'background': homeTheme[homeThemeIndex].backgroundColor}" >
                      <ul id = 'navbar' >
                          <li>
  <b-icon id="iconD" icon="x" v-on:click= "showDrawer=false" font-scale="1.5"  aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'float': 'right'}" ></b-icon>
                          </li>
                          <li>
 <v-btn elevation="2" >   <b-icon id="icon" icon="pencil-fill" font-scale="1.5"  aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'float': 'right'}" ></b-icon> Create post</v-btn>
                          </li>
                          <li>
                              <router-link to="/home" class="nav-item nav-link" style="text-decoration: none"> 
                         <div id="itemID">
                            <b-icon id="iconD" icon="house-door-fill" font-scale="1.5"  aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
                          <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}">Dashboard</p>
                           </div>    
            
                 
            </router-link>
                              </li> 
                                <li>
                 <router-link to="/explore" class="nav-item nav-link" style="text-decoration: none"> 
                                  <div id="itemID">
<b-icon id="iconD" icon="compass" font-scale="1.5"  aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon> 
                     <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor,  'font-family':homeTheme[homeThemeIndex].fontStyle,'text-decoration': 'none'}">Explore</p>   
        
                                  </div>
                                    </router-link>
        
             
        </li>
        <li>
          
   <router-link to="/inbox" class="nav-item nav-link" style="text-decoration: none"> 

          <div id="itemID">
 <b-icon id="iconD"  icon="envelope-fill" font-scale="1.5" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon>    
       <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle, 'text-decoration': 'none'}">Inbox</p>   

          </div>
           
            </router-link>
         </li> 
                  





 
                    <li>
          
   <router-link to="/messaging" class="nav-item nav-link" style="text-decoration: none"> 

          <div id="itemID">
 <b-icon id="iconD"  icon="emoji-laughing" font-scale="1.5" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon>    
       <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle, 'text-decoration': 'none'}">Messaging</p>   

          </div>
           
            </router-link>
         </li> 
            <li>
          
   <router-link to="/inbox" class="nav-item nav-link" style="text-decoration: none"> 

          <div id="itemID">
 <b-icon id="iconD"  icon="lightning-fill" font-scale="1.5" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon>    
       <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle, 'text-decoration': 'none'}">Activity</p>   

          </div>
           
            </router-link>
         </li> 
            <li>
          
   <router-link to="/likes" class="nav-item nav-link" style="text-decoration: none"> 

          <div id="itemID">
 <b-icon id="iconD"  icon="Heart-fill" font-scale="1.5" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon>    
       <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle, 'text-decoration': 'none'}">Likes</p>   

          </div>
           
            </router-link>
         </li>    
     
        <!-- end  -->
           <li>
          <router-link to="/inbox" class="nav-item nav-link" style="text-decoration: none"> 
            <div id="itemID">
  <b-icon id="iconD"  icon="person-plus-fill" font-scale="1.5" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon>    
                                <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor,  'font-family':homeTheme[homeThemeIndex].fontStyle,'text-decoration': 'none'}">Followings</p>   

            </div>
          
            </router-link> 
         </li> 
           <li>
          <router-link to="/inbox" class="nav-item nav-link" style="text-decoration: none" > 
           <div id="itemID">
   <b-icon id="iconD"  icon="gear-fill" font-scale="1.5" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon>    
                                <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'text-decoration': 'none'}">Settings</p>   
           </div>
         
            </router-link> 
         </li> 
           <li>
          <router-link to="/inbox" class="nav-item nav-link" style="text-decoration: none"> 
            
            <div id="itemID">
   <b-icon id="iconD"  icon="question-circle-fill" font-scale="1.5" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon>    
                                <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle, 'text-decoration': 'none'}">Help</p>   

            </div>
         
            </router-link> 
         </li> 
           <li v-on:click="changePalette()" >
              <router-link to="" class="nav-item nav-link" style="text-decoration: none"> 
             <div id="itemID">
  <b-icon id="iconD"  icon="brush-fill" font-scale="1.5" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon>    
                                <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor,  'font-family':homeTheme[homeThemeIndex].fontStyle,'text-decoration': 'none'}">Change Palette</p>   
             </div>
              </router-link> 
         </li> 
            <!-- blogs  -->
             <div v-for="(blog, i) in blogs" :key="'A'+ i" class="menu-item">
                  <li >
                    <div id="rowItemF">
                       <div class="avatarStyle">
                <avatar
              username="Jane Doe"
               v-bind:rounded=false
             v-bind:src="blog.img?blog.img:defaultImg"
              v-bind:size="40"
            ></avatar>
            </div>
            
                     <div id="blogName">
                       
<p id="pBlog" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle, 'margin':'auto 3px' }">{{ blog.name }} </p> 
   <p v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle,'margin':'auto 3px' }">{{ blog.title }}  </p>      
                     
                     </div>
   
    <b-icon v-if="openBlogFeatures[i]" id="iconList" v-on:click="openFeatures(i)"  icon="chevron-up" font-scale="1" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor, 'display': 'inline-block'}"></b-icon>
       <b-icon v-else id="iconList" v-on:click="openFeatures(i)"  icon="chevron-down" font-scale="1" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor, 'display': 'inline-block'}"></b-icon>
 

                    </div>
                     
         
 
                  
                      <div v-show="openBlogFeatures[i]" id="blogFeatures">
   <p v-on:click="openFeature(i,0)" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle }" >posts</p>
   <p v-on:click="openFeature(i,0)" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle }">followers</p>
   <p  v-on:click="openFeature(i,0)" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">Activity</p>
 </div>
                  
     
            </li>
        </div>
 <!-- end of blogs  -->


                          </ul>     
                    </v-navigation-drawer>
       </div>

       <div id='spacer'></div>
       <div id="img"  v-show="!showSearch">
      <img   src="https://img.icons8.com/nolan/64/tumblr.png"/>
     
       </div>
       <div v-show="showSearch">
          <SearchBar v-bind:mobileView="true"/> 
       </div>

       <div id='spacer'></div>
       <div id="navItem" v-on:click ="showSearch=!showSearch">
                 <b-icon id="icon" icon="search" font-scale="1.5"  aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 

       </div>        
</nav>
 </div>
  
</template>

<script>
import Avatar from "vue-avatar";
import SearchBar from "./HomePageSearchBar.vue";
import Vue from "vue";
import Browser from "../../mocks/browser";
import axios from "axios";
 /**
 *  Home page Navigation Bar for mobile view
 * @example [none]
 */
export default {
  name: 'HomeNavbar',
  components:{
      'SearchBar':SearchBar,
       Avatar: Avatar,
  },
  methods: 
  
  {
    async openDrawerNav(){
      this.showDrawer=!this.showDrawer
       console.log("^^^^^^^^^^^^mobile view blogs ^^^^^^^^^^^^^^66")
    for (let i =0; i < this.blogsId.length; i++)
     {
        let myRoute=""
         if (this.isMockServer(Browser().baseURL))
         myRoute= Browser().baseURL+'/blog'
         else
        myRoute= Browser().baseURL+`/blog/view/${this.blogsId[i]}`
        console.log(myRoute)
       try {
         await axios.get(myRoute,
          { headers: { 'Authorization':`Bearer ${localStorage.getItem('token')}` } })
          .then(res => {    
            this.blogs.push({
          userId: res.data.res.data._id,
           name: res.data.res.data.name,
           title:res.data.res.data.title,
           img:res.data.res.data.img,
          followersIds: res.data.res.data.followers
          })  
             
          })
    } catch (e) {
      console.error(e);
    }

     }

  },
     openFeature(i, feature){
      //posts 0
      if( feature == 0)
      this.$router.push({ name: 'CreatedBlogPage', params: { indxFlag: feature, noPostsFlag:false 
              , blogId:this.blogs[i].id} });
        else if( feature == 1)
      this.$router.push({ name: 'CreatedBlogPage', params: { indxFlag: feature, noPostsFlag:false 
              , blogId:this.blogs[i].id} });
      else if( feature == 2)
      this.$router.push({ name: 'CreatedBlogPage', params: { indxFlag: feature, noPostsFlag:false 
              , blogId:this.blogs[i].id} });


    },
     /**
     * Function to fire event from the store to change theme color of website on click the brush icon in the drawer 
     * @public This is a public method
     * @param {none}
     */
     changePalette: function ( ){
    // fire mutation
        this.$store.commit('changePalette');
    },
      isMockServer(baseUrl){
     
        if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
          return false
          else 
          return true
    },
    openFeatures(i){
      console.log(i)
     let value=!this.openBlogFeatures[i]
         Vue.set(this.openBlogFeatures,i, value);
    
    }
  },
    data: function() {
      return {
              defaultImg:"https://assets.tumblr.com/images/default_avatar/cone_closed_96.png",
        arrowIcon:false,
        showDrawer:false,
        showSearch:false,
        newPost:false,
        color:"red",
           openBlogFeatures:[], 
      blogs:[] 
      }
    }, 
    props:{
  blogsIds:Array,
    },
     
  computed: {
      blogsId: function(){
          
            return this.$store.state.user.blogsId;
        },
        
     /**
     * Function to get the home page color theme array from the store
     * @public This is a public method
     * @param {none}
     */
        homeTheme: function(){
            return this.$store.state.homeTheme;
        },
         /**
     * Function to get the home page color theme Index from the store
     * @public This is a public method
     * @param {none}
     */
        homeThemeIndex: function(){
            return this.$store.state.homeThemeIndex;
        },
  },
   mounted () {
    let blogNum=3;
    for( let i =0; i< blogNum ; i++)
    this.openBlogFeatures[i]=false;
  },
 
  
}
</script>

<style scoped>
 
#navDiv{
  display: flex;
  width: 100%;
}
 
#navbar{
  align-items: center;
  width: 100%;
  height: 20%;
  position: relative;
  display: flex;
  justify-content: baseline;
}
#itemID{
  display: grid;
  grid-template-columns: 30% auto;
}
#navItem{
    flex-grow: 1;
      flex-direction: row;
      margin: 1px;
}
ul {
  position: absolute;
 display: flex;
  flex-direction: column;
  padding: 0;
  float:right;
  margin: 0;
  
}
#blogName{
margin-left:30px ;
margin-right:30px ;
}
ul.space-between {  
  justify-content: space-between;
}
li {
  position:relative;
  padding: 10px;
  list-style: none; 
  justify-content: space-between;
  width: 100%;

}
 
#blogFeatures{
  margin: 10px;
}
#rowItemF{
display: flex;
  flex-direction: row;
  justify-content: space-between;
}

li.right{
    float: left;
}
#iconD{
  cursor: pointer;
}
 #icon{
   
   /* padding: 20px; */
   cursor: pointer;
     flex-grow: 2;
 } 
 /* #pD{
   padding:10px;
   float:right;
 }
 #iconD{
   cursor: pointer;
    float:left;
    margin: 0;
    padding: 0;
    

 }
  */
img{
  flex-grow: 2;
  margin: 0 auto;
  padding: 0;
  cursor: pointer;
  flex-shrink: 2;
 
}  
#spacer{
  flex-grow: 7;
  flex-shrink: 2;
}
 
p{
    text-decoration: none;
}
</style>
