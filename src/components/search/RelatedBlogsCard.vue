<template>
    <div id="relatedTags" v-bind:style="{'background': homeTheme[homeThemeIndex].cardColor}" >
             <h5 v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">Related Blogs</h5>
                <div
            id="divider2"
            v-bind:style="{
              'background': homeTheme[homeThemeIndex].fontColor,
            }"
          ></div>
           
            <b-row v-for="(item, i) in relatedBlogs" :key="i" class='sec'>
                <div class="avatarStyle">
                <avatar
              :username=item.name
               v-bind:rounded=true
               v-bind:src=item.img
              v-bind:size="50"
            ></avatar>
            </div>
              <div id="space1">  <b-col></b-col></div>
          
             <b-col>
                 <div :style="{'width':'120px'}" > 
                 <p id="block" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">{{item.name}}</p>
                 <p id="block" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">{{item.title}}</p>
                 </div>
                
              </b-col>
               <div id="space2">  <b-col></b-col></div>
                 <b-col>
               <div>      <button id="fButton" v-on:click="followed( i)" type="button" v-bind:style="{'font-family':homeTheme[homeThemeIndex].fontStyle,'color': homeTheme[homeThemeIndex].fontColor }" >{{isFollower[i]}}</button>
</div>
  </b-col>
                 
           </b-row>
            <div
            id="divider2"
            v-bind:style="{
              'background': homeTheme[homeThemeIndex].fontColor,
            }"
          ></div> 
           <button id="sButton" type="button" v-bind:style="{'font-family':homeTheme[homeThemeIndex].fontStyle,'color': homeTheme[homeThemeIndex].fontColor }" ></button>
        

            </div>
</template>

<script>
import Avatar from "vue-avatar";
import Browser from "../../mocks/browser";
import axios from "axios";
import Vue from 'vue';
/**
 *  component to show related blogs to a some word user typed in search bar
 * @example [none]
 */
export default {
  name: "TumblrDrawer",
  components:
   {
    Avatar: Avatar,
  },
   data: function () {
    return {
         relatedBlogs:[],
        isFollower:[],
          avatarDefaultPhoto:
        "https://assets.tumblr.com/images/default_avatar/octahedron_closed_128.png",
            
           
    };
  },
  methods:{
     /**
     * Function to allow user to follow/unfollow some blog of another user
     * @public This is a public method
     * @param {none}
     */
  async followed( i){
        
       if( this.isFollower[i] == "Follow")
       {
         try {
          await axios.post( Browser().baseURL+'/follow',
         
          {
             blogId:  this.relatedBlogs[i]._id,
           },
            { headers: { 'Authorization':   `Bearer ${localStorage.getItem('token')}` } },
          ) 
     } catch (e) {
       console.error(e);
     }
                     Vue.set(this.isFollower,i,'Unfollow')
 
       }
      
       else if(this.isFollower[i]  == "Unfollow")
       {
           try {
          await axios.post( Browser().baseURL+'/unfollow',
         
          {
             blogId:  this.relatedBlogs[i]._id,
           },
            { headers: { 'Authorization':   `Bearer ${localStorage.getItem('token')}` } },
          ) 
     } catch (e) {
       console.error(e);
     }
          Vue.set(this.isFollower,i,'Follow') 
       }
      

   }
  },
  /**
     * created cycle hook to get related blogs when this is component is created
     * @public This is a public method
     * @param {none}
     */
 async created(){
    try {
      await axios
        .get(Browser().baseURL + "/ranBlogs", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          console.log("888dijnfkjnkjnkdjf,nsnv,ngm,v")
           console.log( res.data.ranBlogs)
              
           for (let i = 0; i < res.data.ranBlogs.length; i++) {
             console.log("888dijnfkjnkjnkdjf,nsnv,ngm,v")
            //this.show.push(false);
            Vue.set(this.isFollower,i,'Follow')
          
             
          }
         
          this.relatedBlogs = res.data.ranBlogs;
         
        

       
          
             
          
        });
    } catch (e) {
      console.error(e);
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
  min-height: 100px;
  margin-top:20px;
  margin-bottom:20px ;
}
#fButton{
  font-size: 16px;
  margin-top:20px ;
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
.sec{
    margin-top:10px;
}
#sButton:hover {
  text-decoration: underline;
} 
#fButton:hover {
  text-decoration: underline;
  position: relative;
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
   
  height: 0.5px;
  position: relative;
}
</style>
