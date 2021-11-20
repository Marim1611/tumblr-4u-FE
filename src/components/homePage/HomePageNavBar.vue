<template>
 
<div id="navDiv" > 
   <nav id = 'navbar' :style="{'background-color': homeTheme[homeThemeIndex].backgroundColor}">
       <ul id = 'navbar'> 
      <div id='img'>
         <li>
         <img src="https://img.icons8.com/color-glass/48/000000/tumblr.png" :style="{'background-color': homeTheme[homeThemeIndex].fontColor}"/>
         </li>
      </div>
   <div id='spacer'>
           <li>

           </li>
         </div>
      <li>
<SearchBar/>
           
      </li>
       
         <div id='spacer'>
           <li>

           </li>
         </div>
         
         <div id="iconsDiv">
 <li>
          <router-link to="/home" class="nav-item nav-link"> 
             <b-icon id="icon" icon="house-door-fill" font-scale="1.5"  aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
            </router-link>
        </li>
        <li>
          <router-link to="/explore" class="nav-item nav-link"> 
             <b-icon id="icon" icon="compass" font-scale="1.5"  aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon> 
            </router-link>
        </li>
        <li>
          <router-link to="" class="nav-item nav-link"> 
            <b-icon id="icon"  icon="envelope-fill" font-scale="1.5" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon>    
            </router-link> 
         </li>       
         <li>
            <router-link to="" class="nav-item nav-link"> 
              <b-icon id="icon"  icon="emoji-laughing" font-scale="1.5" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon> 
       </router-link> 
         </li> 
         <li>
            <router-link to="" class="nav-item nav-link"> 
              <b-icon id="icon"  icon="lightning-fill" font-scale="1.5" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon> 
        </router-link> 
         </li> 
         <li>
            <router-link to="" class="nav-item nav-link"> 
           
          <DropdownList   :accountItems="accountItems" />
          </router-link> 
         </li> 
         <li>
            <router-link to="" class="nav-item nav-link"> 
              <b-icon v-on:click="newPost = !newPost" id="icon"  icon= "pencil-fill" font-scale="1.5" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon> 
               <NewPost v-if="newPost"/> 
               </router-link>  
         </li> 
         </div>
       
         
       </ul>   
   
</nav>

 </div>
  
</template>

<script>
 
import DropdownList from './AccountDropDownList.vue';
import NewPostItem from './HomePageNewPost.vue';
import SearchBar  from './HomePageSearchBar.vue';
 
export default {
  name: 'HomeNavbar',
  
    data: function () {
      return {
        newPost:false,
        color:"red",
        accountItems: [
        {
          title: 'Likes',
         route:"/likes",
          icon:"Heart-fill"
        },
        {
          title: 'Follwings',
          route:"/followings",
          icon:'person-plus-fill'
        },
        {
          title: 'Settings',
          route:"/settings",
          icon: 'gear-fill'
        },
         {
          title: 'Help',
           route:"/help",
          icon:"question-circle-fill"
        },
         {
          title: 'Keyboard shortcuts',
          route:" ",
          icon:"grip-horizontal"
        },
         {
          title: 'Change palette',
          route: ' ',
          icon:"brush-fill"
        }
      ]
      }
    },  
  components:{
    'DropdownList':DropdownList,
    'NewPost':NewPostItem,
    'SearchBar':SearchBar
  },
  computed: {
        homeTheme : function(){
            return this.$store.state.homeTheme;
        },
        homeThemeIndex : function(){
            return this.$store.state.homeThemeIndex;
        },
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
}

ul {
  position: absolute;
  display: flex;
  flex-direction: row;
  padding: 0;
  float:right;
  margin: 0;
}
li {
  position:relative;
  padding: 10px;
  list-style: none; 
  
}
li.right{
    float: right;
}

#iconsDiv{
  display: flex;
  flex-direction: row;
  text-align: center;
  position: relative;
  flex-grow: 2;
  flex-shrink: 2;
  float:right
 
}
 
#icon{
   color: whitesmoke;
   /* padding: 20px; */
   cursor: pointer;
   
 } 
 
img{
  flex-grow: 2;
  margin: 0;
  padding: 0;
  cursor: pointer;
  flex-shrink: 2;
 
}  
#spacer{
  flex-grow: 7;
  flex-shrink: 2;
}
#grayLine{
 display: block;
  width: 100%;
  height: 3px;
  flex-grow:1 ;
  background-color: rgb(202, 199, 199);
}
SearchBar{
  flex-grow: 3;
}
</style>
