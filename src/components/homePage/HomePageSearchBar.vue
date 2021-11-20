<template>
<div>
  <div class="dropdown">
      <div id="input_container" v-bind:style="{'background': homeTheme[homeThemeIndex].cardColor,'border-radius':'4px', 'border-color':  homeTheme[homeThemeIndex].fontColor }">
      <b-icon id="icon" icon="search" font-scale="1.5"  aria-hidden="true" 
       v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 

       <input v-model.trim="inputValue" v-on:click="isClicked=!isClicked"  class="dropdown-input" type="text" placeholder="Search Tunmblr"
       v-bind:style="{'background':  homeTheme[homeThemeIndex].cardColor, 'color': homeTheme[homeThemeIndex].fontColor }" />
 </div>
  <!-- intersts  -->
      <div  v-on:click.prevent="toggleDropdown">
<div v-if="!inputValue" v-show="isClicked" class="dropdown-list">
      <div v-for="item in interestsList" v-bind:key="item.name" class="dropdown-item">
        <img :src="item.img" class="dropdown-item-flag" />
      <p v-bind:style="{  'font-style':homeTheme[homeThemeIndex].fontStyle}">   {{ item.name }}</p>
      
      </div>
       
    </div >
     <!-- auto complete  -->
    <div v-else  class="dropdown-list">
      <div><p v-bind:style="{'font-size':'18px', 'margin':'10px'}"> Go to #{{this.inputValue}}</p></div>
        <div  v-show="itemVisible(item)" v-for="item in autoComplete" v-bind:key="item.name" class="dropdown-item">
         <b-icon   icon="search" font-scale="1"  aria-hidden="true"  v-bind:style="{'color': 'black'}" ></b-icon> 
      <p v-bind:style="{  'font-style':homeTheme[homeThemeIndex].fontStyle ,'padding':'10px'}">   {{ item }}</p>

      </div>
        <!--  Tumblrs  -->
            <div><p :style="{'font-size':'18px', 'margin':'10px'}">Tumblrs</p></div>
      <div    v-on:click="openDrawer( item.name,item.img, item.coverImg)" v-show="itemVisible(item.name)" v-for="item in usersInSearch" v-bind:key="item.name" class="dropdown-item">
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
      <p v-bind:style="{  'font-style':homeTheme[homeThemeIndex].fontStyle}">   {{ item.name }}</p>

      </div>
    </div>
     
      </div>
    
  </div>
    <TumblrDrawer v-if="showBlogDrawer" v-bind:tumblrsObj="tumblrsObj"></TumblrDrawer>
  </div>

</template>

