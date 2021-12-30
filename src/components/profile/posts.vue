<template>
  <div>
    <Profile />
    <b-container fluid class="PostsMargin">
      <b-row>
        <b-col cols="3"></b-col>
        <b-col cols="5">
          <profileCard
            v-for="(post, index) in posts"
            v-bind:key="index"
            :post="post"
            :notesCount="notesCount[index]"
            :x="0"
            :l="0"
          />
        </b-col>
        <b-col cols="4">
          <h4 class="third">RECENTLY LIKED</h4>
          <profileCard
            v-bind:key="recentlyPost.blogId"
            :recentlyPost="recentlyPost"
            :recentlyNoteCount="recentlyNoteCount"
            :x="1"
            :l="0"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Profile from "./Profile.vue";
import ProfileCard from "./ProfileCard.vue";

import Browser from "../../mocks/browser";
import axios from "axios";
export default {
  name: "posts",
  async created() {
    console.log("%%%%%%$$$$------------$$$$$$$%%%%%%%%%%%%$$$$$$$$$$%");
    console.log(this.blogid);
    let myRoute = "";
    //""
    /*  */
    if (this.isMockServer(Browser().baseURL))
      myRoute = Browser().baseURL + "/posts";
    else
      myRoute =
        Browser().baseURL + `/blog/${this.blogid}/getBlogPosts`;
    try {
      await axios
        .get(myRoute, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          this.posts = res.data.res.postsToShow;
          this.recentlyPost = this.posts[0];
        });
    } catch (e) {
      console.error(e);
    }
    /*myRoute = Browser().baseURL + "/notes";
    try {
      await axios
        .get(myRoute, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          this.notes = res.data.notes;
          for (let i = 0; i < this.notes.length; i++) {
            this.notesCount.push(this.notes[i].countsArray[0]);
          }

          this.recentlyNoteCount = this.notesCount[0];
        });
    } catch (e) {
      console.error(e);
    }*/
  },
  methods: {
    isMockServer(baseUrl) {
      if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
        return false;
      else return true;
    },
  },
  data() {
    return {
      posts: [],
      recentlyPost: [],
      notes: [],
      notesCount: [],
      recentlyNoteCount: 0,
    };
  },
  components: {
    ProfileCard,
    Profile,
  },
  computed: {
    blogid: function () {
      console.log("blogggg IDDDD");
      console.log(this.$store.state.user.primaryBlogId);
      return this.$store.state.user.primaryBlogId;
    },
  },
};
</script>

<style scoped>
.PostsMargin {
  margin-top: 50px;
}
</style>
