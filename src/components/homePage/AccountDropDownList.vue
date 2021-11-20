<template>
  <div class="menu-item" id="dropDown" v-on:click="isOpen = !isOpen">
     
         <b-icon id="icon"  icon="person-fill" font-scale="2" aria-hidden="true"  :style="{'color': homeTheme[homeThemeIndex].fontColor, 'cursor':'pointer' }"></b-icon> 
   
    <transition name="fade" appear>
        <div v-on:click.prevent="toggleDropdown">
          <div id ="content" class="sub-menu" v-if="isOpen" :style="{'background-color': homeTheme[homeThemeIndex].cardColor}">
        <li id =" header"  >
              <p  id ="pHeader" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">Account </p>
                <p  id ="pHeader"  v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle}">Logout</p>

        </li>
       <li>
                    <div id="divider" v-bind:style="{'background-color': homeTheme[homeThemeIndex].fontColor}"  ></div>

       </li>
          
        <div v-for="(item, i) in accountItems" :key="i" class="menu-item"  >
            <li>
        <!-- <router-link :to="item.route"   id= "item">  -->
                <div id='item'  v-on:click="changePalete(item.title)">
                  <li >
                   <b-icon id="iconList"  :icon="item.icon" font-scale="1.5" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor, 'display': 'inline-block'}"></b-icon>
              <!-- <v-spacer :style="{'display': 'inline-block' , 'width' :'30px'}"></v-spacer> -->
                <p v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-family':homeTheme[homeThemeIndex].fontStyle, 'display': 'inline-block', 'margin':'auto 3px' }">{{ item.title }} </p>
                    </li>  
                </div>
       <!-- </router-link> -->
            </li>
            

    
        </div>
        <li>
          <router-link to="/new/blog"> 
          <div v-bind:style="{'margin':'7px'}">
<v-btn   elevation="2" >new blog</v-btn>
          </div>
     
</router-link>
            </li>
      </div>

        </div>
      
    </transition>
  </div>
</template>

<script>
/**
 * @displayName AccountDropdownList is a drop down list appears when user clicks on account icon in the nav bar it shows list of options user will be able to click on all of them
 * @example [none]
 */
export default {
  name: 'Dropdown',
  props: {
    title: String,
    accountItems: Array

  },
  methods:{
     /**
     * Function fire event in the store to change colortheme of the website - it switches between 6 themes -when user click on the brush icon in account drop down list in the nav bar
     * @public This is a public method
     * @param {none}
     */
    changePalete(title){
      if(title == "Change palette")
        this.$store.commit('changePalette');
    },
    /**
     * Function to control openning the account dropdown list
     * @public This is a public method
     * @param {none}
     */
     toggleDropdown () {
      this.isOpen = !this.isOpen
    },
    /**
     * Function to control closing the account dropdown list if user clicks outside it
     * @public This is a public method
     * @param {none}
     */
    close (e) {
      if (!this.$el.contains(e.target)) {
        this.isOpen = false
      }
    }
      
    },
  data: function () {
    return {
      isOpen: false
    }
  },
  computed: {
     /**
     * Function to get the home page color theme array from the store
     * @public This is a public method
     * @param {none}
     */
        homeTheme: function(){
            return this.$store.state.homeTheme;
        },
         /**
     * Function to get the home page colortheme Index from the store
     * @public This is a public method
     * @param {none}
     */
        homeThemeIndex: function(){
            return this.$store.state.homeThemeIndex;
        },
  },
   mounted () {
    document.addEventListener('click', this.close)
  },
  beforeDestroy () {
    document.removeEventListener('click',this.close)
  }
}
</script>

<style scoped>
.sub-menu
{
   overflow-x: auto;
}
#divider{
  width: 100%;
  height: 1px;
}
nav .menu-item .sub-menu {
  position: absolute;
   
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  border-radius: 5px;
  
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
 
 #iconList{
     
     float: left;
     /* display :inline-block; */
     
 }
 li {
   display: felx;
  position:relative;
  padding: 1px;
  list-style: none; 
}
/* #grayDiv{
    display: flex;
    height: 5px;
    background-color: rgb(204, 199, 199);
    color: gray;
   margin: 2rem;
  padding: 2rem 2rem;
  text-align: center;
} */
 
#item{
  padding: 5px;
  margin:5px;
  width: 200px;
} 
#item:hover {
  background: #464747;
 
}
#dropDown{
   position: relative;
  display: inline-block;
}
#pHeader{
  display :inline-block;
  padding: 5px;
}
#content{
    
  position: absolute;
    
  z-index: 1;
}
</style>