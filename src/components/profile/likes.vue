<template>
  <div>
    <Profile/>
    <div class="row row-cols-1 row-cols-md-4">
      <div class="col mb-4">
    
      
    
    </div>
     
     </div>
    
    </div>
    
    
    
    
    
    
    

    

   <!--<div class="card-deck">
      <div class=card>

          <profileCard
            v-for="post in posts"
            v-bind:key="post.id"
            :img="post.img"
            :content="post.content"
            :tag="post.tag"
            :notes="post.notes"
            :link="post.link"
            :flag="1"
          />
          </div>
          </div>-->

  
</template>

<script>
import axios from "axios";
import Profile from './Profile.vue'
//import ProfileCard from "./ProfileCard.vue";
import Browser from "../../mocks/browser";
export default {
  name: "likes",
  async created() {
    try {
      const resp = await axios.get(Browser().baseURL + "/Profile");
      this.posts = resp.data.Profile;
    } catch (e) {
      alert(e);
    }
  },
  data() {
    return {
      flag: false,
      posts: [],
    };
  },
  components: {
    //ProfileCard,
    Profile,
  },
};
</script>

<style scoped>
#TheHeader {
  position: fixed;
  top: 0;
  width: 100%;
}
.NavBarRight {
  margin-left: auto;
}
.icons {
  margin-right: 10px;
  margin-left: 10px;
}
.iconColor {
  color: white !important;
  margin-right: 10px;
  margin-left: 10px;
}

.fill {
  height: 200px;
}
.profileImg {
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
.secondHalf {
  text-align: center;
}
.headers {
  font-weight: bold;
  position: relative;
  top: 50px;
}
.links {
  text-align: center;
  margin-top: 20px;
}
.linksbeuty {
  margin-left: 7px;
  margin-right: 7px;
  font-weight: bold;
}
.third {
  margin-top: 18px;
}
.Cardshit {
  width: 30%;
  height: 30%;
}
.group{
  margin-left:100px;
}
</style>
