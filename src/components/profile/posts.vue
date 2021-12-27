<template>
  <div>
      <Profile/>
      <b-container fluid class="PostsMargin">
      <b-row>
        <b-col cols="3"></b-col>
        <b-col cols="5">
          <profileCard
            v-for="post in posts"
            v-bind:key="post.id"
            :text="post.text"
            :photo="post.photo"
            :profileImg="post.profileImg"
            :quote="post.quote"
            :link="post.link"
            :chat="post.chat"
            :audio="post.audio"
            :video="post.video"
            :tag="post.tag"
            :note="post.note"
            :flag="0"
          />
          </b-col>
        <b-col  cols="4">
          <h4 class="third">RECENTLY LIKED</h4>
          
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Profile from './Profile.vue'
import ProfileCard from "./ProfileCard.vue";

import Browser from "../../mocks/browser";
import axios from "axios";
export default {
  name: "posts",
  async created() {
    try {
      const resp = await axios.get(Browser().baseURL + "/profilePosts");
      this.posts = resp.data.profilePosts;
      /*this.getlinkDomain()*/
    } catch (e) {
      alert(e);
    }
  },
  methods:{
        },
  data(){
      return{
      flag: false,
      posts: [],
      }
  },
  components: {
    ProfileCard,
    Profile
  },
};
</script>

<style scoped>
.PostsMargin{
    margin-top:50px;

}

</style>
