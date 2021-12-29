<template>
  <div
    id="homeDiv"
    v-bind:style="{
      background: homeTheme[homeThemeIndex].backgroundColor,
    }"
  >
    <MatchMedia query="(max-width: 1000px)" v-slot="{ matches }">
      <div id="mobile" v-if="matches">
        <MobileNavBar />
        <div id="dashBoardM" v-for="(post, i) in dashBoardPosts" :key="i">
          <DashBoard v-bind:post="post" v-bind:maxWidth="postCardWidth" />
        </div>
      </div>

      <!-- web view -->
      <div v-else>
        <NavBar />
        <div
          id="divider"
          v-bind:style="{
            background: homeTheme[homeThemeIndex].fontColor,
          }"
        ></div>
        <div id="myDashboard">
          <div id="leftPart">
            <div id="homePageCreatePost">
              <div class="avatarStyle" v-on:click="openAvatarDrawer">
                <avatar
                  username="Jane Doe"
                  v-bind:rounded="false"
                  v-bind:src="userImg"
                  v-bind:size="70"
                ></avatar>
              </div>
              <CreatePostSection />
            </div>

            <div id="dashBoard" v-for="(post, i) in dashBoardPosts" :key="i">
              <div id="postRow">
                 <div class="avatarStyle">
                <avatar
                  username="Jane Doe"
                  v-bind:rounded="false"
                  v-bind:src="userImg"
                  v-bind:size="70"
                ></avatar>
              </div>
              <DashBoard v-bind:post="post" v-bind:maxWidth="postCardWidth" />

              </div>
              
            </div>
            <ProfileDrawer
              v-show="openProfileDrawer"
              v-bind:tumblrsObj="tumblrsObj"
              v-bind:showBlogDrawer="openProfileDrawer"
              v-bind:myPosts="myPosts"
              v-on:closeDrawer="closeDrawer($event)"
            />
          </div>
          <div id="rightPart">
            <CheckBlogs />
            <Radar />
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
import CreatePostSection from "../createPost/CreatePostSection.vue";
import DashBoard from "../general/ViewPostCard.vue";
import Avatar from "vue-avatar";
import ProfileDrawer from "../profile/ProfileDrawer.vue";
import CheckBlogs from "../general/CheckOutBlogs.vue";
import Browser from "../../mocks/browser";
import axios from "axios";

import Radar from "../general/Radar.vue";

/**
 *  Home page that contains dashboard and create post components
 * @example [none]
 */
export default {
  name: "HomePage",
  data: function () {
    return {
      postCardWidth: "540px",
      userImg:
        "https://assets.tumblr.com/images/default_avatar/octahedron_closed_96.png",
      openProfileDrawer: false,
      myPosts: [],
      tumblrsObj: {
        id: "",
        name: "",
        avatar: "",
        title: "",
        coverImg:
          "https://assets.tumblr.com/images/default_header/optica_pattern_05_focused_v3.png?_v=671444c5f47705cce40d8aefd23df3b1",
      },
      dashBoardPosts: [],
    };
  },
  async created() {
    try {
      await axios
        .get(Browser().baseURL + "/dashboard", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          this.dashBoardPosts = res.data.res.postsToShow;
          this.tumblrsObj.id =  this.blogId;
          this.tumblrsObj.name =this.userBlog.name;
          this.tumblrsObj.title = this.userBlog.title;
         // this.tumblrsObj.avatar = this.userBlog.img;
           console.log("DEPLOYED*******?????????????????????");
          console.log("PRIMARY BLOG ID: ");
          console.log(this.blogId);
          // this.$store.commit("updateBodyColor", res.data.res.user.bodyColor);
          // this.$store.commit("setBlogIds", res.data.res.user.blogsId);
          // this.$store.commit(
          //   "stBlockedBlogsId",
          //   res.data.res.blog.blockedBlogs
          // );
          // this.$store.commit("setUserId", res.data.res.user._id);
          // this.$store.commit("setBrimaryBlogId", res.data.res.blog._id);
        
       
        });
    } catch (e) {
      console.log("error in dashboard");
      console.error(e);
    }
  },
  components: {
    NavBar: NavBar,
    CreatePostSection: CreatePostSection,
    DashBoard: DashBoard,
    MobileNavBar: MobileNavBar,
    MatchMedia: MatchMedia,
    Avatar: Avatar,
    ProfileDrawer: ProfileDrawer,
    CheckBlogs: CheckBlogs,
    Radar: Radar,
  },
  computed: {
    blogId: function () {
      return this.$store.state.user.primaryBlogId;
    },
    userBlog: function () {
      return this.$store.state.blog;
    },
    myToken: function () {
      return this.$store.state.token;
    },
    homeTheme: function () {
      return this.$store.state.homeTheme;
    },
    /**
     * Function to get the home page colortheme Index from the store
     * @public This is dsa public method
     * @param {none}
     */
    homeThemeIndex: function () {
      return this.$store.state.homeThemeIndex;
    },
  },
  methods: {
    isMockServer(baseUrl) {
      if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
        return false;
      else return true;
    },
    async openAvatarDrawer() {
      console.log("BLOG DRAWER :''''D ");
       console.log(this.blogId);
     
      let myRoute = "";
      if (this.isMockServer(Browser().baseURL))
        myRoute = Browser().baseURL + "/posts";
      else
        myRoute =
          Browser().baseURL + `/blog/${this.blogId}/getBlogPosts`;
 console.log(myRoute);
      try {
        await axios
          .get(myRoute, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            this.myPosts = res.data.res.postsToShow
            console.log(  this.myPosts)
          });
      } catch (e) {
        console.error(e);
      }
      this.openProfileDrawer = !this.openProfileDrawer;
    },
    closeDrawer: function (close) {
      // console.log(text);
      console.log("drqwer closse heree2");

      this.openProfileDrawer = close;
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
#postRow{
    display: flex;
  flex-direction: row;
  justify-content: space-between;
 

}
#dashBoard {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 20px;
  padding-left: 320px;

  /* background-color: red; */
}
#dashBoardM {
  display: inline-block;
  margin: 0 auto;
  padding: 3px;
}
#leftPart {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  margin-left: 10px;
}
#rightPart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px;
}
#myDashboard {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
#homePageCreatePost {
  width: 540px;
  display: flex;
  flex-direction: row;
  padding: 30px 50px 50px 50px;
  justify-content: center;
}
.avatarStyle {
  width: 25px;
  margin-right: 60px;
  cursor: pointer;
  padding: 0px 0px 0px 5px;
  text-align: center;
}

.imgshape {
  border-radius: 50%;
  position: relative;
  top: 60px;
  border-style: solid;
  border-width: 5px;
  border-color: white;
}
#mobile {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}
</style>
