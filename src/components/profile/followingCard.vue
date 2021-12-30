<template>
  <div class="col mb-4">
    <div class="card" style="width: 22rem">
      <div class="card-body">
        <div class="container-fluid">
          <div
            v-if="profileUser.coverImg"
            class="row coverMargin"
            v-bind:style="{
              'background-image': 'url(' + this.profileUser.coverImg + ')',
            }"
          >
          <a :href="blog.url">
            <div class="profileImg">
              <img
                :src="blog.img ? blog.img : this.profileImg"
                alt="Avatar"
                class="avatar"
              />
            </div>
            </a>
          </div>
          
          <div
            v-else
            class="row coverMargin"
            v-bind:style="{
              'background-image': 'url(' + this.coverImg + ')',
            }"
          >
          <a :href="blog.url">
            <div class="profileImg">
              <img
                :src="blog.img ? blog.img : this.profileImg"
                alt="Avatar"
                class="avatar"
              />
            </div>
            </a>
          </div>
          <br />
          <h5 class="card-title userName">{{blog.name}}</h5>
          <p class="card-text">
            {{ blog.description }}
          </p>
          <div class="row row-cols-1 row-cols-md-3">
            <div v-for="(img, index) in imgs" :key="index" class="col mb-4 zz">
              <img :src="img.url" class="recentlyImgs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Browser from "../../mocks/browser";
export default {
  name: "followingcard",
  props: ["blog"],
  data() {
    return {
      profileUser: {},
      coverImg:
        "https://64.media.tumblr.com/c7a6e4667a26600ac5001793f1722b8a/14c5179fb8ae066c-6d/s2048x3072/96211f955d3c3f515ebd52c4857002e92c44c119.png",
      profileImg: "https://64.media.tumblr.com/avatar_9778d75065f0_128.pnj",
      imgs: [
        {
          url: "https://64.media.tumblr.com/c2ec25b008544f4284be19e3913fa096/4baa8844f148f9ed-0b/s500x750/dd27ff53d6fda5c05de55ded23213c7450d6a913.jpg",
        },
        {
          url: "https://64.media.tumblr.com/71d8bc781645d8046c7cddd5352ba820/361c521dfe49ae02-9c/s500x750/eb7af2a4a96f341a7e63fe1c3abffc4bea7895d8.jpg",
        },
        {
          url: "https://64.media.tumblr.com/498bdc68c61929aad21108cb2e1f8934/9fe1b150732064ec-ee/s1280x1920/c23cae0b8f5061a13cc961240d4dfe58127623e4.jpg",
        },
      ],
    };
  },
  async created() {
    let myRoute = "";
    if (this.isMockServer(Browser().baseURL))
      myRoute = Browser().baseURL + "/blog";
    else myRoute = Browser().baseURL + `/blog/view/${this.blogId}`;
    console.log(myRoute);
    try {
      await axios
        .get(myRoute, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          this.profileUser = {
            name: res.data.res.data.name,
            title: res.data.res.data.title,
            img: res.data.res.data.img,
            coverImg: res.data.res.data.coverImg,
          };
        });
    } catch (e) {
      console.error(e);
    }
  },

  components: {},
  methods: {
    like() {
      this.fill = true;
      this.note++;
    },
    unlike() {
      this.fill = false;
      this.note--;
    },
    isMockServer(baseUrl) {
      if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
        return false;
      else return true;
    },
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
.coverMargin {
  height: 100px;
}
.profileImg {
  position: relative;
  text-align: center;
  top: 70px;
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-style: solid;
  border-width: 2.5px;
  border-color: white;
}
.userName {
  text-align: center;
}
.imgs {
  width: 50px;
  height: 50px;
}
.recentlyImgs {
  width: 80%;
  height: 70%;
  border-radius: 6px;
}
.col {
  padding-left: 10px;
  padding-right: 10px;
  margin: 0;
}
.card-body {
  padding: 0;
}
.card-text {
  color: grey;
}
.row {
  height: 90px;
}
.card {
  border-radius: 6px;
}
</style>
