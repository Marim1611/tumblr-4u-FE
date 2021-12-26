<template>
     <div v-if="this.content.length"   > 
            <!-- start notifications items list  -->
            <div id="notificationDiv">
              
            <div v-for="(item, i) in content"  :key="i" >
              <div id="date" :style="{'background': homeTheme[homeThemeIndex].shadow}">
              <p  id ="pDate" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">{{item.ago}}</p>
              <p  id ="pDate" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}"> {{item.date}}</p>
              </div>

              <div id="notifiedItem">
                <div id="notifiedItemContent">
                   <div class="avatarStyle">
              <avatar
              username="Jane Doe"
               v-bind:rounded=false
              v-bind:src="item.img"
              v-bind:size="20"
            ></avatar>
            </div>

              <p  id ="pDate" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">{{item.content}}</p>


                </div>
                

             <div class="avatarPost">
              <avatar
              username="Jane Doe"
               v-bind:rounded=false
              v-bind:src="item.postImg"
              v-bind:size="30"
            ></avatar>
            </div>

              </div>
            </div>
        

            </div>

        <!-- end -->
          <!-- footer -->

            <div id="divider" :style="{'background': homeTheme[homeThemeIndex].fontColor}"></div>

         <div id="footer">
              
              <p  id ="pHeader" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">
                  See Everything </p>
 
        </div>
       

       </div>
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
  props:{
      content:Array

  },
  data: function () {
    return {
        isOpen:false,
       listColors:["transparent","transparent","transparent","transparent"],
    img: "https://64.media.tumblr.com/6eb8d7c15856ffa76b0a6b5bdb35f2de/5cf38a736b98badf-f9/s640x960/0762f14581a4a9bf7599fc7899b35cd909878bde.jpg",
    userName:"mairm22",
    index:0,
    all:[
        {
            ago:"2 days ago",
            date:"friday,December 9",
            content:"reem mention you inhhhh bla bla bbla ,kkkkkkkkkkkkkkkkkkkkjjjjjjjjjjjjjjjjjjj",
            img:"https://static.tumblr.com/9a983795b8a899c6e6d324788f7bf0f4/qmzbqin/YnBpkjlze/tumblr_static_tumblr_static_3k7csrzl1iw4o48gowc0wg0ko_focused_v3.jpg",
            postImg:"https://64.media.tumblr.com/174285d292ff26fb6a3ae784546e4971/498bb52766c9026e-11/s400x600/cbf8ade932b299e1c8f8041ce5a1e37aaf2c2c86.jpg"
      
      },
        {
            ago:"7days ago",          
            date:"monday,December 12",
            content:"reem mention you inhhhh bla bla bbla blaaaaaaaa blaaaaaaaaa",
            img:"https://static.tumblr.com/9a983795b8a899c6e6d324788f7bf0f4/qmzbqin/YnBpkjlze/tumblr_static_tumblr_static_3k7csrzl1iw4o48gowc0wg0ko_focused_v3.jpg",
            postImg:"https://64.media.tumblr.com/174285d292ff26fb6a3ae784546e4971/498bb52766c9026e-11/s400x600/cbf8ade932b299e1c8f8041ce5a1e37aaf2c2c86.jpg"
      
        },
        {
            ago:"7days ago",          
            date:"monday,December 12",
            content:"reem mention you inhhhh bla bla bbla blaaaaaaaa blaaaaaaaaa",
            img:"https://static.tumblr.com/9a983795b8a899c6e6d324788f7bf0f4/qmzbqin/YnBpkjlze/tumblr_static_tumblr_static_3k7csrzl1iw4o48gowc0wg0ko_focused_v3.jpg",
            postImg:"https://64.media.tumblr.com/174285d292ff26fb6a3ae784546e4971/498bb52766c9026e-11/s400x600/cbf8ade932b299e1c8f8041ce5a1e37aaf2c2c86.jpg"
      
        },
        {
            ago:"7days ago",          
            date:"monday,December 12",
            content:"reem mention you inhhhh bla bla bbla blaaaaaaaa blaaaaaaaaa",
            img:"https://static.tumblr.com/9a983795b8a899c6e6d324788f7bf0f4/qmzbqin/YnBpkjlze/tumblr_static_tumblr_static_3k7csrzl1iw4o48gowc0wg0ko_focused_v3.jpg",
            postImg:"https://64.media.tumblr.com/174285d292ff26fb6a3ae784546e4971/498bb52766c9026e-11/s400x600/cbf8ade932b299e1c8f8041ce5a1e37aaf2c2c86.jpg"
      
        }
    ],
      
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
              this.index=i;
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
#notificationDiv{
  width: 100%;
  height: 300px;
  overflow-y:scroll ;
   overflow-y:auto ;
}
#pDate{
  font-size: 13px;
  font-weight: none;
  margin: 10px;
}
#date{
  width: 100%;
  height: 30px;
  display: flex;
  margin: 0px;
  justify-content: space-between;
  margin-top: 0px;
  padding-top:0px ;
}
#notifiedItemContent{
    width: 100%;
 display: flex;
   flex-direction: row;
   


}

#notifiedItem{
    width: 100%;
 display: flex;
  flex-direction: row;
  justify-content:center;

}
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
  margin: 5px;

  padding: 0px 0px 0px 10px;
 
}
.avatarPost {
  width: 25px;
  margin: 5px;
position: relative;
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