<script>
import TumblrDrawer from './TumblrsDrawer.vue'
//import Avatar from 'vue-avatar' 
import Vue from 'vue'
export default {
  data: function ()  {
    return {
      showBlogDrawer:false,
      inputValue: '',
      isClicked:false,
      tumblrsObj:{name: '',avatar:'',coverImg:''},
      interestsList: [
                    {
            name: "crafts",
            img:"https://64.media.tumblr.com/6eb8d7c15856ffa76b0a6b5bdb35f2de/5cf38a736b98badf-f9/s640x960/0762f14581a4a9bf7599fc7899b35cd909878bde.jpg"
                    },
                  {
            name: "embroidery",
             img:"https://64.media.tumblr.com/497a6f202f642d914081723f42b3688c/tumblr_pocj2z2m6F1sst4ed_1280.jpg"
                    },
                     {
            name: "crochet",
             img:"https://64.media.tumblr.com/b9a38eb82f59f226df54f746e9ce1193/03dd693220f8205b-41/s640x960/54f78a4ffa63f468c6648ac14f0921b3c9fccb9a.jpg"
                    },
      ],
      usersInSearch: [
                    {
            name: "Moatasem",
            img:"https://pe-images.s3.amazonaws.com/basics/cc/image-size-resolution/resize-images-for-print/image-cropped-8x10.jpg",
            coverImg:"https://64.media.tumblr.com/b4d4c2744e85a37c68d2b719d8d41317/57f5781bde74b4d8-0e/s640x960/777e2d9c3327ec8b2cab9fc7cf60e0ee3a5f24a0.jpg"
                    },
                  {
            name: "Sara",
             img:"https://boostlikes-bc85.kxcdn.com/blog/wp-content/uploads/2018/04/Short-URL-Illustration.jpg"
                  ,coverImg:'https://64.media.tumblr.com/511d1c6162b006d519670ec642d5bae9/98396c886dff04ae-83/s640x960/2c89deda482294956a9726a993138b9d430ca2d6.jpg'
                  },
                     {
            name: "Merna",
             img:"http://i.imgur.com/NeRJgd9.png"
                   ,coverImg:"https://64.media.tumblr.com/511d1c6162b006d519670ec642d5bae9/98396c886dff04ae-83/s640x960/2c89deda482294956a9726a993138b9d430ca2d6.jpg"
                   },
      ], 
        autoComplete: [
               'cat','car','sports','hanmade','fashion','pets','friends','tarvel','Art'
      ], 

    }
  },
  components:{
     'TumblrDrawer':TumblrDrawer,
    //  'Avatar':Avatar
  },
  methods: {
    itemVisible (item) {
      let currentName = item.toLowerCase()
      let currentInput = this.inputValue.toLowerCase()
      return currentName.includes(currentInput)
    },
    
    toggleDropdown () {
      this.isClicked = !this.isClicked
    },
    close (e) {
      if (!this.$el.contains(e.target)) {
        this.isClicked = false
      }
    },
    openDrawer(name,avatar,cover){
      this.showBlogDrawer=!this.showBlogDrawer;
      Vue.set(this.tumblrsObj, 'name',name);
       Vue.set(this.tumblrsObj, 'coverImg',cover);
      Vue.set(this.tumblrsObj, 'avatar',avatar);
    }
    
  },
   computed: {
        homeTheme: function(){
            return this.$store.state.homeTheme;
        },
        homeThemeIndex : function(){
            return this.$store.state.homeThemeIndex;
        },
  },
  props:{
        // interestsList: Array
  } ,
  mounted () {
    document.addEventListener('click', this.close)
  },
  beforeDestroy () {
    document.removeEventListener('click',this.close)
  }
}
</script>

<style scoped>
.dropdown{
  position: relative;
  /* width: 100%;
  max-width: 600px; */
  /* display: inline; */
  margin: 0 auto;
  /* background-color: red; */
}
.dropdown-input, .dropdown-selected{
  width: 100%;
  padding: 10px 10px;
 border-radius:8px ;
  line-height: 1.5em;
  outline: none;
   
}
 
.dropdown-input:focus, .dropdown-selected:hover{
  background: #fff;
  border-color: #e2e8f0;
  
}
 
.dropdown-input::placeholder{
  opacity: 0.7;
}
.dropdown-selected{
  font-weight: bold;
  cursor: pointer;
}
.dropdown-list{
      /* overflow-y: auto; */
  z-index:3;
  transform: translate3d(0px, 20px, 0px);
  position: absolute;
  width: 100%;
  max-height: 500px;
  margin-top: 4px;
 overflow-y: scroll;
  background: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
.dropdown-item{
  display: flex;
   overflow-y: scroll;
  width: 100%;
  padding: 11px 16px;
  cursor: pointer;
}
.dropdown-item:hover{
  background: #edf2f7;
}
.dropdown-item-flag{
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
    position:relative;
    padding:0 0 0 20px;
    margin:0 20px;
     border: 2px solid wheat;
     
    direction: rtl;
    width: 500px;
}

#icon {
    position:absolute;
    bottom:2px;
    left:5px;
    width:24px;
    height:24px;
    color:black;
}

</style>