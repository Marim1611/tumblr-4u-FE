<template>
<div  class="" :class="l ? 'col mb-4' : ''">
  <div class="card">
    <div class="card-body">
      <!--<b-container v-show="x">
        <b-row class="zero-padding">
          <b-col cols="2">
            <router-link to="">
              <img :src="profileImg" class="imgshape" />
            </router-link>
          </b-col>

          <b-col>
            <router-link to="">
              <p class="titleHandel">kldsjflkdsjfklsa</p>
            </router-link>
          </b-col>
        </b-row>
      </b-container>-->
      <b-container v-if="x === 0">
        <b-row class="zero-padding">
          <br>
          <div v-if="l===1" class="profileDiv">
            <img class="imgFit" :src="this.profileUser.img?this.profileUser.img:avatarPhoto"  />
            <a class="link2" href="">{{profileUser.name}}</a>
          </div>
          <div v-html="post.postHtml" ></div>
          <br >
          <br >
          <div class="note_1">
            <router-link
              v-for="t in post.tags"
              :key="t.tag"
              class="note"
              :to="t"
              >{{ t }}
            </router-link>
          </div>
        </b-row>
      </b-container>
      <b-container v-if="x === 1">
        <b-row class="zero-padding">
          <br />
          <div v-html="recentlyPost.postHtml"></div>
          <br />
          <br />
          <div class="note_1">
            <router-link
              v-for="t in recentlyPost.tags"
              :key="t.tag"
              class="note"
              :to="t"
              >{{ t }}
            </router-link>
          </div>
        </b-row>
      </b-container>
      <br />
      <b-row class="zero-padding">
        <b-col v-if="x===0">
          <router-link class="note" to="/nopage">{{notesCount}} note</router-link>
        </b-col>
        <b-col v-else-if="x===1">
          <router-link class="note" to="/nopage">{{recentlyNoteCount}} note</router-link>
        </b-col>
        <b-col>
          <div class="iconsDiv">
            <b-dropdown
              class="dropup"
              size="lg"
              dropup
              text="Drop-Up"
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
            >
              <template #button-content>
                <b-icon class="h4 mb-2 cardIcons" icon="three-dots"></b-icon>
              </template>
              <b-dropdown-item href="#">Facebook</b-dropdown-item>
              <b-dropdown-item href="#">Tweet</b-dropdown-item>
              <b-dropdown-item href="#">Reddit</b-dropdown-item>
              <b-dropdown-item href="#">Mail</b-dropdown-item>
              <b-dropdown-item href="#">Embed</b-dropdown-item>
              <b-dropdown-item href="#">Permalink</b-dropdown-item>
            </b-dropdown>

            <router-link class="note" to="/nopage">
              <b-icon class="h4 mb-2 cardIcons" icon="arrow-repeat"></b-icon>
            </router-link>
            <b-icon
              v-show="!fill"
              v-on:click="like"
              class="h4 mb-2 cardIcons"
              icon="heart"
            ></b-icon>
            <b-icon
              v-show="fill"
              v-on:click="unlike"
              class="h4 mb-2 cardIcons heartColor"
              icon="heart-fill"
            ></b-icon>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
  </div>
  
</template>

<script>
export default {
  name: "profilecard",
  data() {
    return {
      fill: false,
      avatarPhoto:
        "https://assets.tumblr.com/images/default_avatar/octahedron_closed_128.png",
      
    };
    /*dd:(
        
        new URL(this.link).hostname.replace('www.','')
      ),*/
  },
  props: ["post", "x", "recentlyPost","notesCount","recentlyNoteCount","l","profileUser"],

  //created(){

  //alert(this.dd)
  /*let Domain=(new URL(this.dd))
    this.domain=Domain.hostname.replace('www.','')*/
  // },

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
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 25px;
  width: 80%;
}
.imgshape {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 50px;
}
.titleHandel {
  margin-top: 20px;
  margin-left: 5px;
  font-weight: bold;
  color: black;
}
.postCards {
  width: 90%;
  margin-top: 25px;
}
.note {
  text-align: center;
  color: #a7a7a7 !important;
  font-weight: 400;
}
.note_1 {
  margin-top: 10px;
}
.note:hover {
  color: rgb(104, 103, 103) !important;
  text-decoration: none;
}
.iconsDiv {
  text-align: right;
}
.cardIcons {
  margin-left: 5px;
  margin-right: 5px;
  fill: #a7a7a7;
}
.cardIcons:hover {
  fill: rgb(104, 103, 103) !important;
}
.imgFit {
  padding: 0;
  border-radius: 3px 3px 0 0;
  
  width: 25%;;
}
.card-body {
  padding: 0;
  border-radius: 10px;
}
.zero-padding {
  padding: 0;
  margin-left: 0;
  margin-right: 0;
}
.container-fluid {
  padding-left: 0;
  padding-right: 0;
}
.container {
  padding-left: 0;
  padding-right: 0;
}
.dropup {
  position: relative;
  bottom: 5px;
  left: 10px;
}
.card-text {
  margin-top: 20px;
}
.link {
  width: 100%;
  height: 50px;
  background-color: #adabab;
  font-size: 15px;
  line-height: 21px;
  padding: 0px 20px;
}
.link2 {
  text-align: left;
  position: relative;
  left:10px;
 color:black !important;
  font-weight: 700;
  
}
.link2:hover{
  text-decoration: none !important;
}
.xx {
  color: black !important;
}
.xx:hover {
  text-decoration: none;
}
.heartColor {
  fill: red;
}
.heartColor:hover {
  fill: red !important;
}
.profileDiv{
  margin: 0 5px 5px 0;
  padding:0;
  border-bottom: 1px solid rgb(172, 170, 170);
  position: relative;
  bottom: 25px;
  /* margin-top:5px;
  margin-bottom: 5px; */
}
</style>
