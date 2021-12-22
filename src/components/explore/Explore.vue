<template>
  <div
    id="homeDiv"
    v-bind:style="{
      'background': homeTheme[homeThemeIndex].backgroundColor,
    }"
  >
    
    <MatchMedia query="(max-width: 1000px)" v-slot="{ matches }">
      <MatchMedia query="(max-width: 1286px)" v-slot="{ match }">
      <MobileNavBar v-if="matches" />

      <div v-else>
        <NavBar />
        <div id="posts">
          <div
            id="divider"
            v-bind:style="{
              'background-color': homeTheme[homeThemeIndex].fontColor,
            }"
          ></div>


          <div class="flexH">
            <div class="flexV ">
                <ExploreBar />
                <div v-if="match" class="left flexH">
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
                <div class="left flexH" v-else>
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
    ExploreBar: ExploreBar
  },
  computed: {
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
    dashBoardPosts: function () {
      return this.$store.state.blogs;
    },
  },
};
</script>

<style scoped>
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
.flexV {
  display: flex;
  flex-direction: column;
    align-items: flex-start; 
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
  
  margin-bottom: 5px;
  padding-left: 10px;

  /* background-color: red; */
}
#posts {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
