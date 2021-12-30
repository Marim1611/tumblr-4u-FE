<template>
  <div
    class="root imgg"
    v-bind:style="{
      'background-image': 'url(' + this.BgImg + ')',
    }"
  >
    <Header />
    <b-container class="bv-example-row tt">
      <b-row>
        <h1 class="Main">Tumblr4U</h1>
        <b-col> </b-col>

        <b-col lg="3">
          <form @submit.prevent="handel">
            <div class="error" v-if="emptyError">
              You do have to fill this stuff out, you know.
            </div>
            <div class="error" v-else-if="emptyEamil">
              You forgot to enter your email!
            </div>
            <div class="error" v-else-if="emptypassword">
              You forgot to enter your password!
            </div>
            <div class="error" v-else-if="emptyBlog">
              You forgot to enter your blog Name!
            </div>
            <div class="error" v-else-if="invalidEmail">
              That's not a valid email address. Please try again.
            </div>
            <div class="error" v-else-if="lengthError">
              The password should be minimum 8 characters length
            </div>
            <div class="error" v-else-if="lowerCase">
              Password should contain a lower case letter
            </div>
            <div class="error" v-else-if="upperCase">
              Password should contain an upper case letter
            </div>
            <div class="error" v-else-if="number">
              Password should contain at least one number
            </div>

            <div class="mb-3">
              <input
                type="text"
                class="form-control formInput"
                id="email"
                placeholder="Email"
                v-model="email"
                @focus="resetflags"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control formInput"
                id="pass"
                placeholder="Password"
                v-model="password"
                @focus="resetflags"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control formInput"
                id="blog"
                placeholder="Blog Name"
                v-model="blogname"
                @focus="resetflags"
              />
            </div>
            <h6 class="privacy">
              By clicking "log in", or continuing with the other options below,
              you agree to Tumblr’s Terms of Service and have read the Privacy
              Policy
            </h6>
            <button class="btn btn-info buttonTop" type="submit">
              Sign up
            </button>
          </form>
          <div class="striped-border"></div>
          <br />
          <div>
            <b-button
              @click="Google"
              size="lg"
              class="buttonBot"
              block
              variant="light"
              ><b-icon icon="google"></b-icon> Continue with Google</b-button
            >
          </div>
          <div class="d7k"></div>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./WelcomePageHeader.vue";
import { mapFields } from "vuex-map-fields";
import Browser from "./src/mocks/browser";
import axios from "axios";
/**
 *   A complete SignUp template
 * @example [none]
 */
