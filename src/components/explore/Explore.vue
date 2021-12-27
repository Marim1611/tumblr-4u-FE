<template>
  <div
    id="homeDiv"
    v-bind:style="{
      'background': homeTheme[homeThemeIndex].backgroundColor,
    }"
  >
    <!-- nav bar-->
    <MatchMedia query="(max-width: 480px)" v-slot="{ matches }">
      <MatchMedia query="(max-width: 1286px)" v-slot="{ match }">
      <MobileNavBar v-if="matches" />

      <div v-else>
        <NavBar v-if="!this.out"/>
        <Header v-else/>
        <div id="posts">
          <div
            id="divider"
            v-bind:style="{
              'background-color': homeTheme[homeThemeIndex].fontColor,
            }"
          ></div>

          <!-- the 2 coloumns of the page -->
          <div class="flexH">
            <!-- the first coloumn of the posts -->
            <div class="flexV center">
              <!-- explore bar of trending, staff picked....etc -->
                <ExploreBar v-on:multiCol="multiCol($event)" v-on:singCol="multiCol($event)" />

                <div id="cards" class="flexH">
                  <div class="margin-right" v-for="(card,i) in exploreCards" :key="i">
                    <ExploreCard v-bind:card="card"/>
                  </div>
                </div>
                
                <!-- showing one coloumn -->
                <div  v-show="!multi" class="left flexH">
                  <div class="flexV">
                    <div id="dashBoard" v-for="(post, i) in dashBoardPosts" :key="i">
                        <DashBoard v-bind:post="post" maxWidth="540px" />
                    </div>
                  </div>
                </div>
                <!-- the two coloumns -->
                <div v-if="match" v-show="multi" class="left flexH">
                  <div class="flexV">
                    <div id="dashBoard" v-for="(post, i) in dashBoardPosts" :key="i">
                        <DashBoard v-if="i%2==0" v-bind:post="post" maxWidth="300px" />
                    </div>
                  </div>
                  <div class="flexV">
                    <div id="dashBoard" v-for="(post, i) in dashBoardPosts" :key="i">
                        <DashBoard v-if="i%2==1" v-bind:post="post" maxWidth="300px" />
                    </div>
                  </div>
                </div>
                <!-- when three coloumns -->
                <div v-if="!match" v-show="multi" class="left flexH">
                  <div class="flexV">
                    <div id="dashBoard" v-for="(post, i) in dashBoardPosts" :key="i">
                        <DashBoard v-if="i%3==0" v-bind:post="post" maxWidth="300px" />
                    </div>
                  </div>
                  <div class="flexV">
                    <div id="dashBoard" v-for="(post, i) in dashBoardPosts" :key="i">
                        <DashBoard v-if="i%3==1" v-bind:post="post" maxWidth="300px" />
                    </div>
                  </div>
                  <div class="flexV">
                    <div id="dashBoard" v-for="(post, i) in dashBoardPosts" :key="i">
                        <DashBoard v-if="i%3==2" v-bind:post="post" maxWidth="300px" />
                    </div>
                  </div>
                </div>
            </div>



                <div id="vDivider" 
                v-bind:style="{'background-color': homeTheme[homeThemeIndex].fontColor}">
                </div>
                <div class="right">
                    <FollowTags />
                    <RelatedBlogs />
                </div>
            </div>          

          
        </div>
      </div>
      </MatchMedia>
    </MatchMedia>
  </div>
</template>

<script>
import { MatchMedia } from "vue-component-media-queries";
import MobileNavBar from "../homePage/HomePageMobileNavBar.vue";
import NavBar from "../homePage/HomePageNavBar.vue";
import DashBoard from "../general/ViewPostCard.vue";
import FollowTags from "./FollowTag.vue";
import RelatedBlogs from "./ExploreRelatedBlogs.vue";
import ExploreBar from "./ExploreBar";
import ExploreCard from "./ExploreCard.vue";
import Browser from '../../mocks/browser'
import Header from '../registerPages/WelcomePageHeader.vue'
import axios from 'axios';
/**
 *  Home page that contains dashboard and create post compnents 
 * @example [none]
 */
export default {
  name: "HomePage",
  components: {
    NavBar: NavBar,
    DashBoard: DashBoard,
    MobileNavBar: MobileNavBar,
    MatchMedia: MatchMedia,
    FollowTags:FollowTags,
    RelatedBlogs: RelatedBlogs,
    ExploreBar: ExploreBar,
    ExploreCard: ExploreCard,
    Header:Header
  },
  async created() {
    try {
    
         await axios.get(Browser().baseURL+'/dashBoard').then(res => {
            this.dashBoardPosts = res.data.posts;
          console.log(res.data)    
          })
         
     //  const res =await axios.get('http://localhost:3000/autoCompleteSearchDash')
        
   //  this.interestsList= res.data;
    } catch (e) {
        console.log("^^^^^^^^^^^^^^^^^^")
      console.error(e);
    }
  },
  methods:
  {
    multiCol:function(close){
      this.multi = close;
    }
  },
  data: function(){
    return{
      multi:true,
      dashBoardPosts:[]
    }
  },
  computed: {
    out: {
      get() {
        return this.isOut;
      },
      set(newVal) {
        return newVal;
      },
    },
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
     /**
     * Function to get post data from the store to show them in post card in the home page
     * @public This is a public method
     * @param {none}
     */
   // dashBoardPosts: function () {
    //  return this.$store.state.blogs;
    //},
    exploreCards: function () {
      return this.$store.state.exploreCards;
    }
  },
  props:{
    isOut:Boolean
  }
};
</script>

<style scoped>
.margin-right{
  margin: 0px 10px 0px 10px;
}
#cards{
  margin-bottom: 40px;
  overflow-x: auto;
  max-width: 920px;
}
.left{
  padding-right: 15px;
}
.right{
  padding-left: 15px;
}
.flexH {
  display: flex;
  flex-direction: row;
  justify-content: center;  
}
.center{
  align-items: center;  
}
.flexV {
  display: flex;
  flex-direction: column;
    
}

#vDivider{
  width: 1px;
}
#homeDiv {
  width: 100%;
  height: 100%;
}
#divider {
  width: 100%;
  height: 1px;
}
#dashBoard {
  align-items: center;  
  display: inline;
  flex-direction: column;
  padding-left: 10px;

  /* background-color: red; */
}
#posts {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
