<template>
  <div class="menu-item" id="dropDown" v-on:click="openAccDdl">
     
         <b-icon id="icon"  icon="person-fill" font-scale="1.8" aria-hidden="true"  :style="{'color': homeTheme[homeThemeIndex].fontColor, 'cursor':'pointer' }"></b-icon> 
   
    <transition name="fade" appear>
        <div v-on:click.prevent="toggleDropdown">
          <div id ="content" class="sub-menu" v-if="isOpen" :style="{'background': homeTheme[homeThemeIndex].cardColor}">
        <li id ="header"  >
              <p  id ="pHeader" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">Account </p>
                <p  id ="pHeader"  v-on:click="openLogout=true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">Logout</p>

        </li>
       
         <!-- start account items list  -->
        <div>
            <li>
                <div id='item'  >
                  <li >
                   <b-icon id="iconList"  icon="Heart-fill" font-scale="1.5" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor, 'display': 'inline-block'}"></b-icon>
                 <p v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle, 'display': 'inline-block', 'margin':'auto 3px' }">Likes</p>
                    </li>  
                </div>
            </li>
        </div>
        <div>
            <li>
                <div id='item' >
                  <li >
                   <b-icon id="iconList"  icon="person-plus-fill" font-scale="1.5" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor, 'display': 'inline-block'}"></b-icon>
                 <p v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle, 'display': 'inline-block', 'margin':'auto 3px' }">Followings </p>
                    </li>  
                </div>
            </li>
        </div>
        <div>
            <li>
                <div id='item' >
                  <li >
                   <b-icon id="iconList"  icon="gear-fill" font-scale="1.5" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor, 'display': 'inline-block'}"></b-icon>
                 <p v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle, 'display': 'inline-block', 'margin':'auto 3px' }">Settings</p>
                    </li>  
                </div>
            </li>
        </div>
        <div>
            <li>
                <div id='item'   >
                  <li >
                   <b-icon id="iconList"  icon="question-circle-fill" font-scale="1.5" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor, 'display': 'inline-block'}"></b-icon>
                 <p v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle, 'display': 'inline-block', 'margin':'auto 3px' }">Help </p>
                    </li>  
                </div>
            </li>
        </div>
        <div>
            <li>
                <div id='item'  v-on:click="toggleKeyDrawer" >
                  <li >
                   <b-icon id="iconList"  icon="grip-horizontal" font-scale="1.5" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor, 'display': 'inline-block'}"></b-icon>
                 <p v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle, 'display': 'inline-block', 'margin':'auto 3px' }">key-shortcuts </p>
                    </li>  
                </div>
            </li>
        </div>
        <div>
            <li>
                <div id='item'  v-on:click="changePalette()" >
                  <li >
                   <b-icon id="iconList"  icon="brush-fill" font-scale="1.5" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor, 'display': 'inline-block'}"></b-icon>
                 <p v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle, 'display': 'inline-block', 'margin':'auto 3px' }">Change Palette </p>
                    </li>  
                </div>
            </li>
        </div>
        <div>
            
        </div>
        <!-- end -->
          <li id ="header"    >
              <p  id ="pHeader" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">Tumblrs </p>
                <router-link to="/new/blog"> 
                <p  id ="pHeader"   v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">+ New</p>
</router-link>
        </li>
         <!-- blogs -->
         <div v-if="isLoading">
         <loader  object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="dots"></loader>

         </div>

         <div v-else>
             <div v-for="(blog, i) in blogs" :key="'A'+ i" class="menu-item">
                  <li >
                     <tbody>
                    <tr>
                       <td>
          <div class="avatarStyle">
                <avatar
              username="Jane Doe"
               v-bind:rounded=false
              v-bind:src="blog.img?blog.img:defaultImg"
              v-bind:size="40"
            ></avatar>
            </div>
             </td>
                   <td>
                     <div id="blogName">
                       
<p id="pBlog" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle, 'margin':'auto 3px' }">{{ blog.name }} </p> 
   <p v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle,'margin':'auto 3px' }">{{ blog.title}} </p>      
                     
                     </div>
                     
 </td>


 <td id="acc">
       <b-icon id="iconList" v-on:click="openBlogFeatures[i] = !openBlogFeatures[i]"  icon="person-lines-fill" font-scale="1" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor, 'display': 'inline-block'}"></b-icon>

 </td>
                    </tr>
                  
                      <div v-show="openBlogFeatures[i]" id="blogFeatures">
   <p v-on:click="openFeature(i,0)" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle }" >posts</p>
   <p  v-on:click="openFeature(i,1)" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle }">followers</p>
   <p  v-on:click="openFeature(i,2)" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">Activity</p>
 </div>
                  
              <!-- <v-spacer :style="{'display': 'inline-block' , 'width' :'30px'}"></v-spacer> -->
             
       <!-- </router-link> -->
        </tbody>
            </li>
        </div>
         </div>
        
    
      </div>

        </div>
      
    </transition>
    <KeyScDrawer v-if="openKeyDrawer"
     v-on:hideDrawer="hideKeyDrawer($event)" 
     v-bind:showMe="openKeyDrawer"/>
    <LogoutDialog  v-show="openLogout"  v-on:hideMe="hideLogoutDialog($event)"/>
  </div>
