<template>
 <div id='parent'>
      <div id="TheHeader">
         <b-navbar class="NavBar" toggleable="sm" type="dark" variant="faded">        
        <b-navbar-brand class="NavBarBrand bra" >T4U</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                </b-nav-form>
            </b-navbar-nav>
            <div class="NavBarRight">
                <b-navbar-nav class="navButtons">
                    
                    
                    <router-link to="/signIn">
                     <b-button size="md" class="navButtons"  variant="success">Log in</b-button>
                     </router-link>

                     <router-link to="/signUp">
                    <b-button size="md" class="navButtons"  variant="info">Sign up</b-button>
                    </router-link>
 
                </b-navbar-nav>
            </div>
            
        </b-collapse>
    </b-navbar>
     <div id="divider" v-bind:style="{'background-color': homeTheme[homeThemeIndex].fontColor}"  ></div>

       
  </div>
  <b-col>
<div id="dashBoard" v-for="(post, i) in dashBoardPosts" :key="i">
            <DashBoard v-bind:post="post" v-bind:maxWidth="postCardWidth"/>
          </div>
  </b-col>
   
            </div>
</template>

<script>
import DashBoard from "../general/ViewPostCard.vue";
/**
 *  Home page that contains dashboard and create post compnents 
 * @example [none]
 */
export default {
  name: "HomePage",
  data(){
    return{
      postCardWidth:"540px"
    }
  },

  components: {
     DashBoard: DashBoard,
  },
  computed: {
    homeTheme: function () {
      return this.$store.state.homeTheme;
    },
    homeThemeIndex: function () {
      return this.$store.state.homeThemeIndex;
    },
     dashBoardPosts: function () {
      return this.$store.state.blogs;
    },
  },
};
</script>

<style scoped>
#dashBoard {
  align-items: center;  
  display: inline;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 20px;
  margin-right:500px ;
  padding-left: 500px;

  /* background-color: red; */
}
#divider{
  width: 100%;
  height: 1px;
}
#parent{
    background-color: #001935; 
}
#TheHeader{
    background-color: #001935;
    background-position: center;
    background-size: cover;
}
.NavBarBrand{
    padding: 0 0 0 20px;
     color:navy;
}
.NavBar{
   
    padding:4.5 4.3  4.5rem;
}
.NavBarBrand{
    font-family: 'Ubuntu', sans-serif;
    font-size: 2.5rem;
    font-weight: bold;
}
.Brand:hover{
    color: hotpink;
}
.NavBarRight{
    margin-left: auto;
}
.navButtons{
    
    margin-right:10px;
    margin-left:10px;
    font-weight: bold;
    color: black;
}
</style>
