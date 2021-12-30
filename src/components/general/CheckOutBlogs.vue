<template>
  <div
    id="relatedBlogs"
    v-bind:style="{ background: homeTheme[homeThemeIndex].backgroundColor }"
  >
    <h5
      v-bind:style="{
        color: homeTheme[homeThemeIndex].fontColor,
        'font-family': homeTheme[homeThemeIndex].fontStyle,
      }"
    >
      Check out these blogs
    </h5>
    <div
      id="divider2"
      v-bind:style="{
        'background-color': homeTheme[homeThemeIndex].fontColor,
      }"
    ></div>
    <b-row
      v-for="(item, i) in relatedBlogs"
      :key="i"
      class="sec alignCenter"
      v-show="show[i]"
    >
      <div class="avatarStyle">
        <avatar
          :username="item.name"
          v-bind:rounded="true"
          v-bind:src="item.img"
          v-bind:size="50"
        ></avatar>
      </div>
      <div id="space1"><b-col></b-col></div>

      <b-col>
        <div :style="{ width: '120px' }">
          <p
            id="block"
            v-bind:style="{
              color: homeTheme[homeThemeIndex].fontColor,
              'font-family': homeTheme[homeThemeIndex].fontStyle,
            }"
          >
            {{ item.name }}
          </p>
          <p
            id="block"
            v-bind:style="{
              color: homeTheme[homeThemeIndex].fontColor,
              'font-family': homeTheme[homeThemeIndex].fontStyle,
            }"
          >
            {{ item.title }}
          </p>
        </div>
      </b-col>
      <div id="space2"><b-col></b-col></div>
      <b-col>
        <div>
          <button
           v-if="true"
            id="fButton"
            v-on:click="followed(i)"
            type="button"
            v-bind:style="{
              
              'font-family': homeTheme[homeThemeIndex].focused,
              color: homeTheme[homeThemeIndex].fontColor,
            }"
          >
            Follow
          </button>
        </div>
      </b-col>
      <b-icon
        v-show="item.x"
        v-on:click="remove(i)"
        icon="x"
        font-scale="2"
        aria-hidden="true"
        v-bind:style="{ color: homeTheme[homeThemeIndex].focused }"
      />
    </b-row>
    <div
      id="divider2"
      v-bind:style="{
        'background-color': homeTheme[homeThemeIndex].fontColor,
      }"
    ></div>

    <button
      id="sButton"
      v-on:click="goToExplore"
      type="button"
      v-bind:style="{
        'font-family': homeTheme[homeThemeIndex].fontStyle,
        color: homeTheme[homeThemeIndex].focused,
      }"
    >
      Explore all of Tumblrs
    </button>
  </div>
</template>

<script>
import Avatar from "vue-avatar";
import Browser from "../../mocks/browser";
import axios from "axios";
import Vue from "vue";

export default {
  name: "TumblrDrawer",
  components: {
    Avatar: Avatar,
  },
  methods: {
    goToExplore() {
      this.$router.push({ name: "explore" });
    },

    async followed(i) 
    {
       try {
          await axios.post( Browser().baseURL+'/follow',
         
          {
             blogId:  this.relatedBlogs[i]._id,
           },
            { headers: { 'Authorization':   `Bearer ${localStorage.getItem('token')}` } },
          ) 
     } catch (e) {
       console.error(e);
     }     

     Vue.set(this.show,i,false) ;
      
    },
    remove: function (i) {
      this.relatedBlogs[i].show = false;
    },
  },
  async created() {
    try {
      await axios
        .get(Browser().baseURL + "/ranBlogs", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          console.log(
            "|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||"
          );
          this.relatedBlogs = res.data.ranBlogs;

          console.log(this.relatedBlogs);
          for (let i = 0; i < this.relatedBlogs.length; i++) {
            this.show.push(true);
             
          }
        });
    } catch (e) {
      console.error(e);
    }
  },
  data: function () {
    return {
      relatedBlogs: [],
      show: [],
      avatarDefaultPhoto:
        "https://assets.tumblr.com/images/default_avatar/octahedron_closed_128.png",
    };
  },

  computed: {
    homeTheme: function () {
      return this.$store.state.homeTheme;
    },

    homeThemeIndex: function () {
      return this.$store.state.homeThemeIndex;
    },
  },
};
</script>

<style scoped>
.alignCenter {
  align-items: center;
}
#relatedBlogs {
  max-width: 350px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  min-height: 100px;
}
#fButton {
  font-size: 16px;
  font-weight: bold;
}
#sButton {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 20px 20px 10px;
  padding: 0px 30px 0px 50px;
  text-align: center;
}
#myButton {
  border-radius: 5px;
  color: white;
  padding: 5px 0 0 0;
  margin: 3px 10px 15px 15px;
  text-align: center;
  text-decoration: none;
  width: 320px;
  height: 60px;
  font-size: 18px;
}

#block {
  margin: 0px;
}
.sec:hover {
  cursor: pointer;
}
#sButton:hover {
  text-decoration: underline;
}
#fButton:hover {
  text-decoration: underline;
}
h5 {
  padding: 15px 0 0 0;
  margin: 10px 10px 15px 25px;
  font-weight: bold;
}
.avatarStyle {
  width: 25px;
  margin: 10px 10px 20px 15px;
  padding: 0px 0px 0px 10px;
}
#space1 {
  width: 30px;
}
#space2 {
  width: 40px;
}
#divider2 {
  width: 350px;
  height: 0.5px;
  margin-bottom: 15px;
}
</style>
