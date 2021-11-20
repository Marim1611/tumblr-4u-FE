 <template>
  <div id="searchCard">
     
      <div class="container" v-bind:style="{'background-color': homeTheme[homeThemeIndex].cardColor}" >
        <div class="header">
          <img class="profile" src="https://64.media.tumblr.com/54a1c708b6e6f778e6d6a62122b87264/dd15ee49758e1917-0f/s64x64u_c1/591674a52eaa19af57c763479bdbddcfa2219db8.jpg" alt="">
          <div class="name-follow">
            <a href="" class="name">{{post.id}} </a>
            <a href class="cyan">Follow</a>
          </div>
          <div class="dropdown">
             
     <b-icon class="options" v-on:click="postOption"  icon="three-dots" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
            
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
        <div class="content" v-html="post.content[2]"></div>
        <div class="tag-container">
          <a href="" class="tags" v-for="tag in post.Tags" :key="tag">{{ tag }}</a>
        </div>
        <div class="footer-flex">
          <div class="notes"> {{ post.notes[1] }} notes</div>
          <img src="https://64.media.tumblr.com/43cd7a46978309e82c50b8f44a5b981b/tumblr_inline_p099d84YdO1sqzgz0_250.png" alt="">
        </div>
      </div>
    </div>
</template>
<script>
/** 
 * @displayName Post Card in the home page
 * @example [none]
 */
export default {
  data() {
      return{
          showDropDown: false
      }
  },
  methods:{
   /** Function that shows a drop down list of clickable options in the post when clicking on the 3-points icon in the post
    * @public This is a public method
    * @param {none}
    */
   postOption: function(){
     this.showDropDown = !this.showDropDown;
   },
   /**
    * Function that close the drop down list of options in the post when clicking on the close button in the list
    * @public This is a public method
    * @param {none}
    */
   closeDropDown:function(){
     this.showDropDown = false;
   }
  },
  props:{

      post:Object
  },
   computed: {
        homeTheme: function(){
            return this.$store.state.homeTheme;
        },
        homeThemeIndex: function(){
            return this.$store.state.homeThemeIndex;
        },
        
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.red{
  color: #407fbfb6;
}
.options{
  width: 25px;
  height : 25px;
  cursor: pointer;
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