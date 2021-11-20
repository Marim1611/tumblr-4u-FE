<template>
  <div class="menu-item" v-on:click="isOpen = !isOpen">
     
         <b-icon id="icon"  icon="person-fill" font-scale="2" aria-hidden="true"  :style="{'color': homeTheme[homeThemeIndex].fontColor, 'cursor':'pointer' }"></b-icon> 
   
    <transition name="fade" appear>
        
        <div v-on:click.prevent="toggleDropdown">
          <div class="sub-menu" v-if="isOpen" :style="{'background-color': homeTheme[homeThemeIndex].cardColor}">
        <li id =" header"  >
              <p  id ="pHeader" :style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-style':homeTheme[homeThemeIndex].fontStyle}">Account </p>
                <p  id ="pHeader"  :style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-style':homeTheme[homeThemeIndex].fontStyle}">Logout</p>

        </li>
      <li>
          <v-divider :style="{'color':' homeTheme[homeThemeIndex].fontColor '}" ></v-divider>
      </li>
          
        <div v-for="(item, i) in accountItems" :key="i" class="menu-item"  >
            <li>
        <!-- <router-link :to="item.route"   id= "item">  -->
                <div id='item' v-on:click="changePalete(item.title)">
                  <li >
                   <b-icon id="iconList"  :icon="item.icon" font-scale="1.5" aria-hidden="true" :style="{'color': homeTheme[homeThemeIndex].fontColor, 'display': 'inline-block'}"></b-icon>
              <!-- <v-spacer :style="{'display': 'inline-block' , 'width' :'30px'}"></v-spacer> -->
                <p :style="{'color': homeTheme[homeThemeIndex].fontColor , 'font-style':homeTheme[homeThemeIndex].fontStyle, 'display': 'inline-block', 'margin':'auto 3px' }">{{ item.title }} </p>
                    </li>  
                </div>
       <!-- </router-link> -->
            </li>

          
        </div>
      </div>

        </div>
      
    </transition>
  </div>
</template>

<script>
 
export default {
  name: 'Dropdown',
  props: {
    title: String,
    accountItems: Array

  },
  methods:{
    changePalete: function (title){
        
      if(title == "Change palette")
      {
    console.log( this.isOpen);

        this.$store.commit('changePalette');
      }
     
    },
     toggleDropdown () {
      this.isOpen = !this.isOpen
    },
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
        homeTheme: function(){
            return this.$store.state.homeTheme;
        },
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
 
#pHeader{
  display :inline-block;
  padding: 5px;
}
</style>