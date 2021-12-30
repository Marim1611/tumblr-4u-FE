<template>
  <div
    class="Heading"
    v-bind:style="{
      'background-image': 'url(' + this.BgImg + ')',
    }"
  >
    <b-container class="bv-example-row">
      <b-row>
        <h1 class="Main">Tumblr4U</h1>
        <b-col></b-col>

        <b-col lg="3">
          <p class="prag">Make stuff, look at stuff,</p>
          <p class="prag">talk about stuff, find your people.</p>
          <div>
            <router-link to="/signUp">
              <b-button size="lg" class="buttonTop" block variant="info"
                >Sign up</b-button
              >
            </router-link>
          </div>
          <div>
            <router-link to="/signIn">
              <b-button size="lg" class="buttonTop" block variant="success"
                >Log in</b-button
              >
            </router-link>
          </div>

          <h6 class="privacy">
            By continuing with the options below, you agree to Tumblr’s Terms of
            Service and have read the Privacy Policy
          </h6>
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
import axios from "axios";
import Browser from "../../mocks/browser";
export default {
  name: "WelcomePage",
  data() {
    return {
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
  props: {
    msg: String,
  },
  components: {},
  created() {
    this.BgImg = this.randomImg();
  },

  methods: {
    randomImg() {
      console.log(Math.floor(Math.random() * this.BgImgArr.length));
      return this.BgImgArr[Math.floor(Math.random() * this.BgImgArr.length)];
    },
 
    isMockServer(baseUrl) {
      if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
        return false;
      else return true;
    },
    async Google() {
      let myRoute = "";
      //""
      /*  */
      if (this.isMockServer(Browser().baseURL))
        myRoute = Browser().baseURL + "/posts";
      else myRoute = Browser().baseURL + `/google`;
      try {
        await axios.get(myRoute).then((res) => {
          console.log(res);
        });
      } catch (e) {
        console.error(e);
      }
 
   async google() {
     /* try {
      const resp = await api().get("google");
     alert(resp.data)
    } catch (e) {
      this.$router.push('https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fgoogle%2Fcallback&scope=profile%20email&client_id=633147263244-qjs8lmqb79ohr4ahtulevhh8qpbn0bu3.apps.googleusercontent.com&flowName=GeneralOAuthFlow')
            alert(e);
    }*/
   
 
    },
  },
};
</script>

<style scoped>
.Main {
  margin-top: 50px;
  font-size: 5rem;
  text-align: center;
}
.privacy {
  font-size: 0.85rem;
  line-height: 1.5;
}
.Heading {
  font-family: "Ubuntu", sans-serif;
  color: white;

  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  line-height: 1;
  text-align: center;
}
#Heading {
  font-family: "Ubuntu", sans-serif;
  margin-top: 20px;
  line-height: 1.5;
  text-align: center;
}
.buttonTop {
  margin-bottom: 20px;
  width: 230px;
  font-weight: bold;
  color: black;
}
.buttonBot {
  text-align: center;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: bold;
}
.striped-border {
  border: 2px solid #d3e4cd;
  width: 115px;
  margin: auto;
}
.d7k {
  height: 8.4rem;
}
</style>
