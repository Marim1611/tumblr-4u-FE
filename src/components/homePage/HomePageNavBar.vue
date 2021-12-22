<template>
<b-navbar class="NavBar" toggleable="sm" type="dark" variant="faded"  :style="{ 'background': homeTheme[homeThemeIndex].backgroundColor }">
        
        <router-link to="/home">
         
        <b-navbar-brand class="NavBarBrand bra" >
           <img
              src="https://img.icons8.com/color-glass/48/000000/tumblr.png"
              :style="{
                'background-color': homeTheme[homeThemeIndex].fontColor,
              }"
            />
              </b-navbar-brand>
        </router-link>

      

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                 <SearchBar />
            </b-navbar-nav>
            <div class="iconsRight">
                <b-navbar-nav class="navButtons">
                   <router-link to="/home" class="nav-item nav-link">
              <b-icon
                id="icon"
                icon="house-door-fill"
                font-scale="1.5"
                aria-hidden="true"
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
              ></b-icon>
            </router-link>
          
            <router-link to="/explore" class="nav-item nav-link">
              <b-icon
                id="icon"
                icon="compass"
                font-scale="1.5"
                aria-hidden="true"
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
              ></b-icon>
            </router-link>
         
            <router-link to="" class="nav-item nav-link">
              <b-icon
                id="icon"
                icon="envelope-fill"
                font-scale="1.5"
                aria-hidden="true"
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
              ></b-icon>
            </router-link>
          
            <router-link to="" class="nav-item nav-link">
             <ChatList/>
            </router-link>
          
            <router-link to="" class="nav-item nav-link">
                <NotificationList />
             
            </router-link>
         
            <router-link to="" class="nav-item nav-link">
              <DropdownList   />
            </router-link>
          
            <router-link to="" class="nav-item nav-link">
              <div id="sq"   >
 <b-icon
                v-on:click="newPostOpen"
               class="pen"
                id="icon"
                icon="pencil-fill"
                font-scale="1.5"
                aria-hidden="true"
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
              ></b-icon>
              </div>
             
               <!-- v-show="newPost"   -->
              <NewPost v-show="newPost" v-on:hideFunc="hideCirclesNewPost($event)"/>
            </router-link>
                    
                    
                    
 
                </b-navbar-nav>
              
            </div>
            
        </b-collapse>
    </b-navbar>
  
</template>

<script>
import DropdownList from "./AccountDropDownList.vue";
import NewPostItem from "./HomePageNewPost.vue";
import SearchBar from "./HomePageSearchBar.vue";
import NotificationList from '../notifications/NotificationDropdownList.vue'
import ChatList from '../chat/ChatDropdownList.vue'
/**
 *  Home page Navigation Bar 
 * @example [none]
 */
export default {
  name: "HomeNavbar",

  data: function () {
    return {
      newPost: false,
      color: "red",
      notificationOpen:false
     
    };
  },
  components: {
    DropdownList: DropdownList,
    NewPost: NewPostItem,
    SearchBar: SearchBar,
    NotificationList:NotificationList,
    ChatList:ChatList
  },
  computed: {
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
     
    
  },

  methods:{
    newPostOpen(){
      this.newPost = true;
    },
    hideCirclesNewPost (hide) {
     this.newPost = hide;
    },
    
  }
};
</script>

<style scoped>
#TheHeader{
   position: fixed; 
    top: 0; 
    width: 100%;
    background-position: center;
    background-size: cover;
}
.NavBarBrand{
    padding: 0 0 0 20px;
     
}
.pen{
  margin-left:20px;
 margin-right:20px;
}
.NavBar{
   
    padding:4.5 4.3  4.5rem;
}
.NavBarBrand{
    font-family: 'Ubuntu', sans-serif;
    font-size: 2.5rem;
    font-weight: bold;
}
.Brand:hover{
    color: hotpink;
}
.iconsRight{
    margin-left: auto;
}
.navButtons{
    
    margin-right:10px;
    margin-left:10px;
    font-weight: bold;
    color: black;
}
 





 
#navbar {
   justify-content: space-around;
  
  width: 100%;
  height: 20%;
  position: relative;
    flex-direction: row;
  display: flex;
}

/* ul {
  position: absolute;
  display: flex;
  flex-direction: row;
  padding: 0;
  float: right;
  margin: 0;
} */
li {
  position: relative;
 margin:5px;
  list-style: none;
}
li.right {
  float: right;
}
img {
  flex-grow: 1;
  margin: 0;
  padding: 0;
  cursor: pointer;
  flex-shrink: 2;
  order: 1;
}
.searchBarClass{
   flex-grow: 3;
  cursor: text;
  position: absolute;
  left: 40px;
  order: 2;
}
#iconsDiv {
  order: 3;
  display: flex;
  flex-direction: row;
  text-align: center;
  position: relative;
  flex-grow: 4;
  flex-shrink: 2;
  float: right;
  margin-right: 10px;
  
}

#icon {
  color: whitesmoke;
  /* padding: 20px; */
  cursor: pointer;
}


#spacer {
  flex-grow: 7;
  flex-shrink: 2;
}
#grayLine {
  display: block;
  width: 100%;
  height: 3px;
  flex-grow: 1;
  background-color: rgb(202, 199, 199);
}
SearchBar {
  flex-grow: 3;
}


</style>







