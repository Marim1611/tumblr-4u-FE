<template>
  <div>
    <div class="dropdown"
    >
     <div id="searchBar">
          <form id="search-form">
    <div class="search"
       >
      <input type="text" name="search" class="round"
         v-model.trim="inputValue"
          v-on:keyup.enter="goToSearchPage"
          v-on:click="isClicked = !isClicked"
          placeholder="Search Tumblr"
       v-bind:style="{
          'background-color': homeTheme[homeThemeIndex].cardColor,
            }" />
      
    </div>
</form>

     </div>
      
      <!-- interests  -->
      <div v-on:click.prevent="toggleDropdown">
        <div v-if="!inputValue" v-show="isClicked" class="dropdown-list">
          <div
            v-for="item in interestsList"
            v-bind:key="item.name"
            class="dropdown-item"
          >
            <img :src="item.img" class="dropdown-item-flag" />
            <p
              v-bind:style="{
                'font-style': homeTheme[homeThemeIndex].fontStyle,
              }"
            >
              {{ item.name }}
            </p>
          </div>
        </div>
        <!-- auto complete  -->
        <div v-else class="dropdown-list">
          <div>
            <p v-bind:style="{ 'font-size': '18px', margin: '10px' }">
              Go to #{{ this.inputValue }}
            </p>
          </div>
          <div
            v-show="itemVisible(item)"
            v-for="item in tags"
            v-bind:key="item"
            class="dropdown-item"
          >
            <b-icon
              icon="search"
              font-scale="1"
              aria-hidden="true"
              v-bind:style="{ color: 'black' }"
            ></b-icon>
            <p
              v-bind:style="{
                'font-style': homeTheme[homeThemeIndex].fontStyle,
                padding: '10px',
              }"
            >
              {{ item }}
            </p>
          </div>
          <!--  Tumblrs  -->
          <div>
            <p :style="{ 'font-size': '18px', margin: '10px' }">Tumblrs</p>
          </div>
          <div
            v-on:click="openDrawer(item.name, item.img, item.coverImg)"
            v-show="itemVisible(item.name)"
            v-for="item in usersInSearch"
            v-bind:key="item.name"
            class="dropdown-item"
          >
            <!-- <img :src="item.img" class="dropdown-item-flag" /> -->
            <img :src="item.img" class="dropdown-item-flag" />
            <!-- <div class="dropdown-item-flag">
 
       
<avatar username= item.name
        v-bind:src= item.img
        v-bind:size = 30
        v-bind:rounded=false        
        ></avatar>
        </div>
         -->
 
            <p
              v-bind:style="{
                'font-style': homeTheme[homeThemeIndex].fontStyle,
              }"
            >
              {{ item.name }}
            </p>
          </div>
        </div>

       


      </div>
    </div>
    <TumblrDrawer
      v-if="showBlogDrawer"
      v-bind:tumblrsObj="tumblrsObj"
    ></TumblrDrawer>
  </div>
</template>

<script>

import TumblrDrawer from "./TumblrsDrawer.vue";
//import Avatar from 'vue-avatar'
//import axios from 'axios';

import Vue from "vue";
/**
 *  SearchBar of the home page shows list of user interests if he didn't type any thing otherwise show related other users or tags
 * @example [none]
 */
export default {
  data: function () {
    return {
      showBlogDrawer: false,
      inputValue: "",
      isClicked: false,
      tumblrsObj: { name: "", avatar: "", coverImg: "" },
      interestsList: [ ],
      searchResults:[],
      usersInSearch: [],
      tags: [ ],
    };
  },
  components: {
    TumblrDrawer: TumblrDrawer,
    //  'Avatar':Avatar
  },
  methods: {
     /**
     * Function to make the items visible only that appear in the dropdown list to match what the user type in the search bar
     * @public This is a public method
     * @param {none}
     */
    itemVisible(item) {
      let currentName = item.toLowerCase();
      let currentInput = this.inputValue.toLowerCase();
      return currentName.includes(currentInput);
    },
   /**
     * Function to control opening the search dropdown list
     * @public This is a public method
     * @param {none}
     */
    toggleDropdown() {
      this.isClicked = !this.isClicked;
    },
     /**
     * Function to control closing the search dropdown list if user clicks outside it
     * @public This is a public method
     * @param {none}
     */
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.isClicked = false;
      }
    },
     /**
     * Function to open the drawer profile of the some user that appears in the search dropdown list when you click on the user
     * @public This is a public method
     * @param {none}
     */
    openDrawer(name, avatar, cover) {
      this.showBlogDrawer = !this.showBlogDrawer;
      Vue.set(this.tumblrsObj, "name", name);
      Vue.set(this.tumblrsObj, "coverImg", cover);
      Vue.set(this.tumblrsObj, "avatar", avatar);
    },
    goToSearchPage()
    {
      //TODO: CHANGE IF INPUT IS EMPTY GO TO EXPLORE => RECOMMENDED FOR YOU
      
      if (this.inputValue)
      this.$router.push({ name: 'search', params: {inputValue: this.inputValue  }})
      // this.$router.push({ path: '/search', searchWord: this.inputValue }); 
       
    }
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
     * Function to get the home page color theme Index from the store
     * @public This is a public method
     * @param {none}
     */
    homeThemeIndex: function () {
      return this.$store.state.homeThemeIndex;
    },
  },
  props: {
    // interestsList: Array
  },
  async mounted() {
    document.addEventListener("click", this.close);
  },

  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
   
};
</script>

<style scoped>
.round {
    width: 100%;
    border-radius: 15px;
    border: 1px #000 solid;
    padding: 5px 5px 5px 25px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
}
#searchBar{
    margin-top:10px;
}
.corner {
    position: absolute;
    top: 3px;
    left: 5px;
    height: 20px;
    width: 20px;
    z-index: 10;
    border-radius: 10px;
    border: none;
    background: #000; /* Set the bg image here. with "no-repeat" */
}


.search {
    position: relative;
    width: 220px;
    height: 30px;
    position: relative; padding: 0 0 0 20px; margin: 0 20px;
}
.dropdown {
  position: relative;
  /* width: 100%;
  max-width: 600px; */
  /* display: inline; */
  margin: 0 auto;
  /* background-color: red; */
}
.dropdown-input,
.dropdown-selected {
  cursor: text;
  width: 100%;
  padding: 10px 10px;
  border-radius: 8px;
  line-height: 1.5em;
  outline: none;
}
.dropdown-input{
  text-align: left;
  padding-left:20px;
}
.dropdown-input:focus,
.dropdown-selected:hover {
  background: #fff;
  border-color: #e2e8f0;
}

.dropdown-input::placeholder {
  color: #fff;
  text-align: left;
}
.dropdown-selected {
  font-weight: bold;
  cursor: pointer;
}
.dropdown-list {
  /* overflow-y: auto; */
  z-index: 3;
  transform: translate3d(0px, 20px, 0px);
  position: absolute;
  width: 100%;
  max-height: 500px;
  margin-top: 4px;
  overflow-y: scroll;
  background: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
.dropdown-item {
  display: flex;
  overflow-y: scroll;
  width: 100%;
  padding: 11px 16px;
  cursor: pointer;
}
.dropdown-item:hover {
  background: #edf2f7;
}
.dropdown-item-flag {
  max-width: 40px;
  max-height: 40px;
  margin: auto 12px auto 0px;
}
/* .dropdown-item-flag{
  max-width: 24px;
  max-height: 18px;
  margin: auto 12px auto 0px;
} */
 

#icon {
  
  position: absolute;
  bottom:20%;
  left: 5px;
  width: 24px;
  height: 24px;
  
}
</style>
