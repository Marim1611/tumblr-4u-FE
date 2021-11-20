<template>
  <div>
      <v-navigation-drawer id="blogDrawer" v-bind:width="600" v-bind:right=true v-model= "showBlogDrawer" app  >
        <div id="coverImg" v-bind:style="{ backgroundImage: 'url(' + this.tumblrsObj.coverImg + ')' }">
           <nav id = 'navbar' >
           <ul id = 'navbar'> 
              <div id="iconsDiv">
                <li>
                    <b-icon v-on:click="showBlogDrawer=false" id="icon" icon="x" font-scale="2"  aria-hidden="true"></b-icon> 
                </li>
              
                <li v-if="!isOpenSearch" >
                  <div id="input_container" >
                   <!-- <div id='spacer'  class= "searchP"></div> -->
                  
                  <b-icon  class= "searchP" v-on:click="isOpenSearch = true"  id="icon" icon="search" font-scale="2"  aria-hidden="true"></b-icon> 
           <v-spacer class= "searchP"></v-spacer>
            <p class= "searchP"  v-bind:style="{'color':'white','font-size' :'20px','margin':'7px'}">{{this.tumblrsObj.name}}</p>   

</div>
                </li>
                
                <!-- <li v-if="isOpenSearch">
                </li> -->
                   <li  v-else>
                    <div id="input_container" >
      <b-icon v-on:click="isOpenSearch = false"  id="iconS" icon="search" font-scale="1.5"  aria-hidden="true" ></b-icon> 

       <input v-model.trim="inputValue"  class="dropdown-input" type="text" placeholder="Search" />
     
</div>
                 </li>
                <li>
                    <b-icon id="icon" icon="patch-plus-fill" font-scale="2"  aria-hidden="true"></b-icon> 
                </li>
                <li>
                    <b-icon id="icon"  v-on:click="isOpenShare = !isOpenShare"  icon="reply-all-fill" font-scale="2"  aria-hidden="true"></b-icon> 
                </li>
                <li>


         <b-icon id="icon"   v-on:click="isOpendotted = !isOpendotted" icon="three-dots" font-scale="2" aria-hidden="true"  ></b-icon> 
                </li>
                 <!-- <li>
                    <b-icon id="icon" icon="three-dots" font-scale="2"  aria-hidden="true"></b-icon> 
                </li> -->
                <li>
                  
                  
              <v-btn v-on:click="toggleFollow"  elevation="2" >{{this.isFollow.status}}</v-btn>
                 
                

                </li>
         </div>
       </ul>   
    </nav> 
     <div class="menu-item">
    <transition name="fade" appear>
        
         
          <div class="sub-menu" v-if="isOpendotted"  v-bind:style="{'background-color': homeTheme[homeThemeIndex].cardColor}">
        
     
        <div v-for="(item, i) in dottedItems" :key="i" class="menu-item"  >
            <li>
       
                <div id='item' >
                  <li >
                 <p  v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-style':homeTheme[homeThemeIndex].fontStyle, 'display': 'inline-block', 'margin':'auto 3px' }">{{ item }} </p>
                    </li>  
                </div>
            </li>

          
        </div>
      </div>
   
    </transition>
  </div>
  <div class="menu-item-share">
    <transition name="fade" appear>
        
          <div class="sub-menu-share" v-if="isOpenShare"  v-bind:style="{'background-color': homeTheme[homeThemeIndex].cardColor}">
        
     
        <div v-for="(item, i) in shareItems"  v-bind:key="i" class="menu-item"  >
            <li>
       
                <div id='item' >
                  <li >
                 <p  v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-style':homeTheme[homeThemeIndex].fontStyle, 'display': 'inline-block', 'margin':'auto 3px' }">{{ item }} </p>
                    </li>  
                </div>
            </li>

          
        </div>
      </div>
   
    </transition>
  </div>
    <div id="avatarDiv"   v-bind:style="{'justify-content': 'center','flex-direction':'column','text-align':'center','padding':'50px 20px 10px 50px'}">
      <div  v-bind:style="{'left':'%80'}" >
<avatar username="Jane Doe"
        v-bind:src= this.tumblrsObj.avatar
         v-bind:size = 100
         
        ></avatar>
      </div>

           
        <p  v-bind:style="{'font-size':'60px', 'color':'black','font-weight':'bold','left':'%50'}">{{this.tumblrsObj.name}}</p>
   </div>
    </div>
      </v-navigation-drawer>
      
  
    
  </div>
</template>

<script>
import Avatar from 'vue-avatar' 
import Vue from 'vue'
export default {
  name: 'TumblrDrawer',
  components:
   {
     'Avatar': Avatar
  },
  data : function(){
    return {
      isFollow:{status:"Follow"},
      inputValue:'',
      avatarPhoto:"https://assets.tumblr.com/images/default_avatar/octahedron_closed_128.png",
      isOpendotted:false,
      isOpenShare:false,
      isOpenSearch:false,
      showBlogDrawer:true,
      dottedItems:["Archive","Ask","Report","Block","Close"],
      shareItems:["Facebook","Twitter"],
    }
   
  },
  methods: {
    toggleFollow () {
       if (this.isFollow.status == "Follow")
         Vue.set(this.isFollow, 'status','Unfollow');
        
       else if (this.isFollow.status == "Unfollow")
          Vue.set(this.isFollow, 'status','Follow');
    },
     
    
  },
  computed: {
        homeTheme : function(){
            return this.$store.state.homeTheme;
        },
        homeThemeIndex : function(){
            return this.$store.state.homeThemeIndex;
        },
  },
  props:{
    tumblrsObj:Object
  }
   
   

}
</script>

<style scoped>
.menu-item .sub-menu {
  
   position: absolute;
  /* top: 0; */
  left: 48%;
  /* left: 100px; */
  /* top: 20px; */
  /* right: 0; */
  transform: translateX(100%) translateY(-42%);
  width: max-content;
  border-radius: 5px;
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

.searchP{
  display :inline-block;
  padding: 3px;
  
}

 #homeDrawer{
    width: 90%;
    display: flex;

      
}
#spacer{
 
  width:300px;
}
#icon{
  color:white;
  cursor: pointer;
}
#navbar{
  align-items: center;
  width: 100%;
  height: 20%;
  position: relative;
  display: flex;
}
#iconsDiv{
  display: flex;
  flex-direction: row;
  text-align: center;
  position: relative;
  flex-grow: 2;
  flex-shrink: 2;
  float:right;
  height: 200px;
 
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
#input_container {
    position:relative;
    padding:0 0 0 20px;
    margin:0 20px;
     border: none;
      
     
    direction: rtl;
    width: 200px;
}
.dropdown-input, .dropdown-selected{
   
  padding: 10px 10px;
 border-radius:8px ;
  opacity: 0.1;
 width: 150px;
  line-height: 1.5em;
  outline: none;
   
}
#iconS{

    position:absolute;
    bottom:2px;
    left:5px;
    width:24px;
    height:24px;
    color:white;
    cursor: pointer;

}
 
.dropdown-input:focus, .dropdown-selected:hover{
  background: #fff;
  border-color: #e2e8f0;
  
}
 
.dropdown-input::placeholder{
  opacity: 0.7;
  color:white;
}
#coverImage{
  width: 600;
  height: 300;
background-repeat: no-repeat;
 background-position: center;
 /* text-align:center;
 padding:7px; */
 }
 #item{
  padding: 0px;
  margin:0px;
  width: 100px;
} 
#item:hover {
  background: #464747;
 
}
 
 
</style>
