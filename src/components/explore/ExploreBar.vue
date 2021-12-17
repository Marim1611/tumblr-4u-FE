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
       
       
        <h5 class="clickable barItem"><b-icon icon="grid1x2-fill" /></h5>
        <h5 class="clickable barItem"><b-icon icon="view-list" /></h5>
    </div>
</template>

<script>
 
 
 
export default {
  name: "ExploreBar",
  components: {
   
  },
  methods:{
   moreDropdown:function(){
       this.moreShow=!this.moreShow;
   },
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
        ask:false
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
