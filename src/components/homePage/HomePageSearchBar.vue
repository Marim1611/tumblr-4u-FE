<template>
  <div>
    <div class="dropdown"
    >
      <div
        id="input_container"
        v-bind:style="{
          'background': homeTheme[homeThemeIndex].cardColor,
          'border-radius': '4px',
          'border-color': homeTheme[homeThemeIndex].fontColor,
        }"
      >
        <b-icon
          id="icon"
          icon="search"
          font-scale="1.5"
          aria-hidden="true"
          v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
        ></b-icon>

        <input
          id="search"
          name="wordName"
          v-model.trim="inputValue"
          v-on:keyup.enter="goToSearchPage"
          v-on:click="isClicked = !isClicked"
          @input="getSearchLists"
          autocomplete="off"
          class="dropdown-input"
          type="text"
          placeholder="Search Tumblr"
          v-bind:style="{
            'background': homeTheme[homeThemeIndex].cardColor,
            color: homeTheme[homeThemeIndex].fontColor,
          }"
        />
      </div>
      <!-- interests  -->
      <div v-on:click.prevent="toggleDropdown">
        <div v-if="!inputValue" v-show="isClicked" class="dropdown-list">
          <div
            v-for="(item,i) in interestsList"
            v-on:click="searchMe(item)"
            v-bind:key="i"
            class="dropdown-item"
          >
            <img :src="item.img?item.img:defaultImg" class="dropdown-item-flag" />
            <p
              v-bind:style="{
                'font-style': homeTheme[homeThemeIndex].fontStyle,
              }"
            >
              {{ item}}
            </p>
          </div>
        </div>
        <!-- auto complete "tags"  -->
        <div v-else class="dropdown-list">
          <div>
            <p v-bind:style="{ 'font-size': '18px', margin: '10px' }">
              Go to #{{ this.inputValue }}
            </p>
          </div>
          <div
            v-show="itemVisible(item)"
            v-on:click="searchMeTag(item)"
            v-for="item in tags"
            v-bind:key="item"
            class="dropdown-item"
          >
            <b-icon
            class="iconS"
              icon="search"
              font-scale="1"
              aria-hidden="true"
              v-bind:style="{ color: 'black' }"
            ></b-icon>
            <p
              v-bind:style="{
                'font-style': homeTheme[homeThemeIndex].fontStyle,
                
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
            v-on:click="openDrawer(item.name, item.img, item.coverImg,item._id)"
            v-show="itemVisible(item.name)"
            v-for="item in usersInSearch"
            v-bind:key="item.name"
            class="dropdown-item"
          >
            <!-- <img :src="item.img" class="dropdown-item-flag" /> -->
            <img :src="item.img?item.img:avatarDefaultPhoto" class="dropdown-item-flag" />
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
        v-bind:showBlogDrawer="showBlogDrawer"
         v-on:closeDrawer="closeDrawer($event)"
    ></TumblrDrawer>
  </div>
</template>