</template>

<script>
import Avatar from "vue-avatar";
import KeyScDrawer from "./KeyboardShortcutsDrawer.vue"
import LogoutDialog from "../general/LogoutDialog.vue"
import Browser from "../../mocks/browser";
import axios from "axios";
import Vue from 'vue';
import loader from "vue-ui-preloader";
Vue.use(loader);
//import BlogFeatures from '../blog/CreatedBlogPage.vue' 

/**
 *  AccountDropdownList is a drop down list appears when user clicks on account icon in the nav bar it shows list of options user will be able to click on all of them
 * @example [none]
 */
export default {
  name: 'Dropdown',
   components: {
    Avatar: Avatar,
    KeyScDrawer:KeyScDrawer,
    LogoutDialog:LogoutDialog,
    //BlogFeatures:BlogFeatures
  },
  props: {
    title: String,
   // blogsIds:Array,
    close:Boolean

  },
  methods:
  {
    closeThemFromAcc(){
     
 this.$emit("closeThemFromAcc", this.isOpen);
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
     toggleKeyDrawer()
    {
       this.openKeyDrawer=true
    },
    hideKeyDrawer(hide)
    {
    
       this.openKeyDrawer=hide

    },
      hideLogoutDialog (hide) {
     this.openLogout = hide;
    },
     /**
     * Function fire event in the store to change color theme of the website - it switches between 6 themes -when user click on the brush icon in account drop down list in the nav bar
     * @public This is a public method
     * @param {none}
     */
    changePalette(){
     
        this.$store.commit('changePalette');
    },
    /**
     * Function to control opening the account dropdown list
     * @public This is a public method
     * @param {none}
     */
     toggleDropdown () {
      this.isOpen = !this.isOpen
    },
     isMockServer(baseUrl){
     
        if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
          return false
          else 
          return true
    },
  async openAccDdl(){
     this.isOpen=!this.isOpen
     this.closeThemFromAcc()
       this.myBlogsId=this.blogsId
     //  this.isLoading=true;
       for (let i =0; i < this.myBlogsId.length; i++)
     {
        let myRoute=""
         if (this.isMockServer(Browser().baseURL))
         myRoute= Browser().baseURL+'/blog'
         else
        myRoute= Browser().baseURL+`/blog/view/${this.myBlogsId[i]}`
      
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
 
      this.isLoading=false;
    }
    
    },
  data: function () {
    return {
      isLoading:false,
      openLogout:false,
      isOpen: false,
       openKeyDrawer:false,
      openBlogFeatures:[], 
      defaultImg:"https://assets.tumblr.com/images/default_avatar/cone_closed_96.png",
     // blog=> userId,followersIds,name,title,description
      blogs:[]  ,
     myBlogsId:[]  ,
    }
  },
  computed: {
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
         /**
     * Function to get the blogs ids from the store
     * @public This is a public method
     * @param {none}
     */
         blogsId: function(){
          
            return this.$store.state.user.blogsId;
        },
        
  },
  
  
  
  
}
</script>

<style scoped>
.sub-menu
{
    overflow-y: scroll;
}
#divider{
  width: 100%;
  height: 1px;
}
#acc{
  float: right;
}
nav .menu-item .sub-menu {
  position: absolute;
  height: 450px;
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  width:250px;
  border-radius: 5px;
  
}
.sub-menu{
 box-shadow: 0px 5px 10px rgb(163, 162, 162);
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
 
 #iconList{
     
     float: left;
     margin :0px 20px 0px 10px;
     margin-top: 10px;
     /* display :inline-block; */
     
 }
 li {
   display: flex;
  position:relative;
  padding: 1px;
  list-style: none; 
}
#pBlog{
  font-weight: bold;
  font-size:20;
  padding :0px 10px 0px 0px;

}
/* #grayDiv{
    display: flex;
    height: 5px;
    background-color: rgb(204, 199, 199);
    color: gray;
   margin: 2rem;
  padding: 2rem 2rem;
  text-align: center;
} */
 
#item{
  padding: 5px;
  margin:5px;
  width: 200px;
} 
#item:hover {
  background:rgb(163, 162, 162);
 
}
#dropDown{
   position: relative;
  display: inline-block;
}
#header{
  background-color: #656868be;
}
#pHeader{
  display :inline-block;
  padding-left: 20px;
  margin-left: 20px;
  margin-top:10px;
}
#content{
    
  position: absolute;
    
  z-index: 1;
}

.avatarStyle {
  width: 25px;
  margin: 10px;

  padding: 0px 0px 0px 10px;
 
}
#blogName{
  vertical-align:middle;
  margin-left: 20px;
    margin-right: 20px;
}
#blogFeatures{
  position: relative;
   padding :0px 20px 0px 20px;
}
</style>