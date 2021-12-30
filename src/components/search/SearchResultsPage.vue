<template>
  <div
    v-bind:style="{
      background: homeTheme[homeThemeIndex].backgroundColor,
    }"
  >
    <MatchMedia query="(max-width: 1000px)" v-slot="{ matches }">
      <div id="mobile" v-if="matches"  >
        <MobileNavBar />
         <h1
                id="wordM"
                v-bind:style="{
                  color: homeTheme[homeThemeIndex].fontColor,
                  'font-family': homeTheme[homeThemeIndex].fontStyle,
                }"
              >
                {{ getSearchWord }}
                <!-- {{ this.$route.params.word }} -->
              </h1>
              <div id="dashBoardM" v-for="(post, i) in dashBoardPosts" :key="i">
                <PostCard v-bind:post="post" v-bind:maxWidth="postCardWidth1" />
              </div>
      </div>

      <div v-else>
        <NavBar />
        <div
          id="divider"
          v-bind:style="{
            background: homeTheme[homeThemeIndex].fontColor,
          }"
        ></div>

        <div id="parentDiv">
          <div id="leftSide">
            <div class="main">
              <h1
                id="word"
                v-bind:style="{
                  color: homeTheme[homeThemeIndex].fontColor,
                  'font-family': homeTheme[homeThemeIndex].fontStyle,
                }"
              >
                {{ getSearchWord }}
                <!-- {{ this.$route.params.word }} -->
              </h1>
              <div class="main2">
                <b-icon
                  id="icon"
                  v-on:click="gridView"
                  icon="grid-1x2-fill"
                  font-scale="1.5"
                  aria-hidden="true"
                  :style="{
                    color: homeTheme[homeThemeIndex].fontColor,
                    cursor: 'pointer',
                  }"
                ></b-icon>
                <b-icon
                  id="icon"
                  v-on:click="rowView"
                  icon="hdd-stack-fill"
                  font-scale="1.5"
                  aria-hidden="true"
                  :style="{
                    color: homeTheme[homeThemeIndex].fontColor,
                    cursor: 'pointer',
                  }"
                ></b-icon>
              </div>
            </div>

            <div id="rowsView" v-if="showAsRows">
              <div id="dashBoard" v-for="(post, i) in dashBoardPosts" :key="i">
                <PostCard v-bind:post="post" v-bind:maxWidth="postCardWidth1" />
              </div>
            </div>
            <div id="gridView" v-else-if="showAsGrid">
              <div class="flexV">
                <MatchMedia query="(max-width: 1286px)" v-slot="{ match }">
                  <div v-if="match" class="left flexH">
                    <div class="flexV">
                      <div
                        id="dashBoard"
                        v-for="(post, i) in dashBoardPosts"
                        :key="i"
                      >
                        <PostCard
                          v-if="i % 2 == 0"
                          v-bind:post="post"
                          maxWidth="300px"
                        />
                      </div>
                    </div>
                    <div class="flexV">
                      <div
                        id="dashBoard"
                        v-for="(post, i) in dashBoardPosts"
                        :key="i"
                      >
                        <PostCard
                          v-if="i % 2 == 1"
                          v-bind:post="post"
                          maxWidth="300px"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="left flexH" v-else>
                    <div class="flexV">
                      <div
                        id="dashBoard"
                        v-for="(post, i) in dashBoardPosts"
                        :key="i"
                      >
                        <PostCard
                          v-if="i % 3 == 0"
                          v-bind:post="post"
                          maxWidth="300px"
                        />
                      </div>
                    </div>
                    <div class="flexV">
                      <div
                        id="dashBoard"
                        v-for="(post, i) in dashBoardPosts"
                        :key="i"
                      >
                        <PostCard
                          v-if="i % 3 == 1"
                          v-bind:post="post"
                          maxWidth="300px"
                        />
                      </div>
                    </div>
                    <div class="flexV">
                      <div
                        id="dashBoard"
                        v-for="(post, i) in dashBoardPosts"
                        :key="i"
                      >
                        <PostCard
                          v-if="i % 3 == 2"
                          v-bind:post="post"
                          maxWidth="300px"
                        />
                      </div>
                    </div>
                  </div>
                </MatchMedia>
              </div>
            </div>
          </div>

          <div id="sidePanel" md="auto">
               <RelatedBlogs />
            <RelatedTags />
         
          </div>
        </div>

        <!-- <div class="row" v-for="(rowIdx,i) in Math.ceil(dashBoardPosts.length / 3)" :key="i">
     <b-row class="one-third column" v-for="(item,i) in dashBoardPosts.slice(3 * (rowIdx - 1), 3 * rowIdx)"  :key="'A'+i">
            
      
      <PostCard v-bind:post="item" v-bind:maxWidth="postCardWidth2" />
 
 </b-row>
    
