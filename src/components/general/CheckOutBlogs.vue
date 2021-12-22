<template>
    <div id="relatedBlogs" v-bind:style="{'background': homeTheme[homeThemeIndex].backgroundColor}" >
             <h5 v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">Check out these blogs</h5>
                <div
            id="divider2"
            v-bind:style="{
              'background-color': homeTheme[homeThemeIndex].fontColor,
            }"
          ></div>
            <b-row v-for="(item, i) in relatedBlogs" :key="i" class="sec alignCenter" v-show="item.show">
                <div class="avatarStyle">
                <avatar
              username="Jane Doe"
               v-bind:rounded=true
               v-bind:src=item.img
              v-bind:size="50"
            ></avatar>
            </div>
              <div id="space1">  <b-col></b-col></div>
          
             <b-col>
                 <div :style="{'width':'120px'}" > 
                 <p id="block" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">{{item.name}}</p>
                 <p id="block" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">{{item.discription}}</p>
                 </div>
                
              </b-col>
               <div id="space2">  <b-col></b-col></div>
                 <b-col>
               <div>      <button id="fButton"  v-on:click="followed(item.isFollow,i)" type="button" v-bind:style="{'font-family':homeTheme[homeThemeIndex].focused,'color': homeTheme[homeThemeIndex].fontColor }" >{{item.isFollow}}</button>
</div>
  </b-col>
            <b-icon v-show="item.x" v-on:click="remove(i)"  icon="x" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].focused}" />        
           </b-row>
            <div
            id="divider2"
            v-bind:style="{
              'background-color': homeTheme[homeThemeIndex].fontColor,
            }"
          ></div> 
          <router-link to="/explore">
                     <button id="sButton" type="button" v-bind:style="{'font-family':homeTheme[homeThemeIndex].fontStyle,'color': homeTheme[homeThemeIndex].focused }" >Explore all of Tumblrs</button>
          </router-link>
        

            </div>
</template>

<script>
import Avatar from "vue-avatar";
 
 
 
export default {
  name: "TumblrDrawer",
  components: {
    Avatar: Avatar,
  },
  methods:{
         
   followed(status,i){
       
       this.relatedBlogs[i].show=false;
       if( status == "follow")
       {
 this.relatedBlogs[i].isFollow= "Unfollow"
 
       }
      
       else if( status == "Unfollow")
       this.relatedBlogs[i].isFollow= "follow"

   },
   remove:function(i){
       this.relatedBlogs[i].show = false;
   }

  },
  data: function () {
    return {
         relatedBlogs:[
             {
             name:"hundredpages",
             discription:"FORGOTTEN ODE",
             isFollow:"follow",
             img:"https://64.media.tumblr.com/b1972ec232e19b44eaa6ad0f4eb3fb99/eacbb90438c589d9-ed/s96x96u_c1/db2def7d17e2a3c31df0b413c37dd6f841493047.jpg",
             show:true,
             x:false
             },
               {
             name:"a4kaaar",
             discription:"أذكار وأدعية",
             isFollow:"follow",
             img:"https://64.media.tumblr.com/avatar_8b90e8658586_96.pnj",
             show:true,
             x:false
             },
               {
             name:"mi3rag",
             discription:"مِعرَاجْ",
             isFollow:"follow",
             img:"https://64.media.tumblr.com/avatar_9f017a42eb13_96.pnj",
             show:true,
             x:false
             },
             {
             name:"thyming",
             discription:"Welcome Home",
             isFollow:"follow",
             img:"https://64.media.tumblr.com/71cdbb8837d776cbb6d575a284a08c16/33027de8554a6d7c-73/s64x64u_c1/aed447e18614f595c3e70799a932f570ac7b69cb.pnj",
             show:true,
             x:false
             }],
    };
  },
  
  computed: {
     
    homeTheme: function () {
      return this.$store.state.homeTheme;
    },
     
    homeThemeIndex: function () {
      return this.$store.state.homeThemeIndex;
    },
  },
 
  
};
</script>

<style scoped>

.alignCenter{
    align-items: center;
}
 #relatedBlogs{
    max-width: 350px;
     border-radius: 5px;
       display: flex;
  flex-direction: column;
  min-height: 100px;
 
}
#fButton{
  font-size: 16px;
  font-weight: bold;  
}
#sButton{
  font-size: 16px;
  font-weight: bold;  
 margin: 10px 20px 20px 10px;
 padding: 0px 30px 0px 50px;
  text-align: center;
}
#myButton {
  
   border-radius: 5px;
  color: white;
 padding: 5px 0 0 0 ;
    margin: 3px 10px 15px 15px;
  text-align: center;
  text-decoration: none;
  width: 320px;
  height: 60px;
  font-size: 18px;
}
 
#block{
    margin: 0px;
}

.sec:hover {
   cursor: pointer;
 
} 
#sButton:hover {
  text-decoration: underline;
} 
#fButton:hover {
  text-decoration: underline;
}
h5{
    padding: 15px 0 0 0 ;
    margin: 10px 10px 15px 25px;
    font-weight: bold;
}
.avatarStyle {
  width: 25px;
  margin: 10px 10px 20px 15px;

  padding: 0px 0px 0px 10px;
 
}
#space1{
 width:30px
}
#space2{
 width:40px
}
#divider2 {
  width: 350px;
  height: 0.5px;
  margin-bottom: 15px;
}
</style>
