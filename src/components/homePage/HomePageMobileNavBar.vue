<template>
 
<div id="navDiv"  > 
   <nav id = 'navbar' v-bind:style="{'background-color': homeTheme[homeThemeIndex].backgroundColor}">
  <div id="navItem" v-on:click= "showDrawer=!showDrawer">
      <b-icon id="icon" icon="justify" font-scale="1.5"  aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor, 'float': 'right'}" ></b-icon> 
         <v-navigation-drawer id="homeDrawer" v-model="showDrawer" app v-bind:style="{'background-color': homeTheme[homeThemeIndex].backgroundColor}" >
                      <ul id = 'navbar' >
                          <li>
  <b-icon id="iconD" icon="x" font-scale="1.5"  aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'float': 'right'}" ></b-icon>
                          </li>
                          <li>
 <v-btn elevation="2" >   <b-icon id="icon" icon="pencil-fill" font-scale="1.5"  aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'float': 'right'}" ></b-icon> Create post</v-btn>
                          </li>
                          <li>
                              <router-link to="/" class="nav-item nav-link" style="text-decoration: none"> 
                         <div>
                            <b-icon id="iconD" icon="house-door-fill" font-scale="1.5"  aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
                          <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}">Dashboard</p>
                           </div>    
            
                 
            </router-link>
                              </li> 
                                <li>
                                  <div>
<b-icon id="iconD" icon="compass" font-scale="1.5"  aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon> 
                     <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor,  'font-style':homeTheme[homeThemeIndex].fontStyle,'text-decoration': 'none'}">Explore</p>   
        
                                  </div>
        
             
        </li>
        <li>
          <!-- <router-link to="/inbox" class="nav-item nav-link" style="text-decoration: none" >  -->
          <div>
 <b-icon id="iconD"  icon="envelope-fill" font-scale="1.5" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon>    
       <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-style':homeTheme[homeThemeIndex].fontStyle, 'text-decoration': 'none'}">Inbox</p>   

          </div>
           
            <!-- </router-link>  -->
         </li>       
         <li>
           <div>
 <b-icon id="iconD"  icon="emoji-laughing" font-scale="1.5" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon> 
                       <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor,  'font-style':homeTheme[homeThemeIndex].fontStyle,'text-decoration': 'none'}">Messaging</p>   

           </div>
             
   </li> 
         <li>
           <div>
 <b-icon id="iconD"  icon="lightning-fill" font-scale="1.5" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon> 
                            <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-style':homeTheme[homeThemeIndex].fontStyle, 'text-decoration': 'none'}">Activity</p>   

           </div>
             
         </li> 
           <li>
          
          <!-- <router-link to="/likes"  style="text-decoration: none">  -->
           <div>
 <b-icon id="iconD"  icon="Heart-fill" font-scale="1.5" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon>    
                                <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor,  'font-style':homeTheme[homeThemeIndex].fontStyle,'text-decoration': 'none'}">Likes</p>   

           </div>
           
            <!-- </router-link>  -->
         </li> 
           <li>
          <!-- <router-link to="/inbox" class="nav-item nav-link" style="text-decoration: none">  -->
            <div>
  <b-icon id="iconD"  icon="person-plus-fill" font-scale="1.5" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon>    
                                <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor,  'font-style':homeTheme[homeThemeIndex].fontStyle,'text-decoration': 'none'}">Followings</p>   

            </div>
          
            <!-- </router-link>  -->
         </li> 
           <li>
          <!-- <router-link to="/inbox" class="nav-item nav-link" style="text-decoration: none" >  -->
           <div>
   <b-icon id="iconD"  icon="gear-fill" font-scale="1.5" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon>    
                                <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'text-decoration': 'none'}">Settings</p>   
           </div>
         
            <!-- </router-link>  -->
         </li> 
           <li>
          <!-- <router-link to="/inbox" class="nav-item nav-link" style="text-decoration: none">  -->
            
            <div>
   <b-icon id="iconD"  icon="question-circle-fill" font-scale="1.5" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon>    
                                <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-style':homeTheme[homeThemeIndex].fontStyle, 'text-decoration': 'none'}">Help</p>   

            </div>
         
            <!-- </router-link>  -->
         </li> 
           <li v-on:click="changePalete()" >
             <div>
  <b-icon id="iconD"  icon="brush-fill" font-scale="1.5" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon>    
                                <p id="pD" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor,  'font-style':homeTheme[homeThemeIndex].fontStyle,'text-decoration': 'none'}">Change Palette</p>   
             </div>
         </li> 
                          </ul>     
                    </v-navigation-drawer>
       </div>

       <div id='spacer'></div>
       <div id="img"  v-show="showSearch">
      <img   src="https://img.icons8.com/nolan/64/tumblr.png"/>
     
       </div>
       <div v-show="!showSearch">
          <SearchBar/> 
       </div>

       <div id='spacer'></div>
       <div id="navItem" v-on:click ="showSearch=!showSearch">
                 <b-icon id="icon" icon="search" font-scale="1.5"  aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 

       </div>        
</nav>
 </div>
  
</template>

<script>
import SearchBar  from './HomePageSearchBar.vue';
 
export default {
  name: 'HomeNavbar',
  components:{
      'SearchBar':SearchBar
  },
  methods: {
     changePalete: function ( ){
    // fire mutation
        this.$store.commit('changePalette');
    }
  },
    data: function() {
      return {
        showDrawer:"false",
        showSearch:"false",
        newPost:false,
        color:"red",
      }
    }, 
     
  computed: {
        homeTheme: function(){
            return this.$store.state.homeTheme;
        },
        homeThemeIndex: function(){
            return this.$store.state.homeThemeIndex;
        },
  },
}
</script>

<style scoped>
#homeDrawer{
    width: 90%;
    display: flex;
}
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
ul.space-between {  
  justify-content: space-between;
}
li {
  position:relative;
  padding: 10px;
  list-style: none; 
  justify-content: space-between;

}

li.right{
    float: left;
}

 #icon{
   
   /* padding: 20px; */
   cursor: pointer;
     flex-grow: 2;
 } 
 #pD{
   padding:10px;
   float:right;
 }
 #iconD{
   cursor: pointer;
    float:left;
    margin: 0;
    padding: 0;
    

 }
 
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