export default {
  name: "SignUp",
  data() {
    return {
      emptyError: "",
      emptyEamil: false,
      emptypassword: false,
      emptyBlog: false,
      cleanEmail: false,
      cleanPassword: false,
      cleanBlogName: false,
      invalidEmail: false,
      lengthError: false,
      upperCase: false,
      lowerCase: false,
      number: false,
      BgImg:
        "https://64.media.tumblr.com/099f01a86e5759bd8334bfdd94635ae9/158bebd370292d52-b6/s2048x3072/72df139b72c143cbd31b114c104cbd4748c3091b.jpg",
      BgImgArr: [
        "https://64.media.tumblr.com/efbd27f441e38e06d7c2190d056abe28/7cccea89cd4ff555-db/s2048x3072/4673da8d46acaf5de6099e61e6677bca96de4212.jpg",
        "https://64.media.tumblr.com/1b13f73d9b0a27c02ffea53362a218c0/96c25cb1cd24aabb-e8/s2048x3072/9c3410c5ba67850caf806f4bcdfedc3fe0858966.gifv",
        "https://64.media.tumblr.com/9d271075dec7039f8b5f4cf6c9f33553/5083fe0e81419438-7f/s2048x3072/865e19b20166e34bb757aef1b8121a2f65951a7d.jpg",
        "https://64.media.tumblr.com/a18c8063bf9d095d99f12b51d3dd1eda/57803298a6ae7123-0a/s2048x3072/4cd2dfcda39290bb863362524cf4c5a2744a7153.gifv",
        "https://64.media.tumblr.com/cb5c5b500a09ec8b1b06dc5f38d2a564/ebd30be416be6463-98/s2048x3072/8c3ca34b6787d531dc521884d6cbf6222a2c534e.png",
        "https://64.media.tumblr.com/30091e762bc39bd78af9fcbe085e5aad/931ffa15335e62a0-72/s2048x3072/9bf85a831ddbd10e553a76bbfcd8359fe9790237.png",
        "https://64.media.tumblr.com/1b13f73d9b0a27c02ffea53362a218c0/96c25cb1cd24aabb-e8/s2048x3072/9c3410c5ba67850caf806f4bcdfedc3fe0858966.gifv",
        "https://64.media.tumblr.com/0fc248402402e455676c5c00d23a4a4d/6b09ff75a24d3918-71/s2048x3072/388270a681f884bdd22f665048a5f5c370222815.jpg",
      ],
    };
  },
  created() {
    this.BgImg = this.randomImg();
  },

  methods: {
    /**
     * Gets Called When user clicks Sign up button
     * @public
     */
    resetflags() {
      this.emptyEamil = false;
      this.emptypassword = false;
      this.emptyBlog = false;
      this.invalidEmail = false;
      this.emptyError = false;
      this.lengthError = false;
      this.lowerCase = false;
      this.upperCase = false;
    },

    handel: function () {
      if (!this.email && !this.password && !this.blogname) {
        this.resetflags();
        this.emptyError = true;
      } else if (
        !this.email &&
        (this.password || !this.password) &&
        (this.blogname || !this.blogname)
      ) {
        this.resetflags();
        this.emptyEamil = true;
      } else if (
        !this.password &&
        (this.blogname || !this.blogname) &&
        (this.email || !this.email)
      ) {
        this.resetflags();
        this.emptypassword = true;
      } else if (
        !this.blogname &&
        (this.email || !this.email) &&
        (this.password || !this.password)
      ) {
        this.resetflags();
        this.emptyBlog = true;
      }

      var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (this.email && this.blogname && this.password) {
        if (this.email.match(mailformat)) {
          this.cleanEmail = true;
        } else {
          this.resetflags();
          this.invalidEmail = true;
        }
      }
      //validate lower Case
      var lowerCaseLetters = /[a-z]/g;
      //validate upper Case
      var upperCaseLetters = /[A-Z]/g;
      // Validate numbers
      var numbers = /[0-9]/g;
      if (this.email && this.blogname && this.password && this.cleanEmail) {
        if (this.password.length < 8) {
          this.resetflags();
          this.lengthError = true;
        } else if (!this.password.match(lowerCaseLetters)) {
          this.resetflags();
          this.lowerCase = true;
        } else if (!this.password.match(upperCaseLetters)) {
          this.resetflags();
          this.upperCase = true;
        } else if (!this.password.match(numbers)) {
          this.resetflags();
          this.number = true;
        } else {
          this.cleanPassword = true;
        }
      }

      if (this.blogname) {
        this.cleanBlogName = true;
      }

      if (this.cleanEmail && this.cleanPassword && this.cleanBlogName) {
        this.$router.push("/age");
      }
    },
    randomImg() {
      console.log(Math.floor(Math.random() * this.BgImgArr.length));
      return this.BgImgArr[Math.floor(Math.random() * this.BgImgArr.length)];
    },
     async Google() {
      let myRoute = "";
      //""
      const googleuser = await this.$gAuth.signIn()
      console.log(googleuser.yu.nv)
      //let email = googleuser.yu.nv;
      /*  */
      myRoute = Browser().baseURL + `/androidSignUpWithGoogle`;
       try {
         await axios.post(myRoute,{
           "googleToken": googleuser.vc.id_token
         }).then((res) => {
           localStorage.setItem('token',res.data.res.token)
           this.$router.push('/home')
         });
      } catch (e) {
        console.error(e);
       }
    },
  },
  props: {
    msg: String,
  },
  components: {
    Header: Header,
  },
  computed: {
    ...mapFields(["user.email", "user.password", "user.blogname"]),
  },
};
</script>

<style scoped>
.Main {
  margin-top: 50px;
  font-size: 5rem;
}
.root {
  font-family: "Ubuntu", sans-serif;
  color: white;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;

  line-height: 1.5;
  text-align: center;
}
.formInput {
  margin: 8px auto 5px auto;
  height: 45px;
  width: 90%;
}
.buttonTop {
  margin: 20px 0 20px 0;
  width: 230px;
  font-weight: bold;
  color: black;
}
.buttonBot {
  text-align: left;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: bold;
}
.privacy {
  font-size: 0.8rem;
  line-height: 1.5;
}
.d7k {
  height: 9.8rem;
}
.error {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 400;
  margin: 15px 0;
  padding: 14px 15px;
}
</style>