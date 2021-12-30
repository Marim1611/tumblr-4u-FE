<template>

  <div class="menu-item" id="dropDown" v-on:click="isOpen = !isOpen">
     
         <b-icon
                id="icon"
                icon="emoji-laughing"
                font-scale="1.5"
                aria-hidden="true"
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
              ></b-icon>
      <div class="cb">  <ChatBox v-if="checkBoxFlag"  v-bind:friendName="chattingFriends[this.indxMem].name"
                        v-bind:friendImage="chattingFriends[this.indxMem].img"/></div>

    <transition name="fade" appear v-if="!checkBoxFlag">
        <div v-on:click.prevent="toggleDropdown">
          <div id ="content" class="sub-menu" v-if="isOpen" :style="{'background': homeTheme[homeThemeIndex].cardColor}">
    
        <!-- header -->   
        <li >
             <div class="avatarStyle">
              <avatar
              username="Jane Doe"
               v-bind:rounded=false
              v-bind:src="this.img"
              v-bind:size="20"
            ></avatar>
            </div>
            
              <p  id ="pName" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">{{this.userName}} </p>
               <p v-on:click="newMsgClicked" id ="msgBtn" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">{{this.msgButton}} </p>

        
        </li>
     <div id="divider" :style="{'background': homeTheme[homeThemeIndex].fontColor}"></div>

          
            <!-- newMsg IS not Clicked   -->
            <div id ="chats" v-if="!newMsgCIslicked" >
                 <!-- end -->
   <div id="chatItem" v-for="(friend, i) in chattingFriends" :key="i">
         <li @click="openBox(i)">
<div class="avatarStyle" >               
                <avatar
              username="Jane Doe"
               v-bind:rounded=true
              v-bind:src="friend.img"
              v-bind:size="40"
              
            ></avatar>
            </div>
            <div id="chatP">
                <p  id ="pNameChat" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">{{friend.name}} </p>
        <p  id ="lastMsg" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">{{friend.lastMsg}} </p>
            </div>    
         </li>
                          <div id="divider" :style="{'background': homeTheme[homeThemeIndex].fontColor}"></div>
  </div>
          <!-- footer -->    
            </div>

            <!-- newMsg IS   Clicked   -->
            <div v-else > 
              <div id="sendMsg">
                <p  id ="pNameChat" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">To: </p>
                      <div  >
            <input 
            id="inputTo"
            type="text" name="To" 
             autocomplete="off" 
         v-model.trim="inputValue"
          v-bind:style="{
            color: homeTheme[homeThemeIndex].fontColor,
          }"/>
                      </div>
              </div>
               <div id="date" :style="{'background': homeTheme[homeThemeIndex].shadow}">
               <p  id ="pF" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}"> Recently followed</p>
              </div>
               <div id="chatItem" v-for="(item, i) in recentlyFollowed" :key="i">
         <li>
<div class="avatarStyle">
              <avatar
              username="Jane Doe"
               v-bind:rounded=true
              v-bind:src="item.img"
              v-bind:size="35"
            ></avatar>
            </div>
            <div id="chatP">
                <p  id ="pNameChat" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">{{item.name}} </p>
        <p  id ="lastMsg" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">{{item.lastMsg}} </p>
            </div>    
         </li>
                          <div id="divider" :style="{'background': homeTheme[homeThemeIndex].fontColor}"></div>
   </div>
                        <div>
                
              </div>
            </div>
        
        <!-- end -->

          <!-- footer -->    

        </div>
         </div>
        <div class="checkbox" v-if="checkBoxFlag"><CheckBox/> </div>

    </transition>

   </div>
   
</template>

<script>
import Avatar from "vue-avatar";
 import ChatBox from './ChatBox.vue'
 /**
 *  AccountDropdownList is a drop down list appears when user clicks on account icon in the nav bar it shows list of options user will be able to click on all of them
 * @example [none]
 */
