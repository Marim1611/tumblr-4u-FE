<template>
  <div id="navDiv">
    <nav
      id="navbar"
      :style="{ 'background-color': homeTheme[homeThemeIndex].backgroundColor }"
    >
      <ul id="navbar">
        <div id="img">
          <li>
            <img
              src="https://img.icons8.com/color-glass/48/000000/tumblr.png"
              :style="{
                'background-color': homeTheme[homeThemeIndex].fontColor,
              }"
            />
          </li>
        </div>
        <div id="spacer">
          <li></li>
        </div>
        <li class="searchBarClass">
          <SearchBar />
        </li>

        <div id="spacer">
          <li></li>
        </div>

        <div id="iconsDiv">
          <li>
            <router-link to="/home" class="nav-item nav-link">
              <b-icon
                id="icon"
                icon="house-door-fill"
                font-scale="1.5"
                aria-hidden="true"
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
              ></b-icon>
            </router-link>
          </li>
          <li>
            <router-link to="/explore" class="nav-item nav-link">
              <b-icon
                id="icon"
                icon="compass"
                font-scale="1.5"
                aria-hidden="true"
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
              ></b-icon>
            </router-link>
          </li>
          <li>
            <router-link to="" class="nav-item nav-link">
              <b-icon
                id="icon"
                icon="envelope-fill"
                font-scale="1.5"
                aria-hidden="true"
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
              ></b-icon>
            </router-link>
          </li>
          <li>
            <router-link to="" class="nav-item nav-link">
              <b-icon
                id="icon"
                icon="emoji-laughing"
                font-scale="1.5"
                aria-hidden="true"
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
              ></b-icon>
            </router-link>
          </li>
          <li>
            <router-link to="" class="nav-item nav-link">
              <b-icon
                id="icon"
                icon="lightning-fill"
                font-scale="1.5"
                aria-hidden="true"
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
              ></b-icon>
            </router-link>
          </li>
          <li>
            <router-link to="" class="nav-item nav-link">
              <DropdownList   />
            </router-link>
          </li>
          <li>
            <router-link to="" class="nav-item nav-link">
              <b-icon
                v-on:click="newPostOpen"
               
                id="icon"
                icon="pencil-fill"
                font-scale="1.5"
                aria-hidden="true"
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
              ></b-icon>
               <!-- v-show="newPost"   -->
              <NewPost v-show="newPost" v-on:hideFunc="hideCirclesNewPost($event)"/>
            </router-link>
          </li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
import DropdownList from "./AccountDropDownList.vue";
import NewPostItem from "./HomePageNewPost.vue";
import SearchBar from "./HomePageSearchBar.vue";
/**
 *  Home page Navigation Bar 
 * @example [none]
 */
export default {
  name: "HomeNavbar",

  data: function () {
    return {
      newPost: false,
      color: "red",
     
    };
  },
  components: {
    DropdownList: DropdownList,
    NewPost: NewPostItem,
    SearchBar: SearchBar,
  },
  computed: {
    /**
     * Function to get the home page color theme array from the store
     * @public This is a public method
     * @param {none}
     */
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
     
    
  },

  methods:{
    newPostOpen(){
      this.newPost = true;
    },
    hideCirclesNewPost (hide) {
     this.newPost = hide;
    },
    
  }
};
</script>

<style scoped>
#navDiv {
  display: flex;
  width: 100%;
}

#navbar {
  align-items: center;
  width: 100%;
  height: 20%;
  position: relative;
  display: flex;
}

ul {
  position: absolute;
  display: flex;
  flex-direction: row;
  padding: 0;
  float: right;
  margin: 0;
}
li {
  position: relative;
  padding: 10px;
  list-style: none;
}
li.right {
  float: right;
}

#iconsDiv {
  display: flex;
  flex-direction: row;
  text-align: center;
  position: relative;
  flex-grow: 2;
  flex-shrink: 2;
  float: right;
}

#icon {
  color: whitesmoke;
  /* padding: 20px; */
  cursor: pointer;
}

img {
  flex-grow: 2;
  margin: 0;
  padding: 0;
  cursor: pointer;
  flex-shrink: 2;
}
#spacer {
  flex-grow: 7;
  flex-shrink: 2;
}
#grayLine {
  display: block;
  width: 100%;
  height: 3px;
  flex-grow: 1;
  background-color: rgb(202, 199, 199);
}
SearchBar {
  flex-grow: 3;
}

.searchBarClass{
  cursor: text;
  position: absolute;
  left: 40px;
}
</style>
