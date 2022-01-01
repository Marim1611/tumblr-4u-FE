<template>
    <div id="relatedTags" v-bind:style="{'background': homeTheme[homeThemeIndex].cardColor}" >
             <h5 v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">Related Tags</h5>
                <div
            id="divider2"
            v-bind:style="{
              'background': homeTheme[homeThemeIndex].fontColor,
            }"
          ></div>
          <div id='img'></div>
          <button id="myButton" type="button" v-bind:style="{'background': homeTheme[homeThemeIndex].focused,'font-family':homeTheme[homeThemeIndex].fontStyle,'color': homeTheme[homeThemeIndex].fontColor2 }" >Follow</button>
          
            <b-row id="row" v-for="(item, i) in relatedTags" :key="i" class='sec'>
                <div class="avatarStyle">
                <avatar
              username="Jane Doe"
               v-bind:rounded=false
               v-bind:src=item.img
              v-bind:size="50"
            ></avatar>
            </div>
              <div id="space1">  <b-col></b-col></div>
          
             <b-col>
                 <div :style="{'width':'120px'}" > 
                 <p id="block" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">{{item.tag}}</p>
                 <p id="block" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">{{item.followers}}</p>
                 </div>
                
              </b-col>
               <div id="space2">  <b-col></b-col></div>
                 <b-col>
               <div>      <button id="fButton" v-on:click="followed(item.isFollow,i)" type="button" v-bind:style="{'font-family':homeTheme[homeThemeIndex].fontStyle,'color': homeTheme[homeThemeIndex].fontColor }" >{{item.isFollow}}</button>
</div>
  </b-col>
                 
           </b-row>
            <div
            id="divider2"
            v-bind:style="{
              'background': homeTheme[homeThemeIndex].fontColor,
            }"
          ></div> 
           <button id="sButton" type="button" v-bind:style="{'font-family':homeTheme[homeThemeIndex].fontStyle,'color': homeTheme[homeThemeIndex].fontColor }" >show more tags</button>
        

            </div>
</template>

<script>
import Avatar from "vue-avatar";
 
 
/**
 *  component to show related tags to a some word user typed in search bar
 * @example [none]
 */
export default {
  name: "TumblrDrawer",
  components: {
    Avatar: Avatar,
  },
  data: function () {
    return {
         relatedTags:[
             {
             tag:"#food",
             followers:"800k followers",
             isFollow:"follow",
             img:"https://64.media.tumblr.com/b3147fe4c7716e1f091ee153a6f1dbeb/da923b03059c3a4b-23/s640x960/a199c4ea8338aed64e57cb0ff34b7d61db4bb555.jpg"

             },
               {
             tag:"#art",
             followers:"4k followers",
             isFollow:"follow",
             img:"https://64.media.tumblr.com/b3147fe4c7716e1f091ee153a6f1dbeb/da923b03059c3a4b-23/s640x960/a199c4ea8338aed64e57cb0ff34b7d61db4bb555.jpg"

             },
               {
             tag:"#fashion",
             followers:"15k followers",
             isFollow:"follow",
             img:"https://64.media.tumblr.com/b3147fe4c7716e1f091ee153a6f1dbeb/da923b03059c3a4b-23/s640x960/a199c4ea8338aed64e57cb0ff34b7d61db4bb555.jpg"

             },
             {
             tag:"#fashion",
             followers:"15k followers",
             isFollow:"follow",
             img:"https://64.media.tumblr.com/b3147fe4c7716e1f091ee153a6f1dbeb/da923b03059c3a4b-23/s640x960/a199c4ea8338aed64e57cb0ff34b7d61db4bb555.jpg"

             }]
    };
  },
  methods:{
       /**
     * Function to allow user to follow/unfollow some tag of another user
     * @public This is a public method
     * @param {none}
     */
   followed(status,i){
        
       if( status == "follow")
       {
 this.relatedTags[i].isFollow= "Unfollow"
 
       }
      
       else if( status == "Unfollow")
       this.relatedTags[i].isFollow= "follow"

   }
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
 
 #relatedTags{
    max-width: 350px;
    
     border-radius: 5px;
       display: flex;
  flex-direction: column;
  min-height: 200px;
}
#fButton{
  font-size: 16px;
  font-weight: bold;  
   position: relative;
}
#sButton{
   position: relative;
  font-size: 16px;
  font-weight: bold;  
 margin: 15px 30px 30px 10px;
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

#img{
     background-image: url("https://64.media.tumblr.com/c4260b74c66355eeb4fabed6d0576145/037a496fbda269cd-a5/s640x960/eeb56010d6acb086fc56320ab66d3085378efa75.jpg");
    border-radius: 10px; 
    max-width: 340px;
    height: 140px;
     padding: 15px 0 0 0 ;
    margin: 10px 10px 15px 15px;
     background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
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
position: relative;
  height: 0.5px;
}
</style>
