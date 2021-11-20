<template>
  <div
    id="homeDiv"
    v-bind:style="{
      'background-color': homeTheme[homeThemeIndex].backgroundColor,
    }"
  >
    <MatchMedia query="(max-width: 480px)" v-slot="{ matches }">
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

          <div id="homePageCreatePost">
            <CreatPostSection />
          </div>

          <div id="dashBoard" v-for="(post, i) in dashBoardPosts" :key="i">
            <DashBoard v-bind:post="post" />
          </div>
        </div>
      </div>
    </MatchMedia>
  </div>
</template>

<script>
import { MatchMedia } from "vue-component-media-queries";
import MobileNavBar from "./HomePageMobileNavBar.vue";
import NavBar from "./HomePageNavBar.vue";
import CreatPostSection from "../createPost/CreatePostSection.vue";
import DashBoard from "./HomePageViewPost.vue";
/**
 *  Home page that contains dashboard and create post compnents 
 * @example [none]
 */
export default {
  name: "HomePage",
  components: {
    NavBar: NavBar,
    CreatPostSection: CreatPostSection,
    DashBoard: DashBoard,
    MobileNavBar: MobileNavBar,
    MatchMedia: MatchMedia,
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
  flex-grow: 1;
  margin-bottom: 20px;
  padding-left: 282px;

  /* background-color: red; */
}
#posts {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#homePageCreatePost {
  padding:  30px 200px 150px 250px;
  position: relative;
}
</style>
