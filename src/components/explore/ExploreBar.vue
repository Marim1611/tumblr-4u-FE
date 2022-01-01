<template>
    <div v-bind:style="{'border-color':homeTheme[homeThemeIndex].fontColor, 'color': homeTheme[homeThemeIndex].fontColor}" class=" barContainer">
        <h5 v-on:click="foryou" class="clickable barItem">For You <b-icon icon="suit-heart" aria-hidden="true" ></b-icon></h5>
        <h5 v-on:click="Trending" class="clickable barItem">Trending <b-icon icon="graph-up" aria-hidden="true" /></h5>
        <h5 v-on:click="staffpicks" class="clickable barItem">Staff Picks <b-icon icon="star" aria-hidden="true" /></h5>
        <h5 v-on:click="moreDropdown" class="clickable barItem grow">{{ more }} <b-icon icon="arrow-down-circle-fill" aria-hidden="true" /></h5>
        <div v-show="moreShow" class="dropdownContent">
            <button v-on:click="textOnly" v-bind:style="{'background-color':homeTheme[homeThemeIndex].cardColor }" class="dropdownItem">Text</button>
            <button v-on:click="photoOnly" v-bind:style="{'background-color':homeTheme[homeThemeIndex].cardColor }" class="dropdownItem">Photos</button>
            <button v-on:click="gifOnly" v-bind:style="{'background-color':homeTheme[homeThemeIndex].cardColor }" class="dropdownItem">GIFs</button>
            <button v-on:click="quoteOnly" v-bind:style="{'background-color':homeTheme[homeThemeIndex].cardColor }" class="dropdownItem">Quotes</button>
            <button v-on:click="chatOnly" v-bind:style="{'background-color':homeTheme[homeThemeIndex].cardColor }" class="dropdownItem">Chats</button>
            <button v-on:click="audioOnly" v-bind:style="{'background-color':homeTheme[homeThemeIndex].cardColor }" class="dropdownItem">Audio</button>
            <button v-on:click="videoOnly" v-bind:style="{'background-color':homeTheme[homeThemeIndex].cardColor }" class="dropdownItem">Video</button>
            <button v-on:click="askOnly" v-bind:style="{'background-color':homeTheme[homeThemeIndex].cardColor }" class="dropdownItem">Asks</button>
        </div>
       
        <h5 v-on:click="multiCol" v-show="!multi" class="clickable barItem"><b-icon icon="grid1x2" /></h5>
        <h5 v-show="multi" class="clickable barItem"><b-icon icon="grid1x2-fill" /></h5>
        <h5 v-on:click="singCol" v-show="multi" class="clickable barItem"><b-icon icon="hdd-stack" /></h5>
        <h5 v-show="!multi" class="clickable barItem"><b-icon icon="hdd-stack-fill" /></h5>
    </div>
</template>

<script>
 
 
 /**
 *  explore bar that change the number of column in the page and have the trending, staffpicks...etc
 * @example [none]
 */
