<template>

  
  <div class='root'
   v-bind:style="{
          'background-image': 'url(' + this.BgImg + ')'}" >
    <Header/>
    <b-container class="bv-example-row ">

      <b-row>
        <h1 class="Main">Tumblr4U</h1>
        <b-col></b-col>

        <b-col col lg="3">
          <form @submit.prevent="handel">
            <div class="error" v-if="emptyError">You do have to fill this stuff out, you know.</div>
            <div class="error" v-else-if="emptyEamil">You forgot to enter your Email!</div>
            <div class="error" v-else-if="emptyPassword">You forgot to enter your password!</div>
            <div class="mb-3">
              <input type="text" class="form-control formInput"  placeholder="Email" v-model="userEmail" >
              
            </div>
            <div class="mb-3">
              <input type="password" class="form-control formInput"  placeholder="Password" v-model="userPassword" >
            </div>
            <h6 class="privacy">By clicking "log in", or continuing with the other options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy</h6>
             <button  class="btn btn-info buttonTop" type="submit">Log in</button>
          </form>
         
            

           <router-link class="pass" to= "/forgotpassword">
           Forgot your Passowrd
          
          </router-link>

   <div class="striped-border"></div>
   <br>
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
import Header from './WelcomePageHeader.vue'
import axios from "axios";
import Browser from "../../mocks/browser";

export default {
  
  data: () => ({
    userPassword: '',
    userEmail: '',
    emptyError:false,
    cleanEmail:false,
    cleanPassword:false,
    emptyEamil:false,
    emptyPassword:false,
			
      errors: [],
       BgImg: 'https://64.media.tumblr.com/099f01a86e5759bd8334bfdd94635ae9/158bebd370292d52-b6/s2048x3072/72df139b72c143cbd31b114c104cbd4748c3091b.jpg',
      BgImgArr:[
        'https://64.media.tumblr.com/efbd27f441e38e06d7c2190d056abe28/7cccea89cd4ff555-db/s2048x3072/4673da8d46acaf5de6099e61e6677bca96de4212.jpg',
        'https://64.media.tumblr.com/1b13f73d9b0a27c02ffea53362a218c0/96c25cb1cd24aabb-e8/s2048x3072/9c3410c5ba67850caf806f4bcdfedc3fe0858966.gifv',
        'https://64.media.tumblr.com/9d271075dec7039f8b5f4cf6c9f33553/5083fe0e81419438-7f/s2048x3072/865e19b20166e34bb757aef1b8121a2f65951a7d.jpg',
        'https://64.media.tumblr.com/a18c8063bf9d095d99f12b51d3dd1eda/57803298a6ae7123-0a/s2048x3072/4cd2dfcda39290bb863362524cf4c5a2744a7153.gifv',
        'https://64.media.tumblr.com/cb5c5b500a09ec8b1b06dc5f38d2a564/ebd30be416be6463-98/s2048x3072/8c3ca34b6787d531dc521884d6cbf6222a2c534e.png',
        'https://64.media.tumblr.com/30091e762bc39bd78af9fcbe085e5aad/931ffa15335e62a0-72/s2048x3072/9bf85a831ddbd10e553a76bbfcd8359fe9790237.png',
        'https://64.media.tumblr.com/1b13f73d9b0a27c02ffea53362a218c0/96c25cb1cd24aabb-e8/s2048x3072/9c3410c5ba67850caf806f4bcdfedc3fe0858966.gifv',
      'https://64.media.tumblr.com/0fc248402402e455676c5c00d23a4a4d/6b09ff75a24d3918-71/s2048x3072/388270a681f884bdd22f665048a5f5c370222815.jpg'
     ]
  }),
   created() {
  this.BgImg=this.randomImg();
  },
  methods: {
    resetFlags(){
      this.emptyPassword=false;
      this.emptyEamil=false;
      this.emptyError=false;
    },
    handel(){
      if(!this.userEmail&&!this.userPassword){
        this.resetFlags()
        this.emptyError=true;
      }
      else if(this.userEmail&&!this.userPassword){
        this.resetFlags()
        this.emptyPassword=true;
      }
      else if(this.userPassword&&!this.userEmail){
        this.resetFlags()
        this.emptyEamil=true;
      }
      else{
        this.cleanEmail=true;
        this.cleanPassword=true;
      }

      if(this.cleanEmail&&this.cleanPassword){

        let email=this.userEmail
        let password=this.userPassword
        this.$store.dispatch('login',{email,password})
        .then(()=>this.$router.push('/home'))
      }

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
    
    randomImg() {
        console.log(   Math.floor(Math.random() * this.BgImgArr.length))
      return this.BgImgArr[
        Math.floor(Math.random() * this.BgImgArr.length)
      ];
    } 
      
    },
  components:{
    Header,
   
  },
};
</script>

<style scoped>
.pass{
  color: white;
}
.Main{
  margin-top:50px;
  font-size: 5rem; 
}
.root{
  font-family: 'Ubuntu', sans-serif;
  color:white;
  background-position: center;
  background-size: cover;
  height: 100%; 
  width:100%;
  line-height: 1.5;
  text-align: center
 
}
 
.striped-border{ 
  border: 2px solid white;
  margin-top:20px;
  width: 115px; 
  margin: auto; 
  
}
 
.formInput
{
  margin: 8px auto 2px auto;
  height: 45px;
  width:90%;
  border-radius:3px;
  
}
.buttonTop{
  margin:20px 0 20px 0 ;
  width: 230px;
  font-weight: bold;
  color: black;
}
.privacy{
  font-size:0.8rem;
  line-height: 1.5;
}
.d7k{
 height:11.8rem;
}
.buttonBot{
  text-align:left ;
  margin-bottom:10px ;
  font-size: 1rem;
  font-weight: bold;
}
.error{
    background: rgba(0,0,0,.25);
    border-radius: 3px;
    color: #fff;
    font-size: .875rem;
    font-weight: 400;
    margin: 15px 0;
    padding: 14px 15px;
}
a{
  color: white !important;
  text-decoration: none;
}
a:hover{
  text-decoration: none !important;
}
</style>
