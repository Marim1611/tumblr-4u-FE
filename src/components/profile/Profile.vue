<template>
  <body>
    <div class="Profile">
      <b-container fluid class="bv-example-row">
        <b-row class="rr">
          <div id="TheHeader">
            <b-navbar class="NavBar" toggleable="sm" type="dark" variant="faded">
              <router-link to="/home">
                <b-navbar-brand class="NavBarBrand bra"
                  ><span class="mb-0 h3">T4U</span></b-navbar-brand
                >
              </router-link>
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-form>
                    <b-form-input
                      size="sm"
                      class="mr-sm-2"
                      placeholder="Search"
                    ></b-form-input>
                  </b-nav-form>
                </b-navbar-nav>
                <div class="NavBarRight">
                  <b-navbar-nav class="icons">
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

                    <router-link class="iconColor" to="">
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

                    <router-link to="">
                      <p class="h3 mb-2">
                        <a href=""
                          ><b-icon class="iconColor" icon="nut-fill"></b-icon
                        ></a>
                      </p>
                    </router-link>
                  </b-navbar-nav>
                </div>
              </b-collapse>
            </b-navbar>
          </div>

          <div class="fill"></div>
          <div class="profileImg">
            <img class="imgshape" :src="this.profileUser.img?this.profileUser.img:avatarPhoto" alt="Avatar" />
          </div>
        </b-row>
        <b-row class="secondHalf">
          <h1 class="headers">{{ this.profileUser.title }}</h1>
        </b-row>
        <b-row> </b-row>
      </b-container>
    </div>
    <br />
    <br />
    <div class="links">
      <router-link class="linksbeuty" to="/posts">POSTS</router-link>
      <router-link class="linksbeuty" to="/likes">LIKES</router-link>
      <router-link class="linksbeuty" to="">FOLLOWING</router-link>
      <router-link class="linksbeuty" to="">ARCHIVE</router-link>
    </div>
  </body>
</template>

<script>
import axios from 'axios'
import Browser from '../../mocks/browser'

export default {
  name: "Profile",

  data() {
    return {
      profileUser:{},
       avatarPhoto:
        "https://assets.tumblr.com/images/default_avatar/octahedron_closed_128.png",
    };
  },
  components: {},
  
  computed:{
     blogId: function () {
      return this.$store.state.user.primaryBlogId;
    },
  },
  async created(){
     
   let myRoute=""
         if (this.isMockServer(Browser().baseURL))
         myRoute= Browser().baseURL+'/blog'
         else
        myRoute= Browser().baseURL+`/blog/view/${this.blogId}`
        console.log(myRoute)
       try {
         await axios.get(myRoute,
          { headers: { 'Authorization':`Bearer ${localStorage.getItem('token')}` } })
          .then(res => {    
            this.profileUser={
           name: res.data.res.data.name,
           title:res.data.res.data.title,
           img:res.data.res.data.img,
          coverImg:res.data.res.data.coverImg,
          followersIds: res.data.res.data.followers}
             
          })
    } catch (e) {
      console.error(e);
    }

  },
  methods:{
    isMockServer(baseUrl){
     
        if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
          return false
          else 
          return true
    },  
  }
};
</script>

<style scoped>
#TheHeader {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 5px 0 5px;
}
.NavBar{
  padding: 0 5px 0 5px;
}
.NavBarRight {
  margin-left: auto;
}
.icons {
  margin:0;
}
.iconColor {
  color: white !important;
  margin-right: 10px;
  margin-left: 10px;
}
.fill {
  height: 200px;
}
.rr {
  background-image: url("../../assets/images/profileImg.png");
}
.profileImg {
  text-align: center;
}
.imgshape {
  border-radius: 50%;
  position: relative;
  top: 60px;
  border-style: solid;
  border-width: 5px;
  border-color: white;
}
.secondHalf {
  text-align: center;
}
.headers {
  font-weight: bold;
  position: relative;
  top: 50px;
}
.links {
  text-align: center;
  margin-top: 20px;
}
.linksbeuty {
  margin-left: 7px;
  margin-right: 7px;
  font-weight: bold;
}
</style>