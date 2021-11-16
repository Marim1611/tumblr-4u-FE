<template>
  <div class="dropdown">
      <div id="input_container" :style="{'background': homeTheme[homeThemeIndex].cardColor,'border-radius':'4px', 'border-color':  homeTheme[homeThemeIndex].fontColor }">
      <b-icon id="icon" icon="search" font-scale="1.5"  aria-hidden="true" 
       :style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 

       <input v-model.trim="inputValue" v-on:click="isClicked=!isClicked"  class="dropdown-input" type="text" placeholder="Search Tunmblr"
       :style="{'background':  homeTheme[homeThemeIndex].cardColor, 'color': homeTheme[homeThemeIndex].fontColor }" />
     <!-- <img src="https://cdn4.iconfinder.com/data/icons/36-slim-icons/87/calender.png" id="input_img"> -->
</div>
      <div  v-on:click.prevent="toggleDropdown">
<div v-if="!inputValue" v-show="isClicked" class="dropdown-list">
      <div v-for="item in interestsList" :key="item.name" class="dropdown-item">
        <img :src="item.img" class="dropdown-item-flag" />
      <p :style="{  'font-style':homeTheme[homeThemeIndex].fontStyle}">   {{ item.name }}</p>
      
      </div>
    </div >
    <div v-else  class="dropdown-list">
      <div><p :style="{'font-size':'18px', 'margin':'10px'}"> Go to #{{this.inputValue}}</p></div>
        <div   v-for="item in autoComplete" :key="item.name" class="dropdown-item">
         <b-icon   icon="search" font-scale="1"  aria-hidden="true"  :style="{'color': 'black'}" ></b-icon> 
      <p :style="{  'font-style':homeTheme[homeThemeIndex].fontStyle ,'padding':'10px'}">   {{ item }}</p>

      </div>
            <div><p :style="{'font-size':'18px', 'margin':'10px'}">Tumblrs</p></div>
      <div   v-for="item in usersInSearch" :key="item.name" class="dropdown-item">
        <img :src="item.img" class="dropdown-item-flag" />
      <p :style="{  'font-style':homeTheme[homeThemeIndex].fontStyle}">   {{ item.name }}</p>

      </div>
    </div>
     
      </div>
    
  </div>
</template>

<script>
 
export default {
  data: function ()  {
    return {
      inputValue: '',
      isClicked:false,
      interestsList: [
                    {
            name: "crafts",
            img:"https://img.icons8.com/office/50/000000/instagram-new.png"
                    },
                  {
            name: "embroidery",
             img:"https://img.icons8.com/office/50/000000/instagram-new.png"
                    },
                     {
            name: "crochet",
             img:"https://img.icons8.com/office/50/000000/instagram-new.png"
                    },
      ],
      usersInSearch: [
                    {
            name: "Mohamed",
            img:"https://img.icons8.com/office/50/000000/instagram-new.png"
                    },
                  {
            name: "Sara",
             img:"https://img.icons8.com/office/50/000000/instagram-new.png"
                    },
                     {
            name: "Merna",
             img:"https://img.icons8.com/office/50/000000/instagram-new.png"
                    },
      ], 
        autoComplete: [
               'cat','car','sports','hanmade','fashion','pets'
      ], 

    }
  },
  methods: {
    itemVisible (item) {
      //let currentName = item.name.toLowerCase()
      //let currentInput = this.inputValue.toLowerCase()
      return item.includes(this.inputValue)
    },
    toggleDropdown () {
      this.isClicked = !this.isClicked
    },
    close (e) {
      if (!this.$el.contains(e.target)) {
        this.isClicked = false
      }
    },
    
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
  max-width: 24px;
  max-height: 18px;
  margin: auto 12px auto 0px;
}
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