<script>
import axios from 'axios';
import TumblrDrawer from "./TumblrsDrawer.vue";
import Browser from '../../mocks/browser'
//import Avatar from 'vue-avatar'
//import { fetchSearchResults } from '@/services/fetchers'
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
      postsInSearch: [1,2,3],
      tags: [ ],
       defaultImg:"https://static2.bigstockphoto.com/6/5/3/large1500/356358914.jpg",
       avatarDefaultPhoto:
        "https://assets.tumblr.com/images/default_avatar/octahedron_closed_128.png",
     };
  },
  components: {
    TumblrDrawer: TumblrDrawer,
    //  'Avatar':Avatar
  },
  methods: {
    async getSearchLists(){
      console.log(this.inputValue)
      try {
         await axios.get(Browser().baseURL+`/autoCompleteSearchDash/${this.inputValue}`,
         { headers: { 'Authorization':   `Bearer ${localStorage.getItem('token')}` } }
         ).then(res => {
            this.usersInSearch = res.data.resultBlogs;
            this.tags= res.data.resultHashTag;
          })
    } catch (e) {
      console.error(e);
    }

    },
      closeDrawer: function (close) {
      // console.log(text);
            console.log("drqwer closse heree2");

      this.showBlogDrawer = close;
    },
    
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
    openDrawer(name, avatar, cover,id) {
      console.log("why??????????")
      this.showBlogDrawer = true;
      Vue.set(this.tumblrsObj, "name", name);
      Vue.set(this.tumblrsObj, "coverImg", cover);
      Vue.set(this.tumblrsObj, "avatar", avatar);
      Vue.set(this.tumblrsObj, "id", id);
    },
    async goToSearchPage()
    {
      //TODO: CHANGE IF INPUT IS EMPTY GO TO EXPLORE => RECOMMENDED FOR YOU
      // if(Browser().baseURL ==)
      // 
      let myRoute=""
         if (this.isMockServer(Browser().baseURL))
         myRoute=Browser().baseURL+'/autoCompleteSearchDash'
         else
        myRoute= Browser().baseURL+`/autoCompleteSearchDash/${this.inputValue}`
        console.log("myRoute")
        console.log(myRoute)
         await axios.get(myRoute,
          { headers: { 'Authorization':   `Bearer ${localStorage.getItem('token')}` } }
         ).then(res => {
            this.postsInSearch= res.data.resultPostHashTag;
             console.log("postsInSearch")    
          console.log( this.postsInSearch)    
          }).catch((e)=>{
            console.log(e)
          })
      if (this.inputValue)

  { console.log("PUSH???") 
      console.log(this.postsInSearch) 
    this.$router.push({ path:'/autoCompleteSearchDash',name: 'autoCompleteSearchDash', params: {searchWord: this.inputValue, word: this.inputValue,dashBoardPosts:this.postsInSearch}})

  }
      
      // this.$router.push({ path: '/search', searchWord: this.inputValue }); 
       
    },
    async searchMeTag(tag){
        try {
         await axios.get(Browser().baseURL+`/autoCompleteSearchDash/${tag}`
         ,
         
          { headers: { 'Authorization':`Bearer ${localStorage.getItem('token')}` } })
          .then(res => {
            console.log("##############TAG")
       
            
            this.postsInSearch = res.data.resultPostHashTag; 
                 console.log(this.postsInSearch )
          })
    } catch (e) {
      console.error(e);
    }
             this.$router.push({ name: 'autoCompleteSearchDash', params: {searchWord: tag, word: tag,dashBoardPosts:this.postsInSearch}})

    },
    async searchMe(interest){
        try {
         await axios.get(Browser().baseURL+'/autoCompleteSearchDash'
         ,
         
          { headers: { 'Authorization':`Bearer ${localStorage.getItem('token')}` } })
          .then(res => {
            
            this.postsInSearch = res.data.resultPostHashTag; 
          })
    } catch (e) {
      console.error(e);
    }
       this.$router.push({ name: 'autoCompleteSearchDash', params: {searchWord: interest, word: interest,dashBoardPosts:this.postsInSearch}})
    //this.$router.push({ name: 'autoCompleteSearchDash', params: {searchWord: interest, word: interest,dashBoardPosts:this.postsInSearch}})
    },
      isMockServer(baseUrl){
     
        if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
          return false
          else 
          return true
    },
     
  },
  computed: {
      myToken: function () {
      return this.$store.state.token;
    },
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
    } 
  },
  props: {
    // interestsList: Array

  },
    async created() {
    try {
         await axios.get(Browser().baseURL+'/autoCompleteSearchDash'
         ,
          { headers: { 'Authorization':`Bearer ${localStorage.getItem('token')}` } })
          .then(res => {
            
            this.interestsList= res.data.resultFollowedTag; 
            console.log("yalaaaaaaaaaaaaaaa")
            console.log(this.interestsList)          })
    } catch (e) {
        console.log("^^^^^^^^^^^^^^^^^^")
      console.error(e);
    }
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
.iconS{
  margin: 5px;
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
  height: 300px;
}
.dropdown-item {
  display: flex;
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
#input_container {
  position: relative;
  padding: 0 0 0 20px;
  margin: 0 20px;
  border: 2px solid wheat;
  cursor: text;
  direction: rtl;
  width: 500px;
}

#icon {
  
  position: absolute;
  bottom:20%;
  left: 5px;
  width: 24px;
  height: 24px;
  
}
</style>