</div> -->
      </div>
    </MatchMedia>
  </div>
</template>

<script>
//import axios from 'axios';
//import api from '../../api';
import NavBar from "../homePage/HomePageNavBar.vue";
import { MatchMedia } from "vue-component-media-queries";
import MobileNavBar from "../homePage/HomePageMobileNavBar.vue";
import PostCard from "../general/ViewPostCard.vue";
import RelatedTags from "./RelatedTagsCard.vue";
import RelatedBlogs from "./RelatedBlogsCard.vue";
export default {
  name: "search",
  components: {
    NavBar: NavBar,
    MatchMedia: MatchMedia,
    MobileNavBar: MobileNavBar,
    PostCard: PostCard,
    RelatedTags: RelatedTags,
    RelatedBlogs: RelatedBlogs,
  },
  data: function () {
    return {
      postCardWidth1: "540px",
      postCardWidth2: "300px",
      showAsGrid: false,
      showAsRows: true,
    };
  },

  computed: {
    getSearchWord: {
      get() {
        return this.searchWord;
      },
      set(newVal) {
        return newVal;
      },
    },
    homeTheme: function () {
      return this.$store.state.homeTheme;
    },
    homeThemeIndex: function () {
      return this.$store.state.homeThemeIndex;
    },
  },
  props: {
    searchWord: String,
    dashBoardPosts: Array,
  },
  methods: {
    gridView() {
      this.showAsGrid = true;
      this.showAsRows = false;
    },
    rowView() {
      this.showAsRows = true;
      this.showAsGrid = false;
    },
  },
  async created() {
    console.log("%%%%%%%%%%%results =>>>>>>>>>>%%%%%%%%%%%%%%%%%%%%");
    console.log(this.searchWord);
    console.log(this.dashBoardPosts);
  },
};
</script>

<style scoped>
#dashBoard {
  align-items: center;
  display: inline;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 20px;
  margin-top: 0px;
  padding-left: 500px;
}
#parentDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
#leftSide {
  display: flex;
  flex-direction: column;
}
#sidePanel {
  margin: 20px;
  display: flex;
  flex-direction: column;
}
#container {
  width: 100%;
}

#divider {
  width: 100%;
  height: 1px;
}
#word {
  margin-top: 50px;
  font-size: 3rem;
  text-align: left;
}
#wordM {
  margin-top: 50px;
  margin-left:50px ;
  font-size: 3rem;
  text-align: left;
}
.main2 {
  margin-top: 50px;
  margin-left: 300px;
}
.main {
  display: flex;
  flex-direction: row;
}
#icon {
  margin: 20px;
}
.left {
  padding-right: 15px;
}
.right {
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

#dashBoard {
  align-items: center;
  display: inline;
  flex-direction: column;

  margin-bottom: 5px;
  padding-left: 10px;

  /* background-color: red; */
}
#mobile{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
 text-align: center;
}
#dashBoardM{
   display: inline-block;
  margin: 0 auto;
  padding: 3px;
  /* background-color: red; */
}
</style>
