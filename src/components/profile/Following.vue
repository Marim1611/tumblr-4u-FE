<template>
  <div>
    <Profile />
    <div class="row row-cols-1 row-cols-md-4 likesCards">
      <followingCard
      v-for="blog in blogs"
      v-bind:key="blog._id"
      :blog="blog"
      />
    </div>
    
  </div>
</template>
<script>
import Profile from "./Profile.vue";
import followingCard from './FollowingCard'
import axios from "axios";
import Browser from "../../mocks/browser";
export default {
  name: "following",
  async created() {
    console.log("%%%%%%$$$$------------$$$$$$$%%%%%%%%%%%%$$$$$$$$$$%");
    console.log(this.blogid);
    let myRoute = "";
    if (this.isMockServer(Browser().baseURL))
      myRoute = Browser().baseURL + "/blog";
    else myRoute = Browser().baseURL + `/blog/view/${this.blogid}`;
    try {
      await axios
        .get(myRoute, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          this.blogs = res.data.blog;
          console.log("HELLLO FROM LIKES");
          console.log(this.blogs);
          console.log(this.blogs.description)
        });
    } catch (e) {
      console.error(e);
    }
  },
  data() {
    return {
      blogs: [],
    };
  },
  computed: {
    blogid: function () {
      console.log("blogggg IDDDD");
      console.log(this.$store.state.user.primaryBlogId);
      return this.$store.state.user.primaryBlogId;
    },
  },
  methods: {
    isMockServer(baseUrl) {
      if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
        return false;
      else return true;
    },
  },
  components: {
    Profile,
    followingCard
  },
};
</script>
<style scoped></style>