export default {
   components: {
    Avatar: Avatar,
    ChatBox:ChatBox,
  },
   data: function () {
    return {
        inputValue:"",
        isOpen:false,
        newMsgCIslicked:false,
        checkBoxFlag:false,
        indxMem:0,
        msgButton:"New Message",
       listColors:["transparent","transparent","transparent","transparent"],
    img: "https://64.media.tumblr.com/6eb8d7c15856ffa76b0a6b5bdb35f2de/5cf38a736b98badf-f9/s640x960/0762f14581a4a9bf7599fc7899b35cd909878bde.jpg",
    userName:"mairm22",
    chattingFriends:[
        {
            name:"aa",
            img:'https://www.theme-junkie.com/wp-content/uploads/Old-Black-and-White-Backgrounds-1.jpg',
            lastMsg:"goodbye!"
        },
        {
            name:"aaa",
            img:'https://www.theme-junkie.com/wp-content/uploads/Old-Black-and-White-Backgrounds-1.jpg',
            lastMsg:"goodbye!"
        },
         {
            name:"aaaaaaaa",
            img:'https://www.theme-junkie.com/wp-content/uploads/Old-Black-and-White-Backgrounds-1.jpg',
            lastMsg:"goodbye!"
        },
         {
            name:"aaaaaaaaaaaaaa",
            img:'https://www.theme-junkie.com/wp-content/uploads/Old-Black-and-White-Backgrounds-1.jpg',
            lastMsg:"goodbye!"
        }
    ],
     recentlyFollowed:[
        {
            name:"reem",
            img:'https://www.theme-junkie.com/wp-content/uploads/Old-Black-and-White-Backgrounds-1.jpg',
            lastMsg:"goodbye!"
        },
        {
            name:"reem",
            img:'https://www.theme-junkie.com/wp-content/uploads/Old-Black-and-White-Backgrounds-1.jpg',
            lastMsg:"goodbye!"
        },
         
    ]
      
    }
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
      },
      newMsgClicked()
      {
          this.newMsgCIslicked=! this.newMsgCIslicked
         if (this.msgButton == "New Message")
         this.msgButton = "Never mind"
         else
         this.msgButton = "New Message"
      },
     
      
    /**
     * Function to control opening the account dropdown list
     * @public This is a public method
     * @param {none}
     */
     toggleDropdown () {
      this.isOpen = !this.isOpen
    },
     openBox(indxMemb){      
        this.checkBoxFlag=!this.checkBoxFlag;
        this.indxMem=indxMemb;
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
  height: 0.2px;
}
 
nav .menu-item .sub-menu {
  position: absolute;
 display: block;
overflow: auto;
  top: calc(100% + 5px);
  left: 20%;
 
  transform: translateX(-60%);
  width:280px;
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
#msgBtn{
     margin-left: 40px;
  margin-top:10px;
font-size: 12px;
}
#pHeader{
  display :inline-block;
  padding-left: 10px;
  margin-left: 10px;
  margin-top:10px;
  font-size: 15px;
}
#chatP{
    margin-left: 30px;
    
}
#pName{
   
  margin-left: 0px;
  margin-top:10px;
font-size: 15px;
}
#pNameChat{
   
  margin-left: 0px;
  margin-bottom:0px;
   margin-top:5px;
font-size: 15px;
}
#lastMsg{
     
font-size: 12px;
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
 
.avatarStyle {
  width: 25px;
  margin: 10px;
  padding: 0px 0px 0px 5px;
 
}
 
#sendMsg{
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
#inputTo{
  cursor: text;
  width: 100%;
  border-radius: 8px;
  line-height: 1.5em;
  outline: none;
}
#date{
  width: 100%;
  height: 30px;
  display: flex;
  margin: 0px;
  justify-content:flex-start;
  text-align: center;
  margin-top: 0px;
  padding-top:0px ;
}
#pF{
    font-size: 13px;
  font-weight: none;
  margin: 10px;
}
.cb{
  position: relative;
  z-index: 5;
}
</style>