export default {
  name: "ExploreBar",
  components: {
   
  },
  methods:{
      /**
     * Function that open and close the more menu.
     * get started when clicking on the more button on the explore page.
     * @public This is a public method
     * @param {none}
     */
   moreDropdown:function(){
       this.moreShow=!this.moreShow;
   },
   /**
     * Function that emits an event for multi-column view.
     * get started when clicking on the multi-column icon on the explore page.
     * @public This is a public method
     * @param {none}
     */
   multiCol:function(){
       this.$emit("multiCol",true);
       this.multi=true;
   },
   /**
     * Function that emits an event for single-column view.
     * get started when clicking on the single-column icon on the explore page.
     * @public This is a public method
     * @param {none}
     */
   singCol:function(){
       this.$emit("singCol",false)
       this.multi=false;
   },
   /**
     * Function that choose the text option and write instead of more.
     * get started when clicking on the text button in the more menu on the explore page.
     * @public This is a public method
     * @param {none}
     */
   textOnly:function(){
        this.moreShow=!this.moreShow;
        this.more="Text"
        this.text=true;
        this.forYou= false;
        this.trending= false;
        this.staffPicks= false;
        this.moreShow= false;
        this.photo=false;
        this.gif=false;
        this.quotes=false;
        this.chat=false;
        this.audio=false;
        this.video=false;
        this.ask=false;
   },
   /**
     * Function that choose the photo option and write instead of more.
     * get started when clicking on the photo button in the more menu on the explore page.
     * @public This is a public method
     * @param {none}
     */
   photoOnly:function(){
        this.moreShow=!this.moreShow;
        this.more="Photos"
        this.text=false;
        this.forYou= false;
        this.trending= false;
        this.staffPicks= false;
        this.moreShow= false;
        this.photo=true;
        this.gif=false;
        this.quotes=false;
        this.chat=false;
        this.audio=false;
        this.video=false;
        this.ask=false;
   },
   /**
     * Function that choose the gif option and write instead of more.
     * get started when clicking on the gif button in the more menu on the explore page.
     * @public This is a public method
     * @param {none}
     */
   gifOnly:function(){
        this.moreShow=!this.moreShow;
        this.more="GIFs"
        this.text=false;
        this.forYou= false;
        this.trending= false;
        this.staffPicks= false;
        this.moreShow= false;
        this.photo=false;
        this.gif=true;
        this.quotes=false;
        this.chat=false;
        this.audio=false;
        this.video=false;
        this.ask=false;
   },
   /**
     * Function that choose the quotes option and write instead of more.
     * get started when clicking on the quote button in the more menu on the explore page.
     * @public This is a public method
     * @param {none}
     */
   quoteOnly:function(){
        this.moreShow=!this.moreShow;
        this.more="Quotes"
        this.text=false;
        this.forYou= false;
        this.trending= false;
        this.staffPicks= false;
        this.moreShow= false;
        this.photo=false;
        this.gif=false;
        this.quotes=true;
        this.chat=false;
        this.audio=false;
        this.video=false;
        this.ask=false;
   },
   /**
     * Function that choose the chat option and write instead of more.
     * get started when clicking on the chat button in the more menu on the explore page.
     * @public This is a public method
     * @param {none}
     */
    chatOnly:function(){
        this.moreShow=!this.moreShow;
        this.more="Chats"
        this.text=false;
        this.forYou= false;
        this.trending= false;
        this.staffPicks= false;
        this.moreShow= false;
        this.photo=false;
        this.gif=false;
        this.quotes=false;
        this.chat=true;
        this.audio=false;
        this.video=false;
        this.ask=false;
   },
   /**
     * Function that choose the audio option and write instead of more.
     * get started when clicking on the audio button in the more menu on the explore page.
     * @public This is a public method
     * @param {none}
     */
   audioOnly:function(){
        this.moreShow=!this.moreShow;
        this.more="Audio"
        this.text=false;
        this.forYou= false;
        this.trending= false;
        this.staffPicks= false;
        this.moreShow= false;
        this.photo=false;
        this.gif=false;
        this.quotes=false;
        this.chat=false;
        this.audio=true;
        this.video=false;
        this.ask=false;
   },
   /**
     * Function that choose the video option and write instead of more.
     * get started when clicking on the video button in the more menu on the explore page.
     * @public This is a public method
     * @param {none}
     */
   videoOnly:function(){
        this.moreShow=!this.moreShow;
        this.more="Videos"
        this.text=false;
        this.forYou= false;
        this.trending= false;
        this.staffPicks= false;
        this.moreShow= false;
        this.photo=false;
        this.gif=false;
        this.quotes=false;
        this.chat=false;
        this.audio=false;
        this.video=true;
        this.ask=false;
   },
   /**
     * Function that choose the ask option and write instead of more.
     * get started when clicking on the ask button in the more menu on the explore page.
     * @public This is a public method
     * @param {none}
     */
   askOnly:function(){
        this.moreShow=!this.moreShow;
        this.more="Asks"
        this.text=false;
        this.forYou= false;
        this.trending= false;
        this.staffPicks= false;
        this.moreShow= false;
        this.photo=false;
        this.gif=false;
        this.quotes=false;
        this.chat=false;
        this.audio=false;
        this.video=false;
        this.ask=true;
   },
   /**
     * Function that choose the for you option.
     * get started when clicking on the foryou button on the explore page.
     * @public This is a public method
     * @param {none}
     */
   foryou:function(){
        this.more="More"
        this.text=false;
        this.forYou= true;
        this.trending= false;
        this.staffPicks= false;
        this.moreShow= false;
        this.photo=false;
        this.gif=false;
        this.quotes=false;
        this.chat=false;
        this.audio=false;
        this.video=false;
        this.ask=false;
   },
   /**
     * Function that choose the trending option.
     * get started when clicking on the trending button on the explore page.
     * @public This is a public method
     * @param {none}
     */
   Trending:function(){
        this.more="More"
        this.text=false;
        this.forYou= false;
        this.trending= true;
        this.staffPicks= false;
        this.moreShow= false;
        this.photo=false;
        this.gif=false;
        this.quotes=false;
        this.chat=false;
        this.audio=false;
        this.video=false;
        this.ask=false;
   },
   /**
     * Function that choose the staffPicks option.
     * get started when clicking on the staff picks button on the explore page.
     * @public This is a public method
     * @param {none}
     */
   staffpicks:function(){
        this.more="More"
        this.text=false;
        this.forYou= false;
        this.trending= false;
        this.staffPicks= true;
        this.moreShow= false;
        this.photo=false;
        this.gif=false;
        this.quotes=false;
        this.chat=false;
        this.audio=false;
        this.video=false;
        this.ask=false;
   }
  },
  data: function () {
    return {
        forYou: false,
        trending: false,
        staffPicks: false,
        moreShow: false,
        more:"More",
        text:false,
        photo:false,
        gif:false,
        quotes:false,
        chat:false,
        audio:false,
        video:false,
        ask:false,
        multi:true
    }
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
.dropdownItem{
    display: block;
    padding: 7px;
    min-width: 150px;
    position: relative;
}
.dropdownContent .dropdownItem :hover{
    background: #888888;
}
.dropdownContent{
    display: block;
    position: absolute;
    left: 35%;
    top: 160px;
    z-index: 1;
    border-radius: 5px;
    box-shadow: 0px 8px 16px 0px  #888888;
}
.center{
    align-items: center;
}
 .barItem{
     padding: 20px 20px 10px 20px;
 }
 .barContainer{
     width: 100%;
     display: flex;
    flex-direction: row;
     text-align: left;   
     border-bottom: 1px solid;  
     margin: 15px 0px;
 }
 .clickable{
     cursor: pointer;
 }
 .grow{
     flex-grow: 1;
 }
</style>
