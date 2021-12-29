<template>
  <div>
  <b-navbar toggleable="lg" type="dark" class="navbar">
    <router-link to="/posts">
      <p class="h2  mb-2"><b-icon class="icon" icon="arrow-left"></b-icon></p>
    </router-link>
    <b-navbar-toggle class="toggle" target="nav-collapse"></b-navbar-toggle>
    <template >
      <div >
        <router-link to="/posts">
      <img class="toggle imgshape" src="https://assets.tumblr.com/images/default_avatar/cube_open_128.png" >
      </router-link>
      
      </div>
      <div class="firstDiv">
        <router-link to="/posts">

       <p class="parg toggle">userName</p>
       </router-link>
      
      </div>
      <b-nav-item-dropdown
      id="my-nav-dropdown"
      text="Post type"
      toggle-class="nav-link-custom  text-white text-decoration-none "
      right
      class="dropDown"
    >
      <b-dropdown-item-button ><b-icon  icon="file-post-fill"></b-icon> All posts</b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button ><b-icon  icon="textarea-t"></b-icon> Text</b-dropdown-item-button>
      <b-dropdown-item-button><b-icon  icon="camera-fill"></b-icon> Photo</b-dropdown-item-button>
      <b-dropdown-item-button><b-icon  icon="chat-quote-fill"></b-icon> Quote</b-dropdown-item-button>
      <b-dropdown-item-button><b-icon  icon="link45deg"></b-icon> Link</b-dropdown-item-button>
      <b-dropdown-item-button><b-icon  icon="chat-left-quote-fill"></b-icon> Chat</b-dropdown-item-button>
      <b-dropdown-item-button><b-icon  icon="music-note-beamed"></b-icon> Audio</b-dropdown-item-button>
      <b-dropdown-item-button><b-icon  icon="camera-video-fill"></b-icon> Video</b-dropdown-item-button>
      <b-dropdown-item-button><b-icon  icon="question-circle-fill"></b-icon> Video</b-dropdown-item-button>
    </b-nav-item-dropdown>
    </template>
      

    <b-collapse id="nav-collapse" is-nav>
     <!-- <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>-->


      <!-- Right aligned nav items -->
        <b-navbar-nav class=" ml-auto icons">
                    <router-link to="/home">
                      <p class="h3 mb-2">
                        <a href=""
                          ><b-icon class="iconColor" icon="house-fill"></b-icon
                        ></a>
                      </p>
                    </router-link>

                    <router-link to="">
                      <p class="h3 mb-2">
                        <a href=""
                          ><b-icon class="iconColor" icon="eye-fill"></b-icon
                        ></a>
                      </p>
                    </router-link>

                    <router-link class="iconColor" to="/">
                      <p class="h3 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          class="bi bi-palette-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                          />
                        </svg>
                      </p>
                    </router-link>

                    <router-link to="/">
                      <p class="h3 mb-2">
                        <a href=""
                          ><b-icon class="iconColor" icon="nut-fill"></b-icon
                        ></a>
                      </p>
                    </router-link>
                  </b-navbar-nav>
      
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: "archive",
  data() {
    return {
      
    };
  },
  components: {},
  methods:{
   
  }
};
</script>

<style scoped>
#dropdown-1{
  color:white  !important;
}
.navbar {
  background-color: #001935;
  padding: 0;
}
.icon {
  fill: white !important;
}
.imgshape {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 30px;
  border-radius: 5px;
}
.parg{
  position: relative;
  top:7px;
  color: white;
  margin-left:5px;
}
.toggle{
  margin-right:5px;
  margin-left: 5px;
}
a:hover{
  text-decoration: none !important;
}
.firstDiv{
  border-right: solid 1px white;
}
.dropDown{
  position: relative;
  bottom: 12px;
  
}
.iconColor {
  color: white !important;
  margin-right: 10px;
  margin-left: 10px;
}



</style>
