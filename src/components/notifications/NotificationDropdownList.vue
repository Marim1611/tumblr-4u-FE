<template>
  <div class="menu-item" id="dropDown" v-on:click="isOpen = !isOpen">
         <b-icon
                id="icon"
                icon="lightning-fill"
                font-scale="1.5"
                aria-hidden="true"
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
              ></b-icon>
    <transition name="fade" appear>
        <div v-on:click.prevent="toggleDropdown">
          <div id ="content" class="sub-menu" v-if="isOpen" :style="{'background-color': homeTheme[homeThemeIndex].cardColor}">
    
    
        <li >
             <div class="avatarStyle">
              <avatar
              username="Jane Doe"
               v-bind:rounded=false
              v-bind:src="this.img"
              v-bind:size="20"
            ></avatar>
            </div>
            
              <p  id ="pHeader" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">{{this.userName}} </p>
                    <b-icon id="arrow"  icon="chevron-down" font-scale="1" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor}"></b-icon>

        </li>
        <div id="divider" :style="{'background-color': homeTheme[homeThemeIndex].fontColor}"></div>
       
        <li id ="list"  >
            <div v-on:click="openItem(0)" id="divList" v-bind:style="{'border-bottom': '4px solid '+this.listColors[0],
             'border-right': '1px solid '+this.listColors[0]}">
              <p  id ="plist" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">All </p>

            </div>
              <div v-on:click="openItem(1)" id="divList" v-bind:style="{'border-bottom': '4px solid '+this.listColors[1],
             'border-right': '1px solid '+this.listColors[1]}">
              <p  id ="plist" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">Mentions </p>

            </div>
              <div v-on:click="openItem(2)" id="divList" v-bind:style="{'border-bottom': '4px solid '+this.listColors[2],
             'border-right': '1px solid '+this.listColors[2]}">
              <p  id ="plist" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">Reblog </p>

            </div>
              <div v-on:click="openItem(3)" id="divList" v-bind:style="{'border-bottom': '4px solid '+this.listColors[3],
             'border-right': '1px solid '+this.listColors[3]}">
              <p  id ="plist" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">Replies </p>

            </div>
            
  
        </li>
        
       <div v-if="this.all.length"> 
            <!-- start notifications items list  -->
        
        <!-- end -->

          <!-- footer -->

            <div id="divider" :style="{'background-color': homeTheme[homeThemeIndex].fontColor}"></div>

         <div id="footer">
              
              <p  id ="pHeader" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">
                  See Everything </p>
 
        </div>
       

       </div>
         <!-- empty -->
         <div id="empty" v-else>
             
               <b-icon
                id="iconEmpty"
                icon="lightning-fill"
                font-scale="1.5"
                aria-hidden="true"
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
              ></b-icon>
                <p  id ="pHeader" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">
                  No notifications yet Don't miss tumblr activities! </p>
 
              

         </div>
        
        
       
                
           
        
            

        </div>
         </div>
      
    </transition>
    
   </div>
</template>

<script>
import Avatar from "vue-avatar";
 
 /**
 *  AccountDropdownList is a drop down list appears when user clicks on account icon in the nav bar it shows list of options user will be able to click on all of them
 * @example [none]
 */
export default {
   components: {
    Avatar: Avatar,
  },
  props: {
    

  },
  methods:
  {
      openItem(i){
          for(let j=0; j< 4;j++)
          {
              console.log(j)
              this.listColors[j] = "transparent"
              console.log(this.homeTheme[this.homeThemeIndex].fontColor)
         if (j == i)
         {
              console.log("mree")
     if(this.listColors[i] == "transparent")
        this.listColors[i]=this.homeTheme[this.homeThemeIndex].fontColor
          else  
            this.listColors[i]="transparent"
        
         }
       
          }
          console.log("|||||||||||||||")
         
      },
     hideLogoutDialog (hide) {
     this.openLogout = hide;
    },
      
    /**
     * Function to control opening the account dropdown list
     * @public This is a public method
     * @param {none}
     */
     toggleDropdown () {
      this.isOpen = !this.isOpen
    },
     
    },
  data: function () {
    return {
        isOpen:false,
       listColors:["transparent","transparent","transparent","transparent"],
    img: "https://64.media.tumblr.com/6eb8d7c15856ffa76b0a6b5bdb35f2de/5cf38a736b98badf-f9/s640x960/0762f14581a4a9bf7599fc7899b35cd909878bde.jpg",
    userName:"mairm22",
    all:[
        {
            date:"12 december ",
            content:"reem mention you inhhhh bla bla bbla"
        },
        {
            date:"12 december ",
            content:"reem mention you inhhhh bla bla bbla"
        }
    ],
      
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
  },
   
  
}
</script>

<style scoped>
#footer{
    text-align: center;
}
#divider{
  width: 100%;
  height: 0.5px;
}
nav .menu-item .sub-menu {
  position: absolute;
  height: 450px;
  top: calc(100% + 5px);
  left: 20%;
 
  transform: translateX(-60%);
  width:380px;
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
 #iconEmpty{
     margin-left: 50%;
     margin-top:20%;
     margin-bottom:10%;
      
 }
#empty{
     background-color:rgba(var(--black),.07) ;
 }
 #iconList{
     
     float: left;
     margin :0px 20px 0px 10px;
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
 
#divList {
   text-align: center;
 
   justify-content: center;
   
}
#pHeader{
  display :inline-block;
  padding-left: 10px;
  margin-left: 10px;
  margin-top:10px;
  font-size: 15px;
}
#plist{
    
  display :inline-block;
   width: 65px;
  padding-left: 10px;
  margin-left: 10px;
  margin-right:15px ;
  margin-top:10px;
  font-size: 15px;
}
#content{
    
  position: absolute;
    
  z-index: 1;
}
#arrow{
    margin:10px;
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