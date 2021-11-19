<!--
<template>
  <div id="searchResult">
    <div class="search-outer">
      <div class="search-inner">

      </div>
      <div class="search-inner"></div>
    </div>
  </div>
</template>
-->
<template>
  <div id="searchCard">
    <div class="flex-container">
      <div class="container">
        <div class="header">
          <img class="profile" src="https://64.media.tumblr.com/54a1c708b6e6f778e6d6a62122b87264/dd15ee49758e1917-0f/s64x64u_c1/591674a52eaa19af57c763479bdbddcfa2219db8.jpg" alt="">
          <div class="name-follow">
            <a href="" class="name">{{blogs.id[1]}} </a>
            <a href class="cyan">Follow</a>
          </div>
          <div class="dropdown">
            <button class="dropbutton">
              <img v-on:click="postOption" class="options" src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-3-1/512/points-512.png" alt="">
            </button>
            <div v-show="showDropDown" class="dropdown-content">
              <a href="#">Posted - ....,..:...M</a>
              <button>Copy link</button>
              <button>This particular post isn't for me</button>
              <button class="red">Report</button>
              <button class="red">Block</button>
              <button v-on:click="closeDropDown" class="closeButton">Close</button>
            </div>
          </div>
        </div>
        <!--<img class="content-image" v-bind:src="blogs.photos[0]" alt="">-->
        <div class="content" v-html="blogs.content[2]"></div>
        <div class="tag-container">
          <a href="" class="tags" v-for="tag in blogs.Tags" :key="tag">{{ tag }}</a>
        </div>
        <div class="footer-flex">
          <div class="notes"> {{ blogs.notes[1] }} notes</div>
          <img src="https://64.media.tumblr.com/43cd7a46978309e82c50b8f44a5b981b/tumblr_inline_p099d84YdO1sqzgz0_250.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return{
          showDropDown: false
      }
  },
  methods:{
    /** gets started when user clicks on ... button on post and shows options
    */
   postOption: function(){
     this.showDropDown = !this.showDropDown;
   },
   /**
    * gets started when user clicks on close button
    * it closes the dropdown menu in post
    */
   closeDropDown:function(){
     this.showDropDown = false;
   }
  },
  computed:{
    blogs(){
      return this.$store.state.blogs;
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.red{
  color: red;
}
.options{
  width: 25px;
  height : 25px;
}
.dropdown{
  position: relative;
  display: inline-block;
}
.dropbutton{
  border: none;
  background: #ffffff;
  display: block;
}
.dropdown-content a{
  display: block;
  padding: 12px 16px;
  background: #ffffff;
  color: black;
  text-decoration: none;
  border-bottom: #eee 2px solid;
}
.dropdown-content button{
    padding: 12px;
    display: block;
    width: 100%;
    border: none;
    background: #ffffff;
    
}
.dropdown-content{
  min-width: 250px;
  position: absolute;
  left:-100px;
  display: block;
  border-radius: 3px;
  text-align: center;
  padding:10px;
}
.flex-container{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 20px;
}
a:link{
  text-decoration: none;
}
.name:hover {
  text-decoration: none;
}
.dropdown-content a:hover{
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}

.dropdown-content :hover{
  background: #eee;
}

.cyan{
  color: #00b8ff;
}
.header .name-follow{
  display: inline;
  flex-grow: 1;
}
.profile{
  width: 38px;
  height: 38px;
  margin-right: 10px;
  border-radius: 3px;
}
.footer-flex{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.footer-flex img{
  width: 25px;
  height : 25px;
}
#searchCard{
  background: navy;
  min-height: 100vh;
  width: 100%;
}
.container{
  max-width: 540px; 
  background: #ffffff;
  border-radius: 3px;
  display: inline-block;
}
.header{
  display: flex;
  align-items: center;
  padding: 10px 10px 0px;
  margin: 0px 0px 10px;
  font-size: 14px;
  font-family: 'Helvetica';
}
.name{
 margin: 0px 5px 0px 0px;
 color: black;
}
.tags{
  color: #000000a6;
  font-size: 16px;
  font-family: 'Helvetica';
  margin: 0px 11px 0px 0px;
  display: inline-block;
}
.notes{
  flex-grow: 1;
  font-size: 16px;
  font-family: 'Helvetica';
  margin: 25px 11px 0px;
  padding: 0px 0px 12px;
}
.tag-container{
  margin: 12px 0px 0px;
  padding: 0px 10px;
}
</style>
