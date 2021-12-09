<template>
 
<div  class='root imgg'>
   <Header/>
  <b-container class="bv-example-row tt ">

      <b-row>
        <h1 class="Main">Tumblr4U</h1>
        <b-col>
        </b-col>
        
        <b-col lg="3" >
           <form @submit.prevent="handel">
            <div class="error" v-if="emptyError">You do have to fill this stuff out, you know.</div>
            <div class="error" v-else-if="emailError">You forgot to enter your email!</div>
            <div class="error" v-else-if="passwordError">You forgot to enter your password!</div>
            <div class="error" v-else-if="blogError">You forgot to enter your blog Name!</div>
            <div class="error" v-else-if="invalidEmail">That's not a valid email address. Please try again.</div>
            <div class="error" v-else-if="invalidPassword">The password should be between 7 : 15 charachters.</div>
            <div class="error" v-else-if="lenghtError">The password should be between 8 : 15 charachters.</div>
            <div class="error" v-else-if="invalidtext">please Fill all inputs.</div>


            <div class="mb-3">
              <input type="text" class="form-control formInput" id="inputemail" placeholder="Email" v-model="userEmail" @blur="validateEmail">
            </div>
            <div class="mb-3">
              <input type="password" class="form-control formInput" id="pass" placeholder="Password" v-model="userPassword" @blur="validatePassword">
            </div>
            <div class="mb-3">
              <input type="text" class="form-control formInput " id="blog" placeholder="Blog Name" v-model="userBlogName" @blur="validateBlogName">
               
            </div>
            <h6 class="privacy">By clicking "log in", or continuing with the other options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy</h6>
              <button  class="btn btn-info buttonTop" type="submit">Sign up</button>

          </form>
          <div class="striped-border"></div>
          <br>
          <div>
          <b-button size="lg" class="buttonBot"  block variant="light"><b-icon icon="google"></b-icon> Continue with Google</b-button>
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

/**
 *   A complete SignUp template    
 * @example [none]
 */
export default {
  name: 'SignUp',
  data(){
    return{
      
     
      userEmail: '',
      userPassword: '',
      userBlogName: '',
      emptyError:'',
      passwordError: false,
			emailError: false,
      blogError:false,
      cleanEmail:false,
      cleanPassword:false,
      cleanBlogName:false,
      invalidEmail:false,
      invalidPassword:false,
      lenghtError:false,
      invalidtext:false,

 
    }
  },
  methods:{
    /** 
      * Gets Called When user clicks Sign up button
      * @public
     */
     validateEmail(){
       if(!this.userEmail&&!this.userPassword&&!this.userBlogName)
       {
         this.emptyError=true;
       }
      //validate Email
      var  apos=this.userEmail.indexOf('@');
      var dotpos=this.userEmail.indexOf('.');
      // email validate
      //IF the fields are empty the counter value will be 0 
      if(apos<1||dotpos-apos<2){
      this.emptyError=false;
      this.invalidEmail = true;  
      }
      else{
        this.invalidEmail=false;
        this.cleanEmail=true;
      }
     },
     validatePassword(){
         //password validation
      if ((this.userPassword.length < 8) || (this.userPassword.length > 15)) {
        this.lenghtError=true;	
     }
     
    else{
          this.lenghtError=false;
          this.cleanPassword=true;
    }

     },
     validateBlogName(){
       if(!this.userBlogName){
        this.blogError = true;
      }else{
        this.cleanBlogName=true;
      }

     },

     handel:function()
     {

      if(this.cleanEmail&&this.cleanPassword&&this.cleanBlogName){
      let email=this.userEmail
      let password=this.userPassword
      let blogname=this.userBlogName
      console.log("signup dipatch function")
      this.$store.dispatch('signup',{email,password,blogname})
      .then(()=>this.$router.push('/home'))
      .catch(err=>console.log(err))
    }
    else{
        this.invalidtext=true;
      }
    
      
    } 
  },
  props: {
    msg: String
  },
  components: {
      'Header':Header ,
     
  },
};
</script>


<style scoped>
.Main{
  margin-top:50px;
  font-size: 5rem; 
}
.root{
  font-family: 'Ubuntu', sans-serif;
  color:white;
  background-image: url("../../assets/images/HomeBackground.jpg");
  background-position: center;
  background-size: cover;
  height: 100%; 
  width:100%;
  
  
  line-height: 1.5;
  text-align: center
}
.formInput
{
  margin: 8px auto 5px auto;
  height: 45px;
  width:90%;
}
.buttonTop{
  margin:20px 0 20px 0 ;
  width: 230px;
  font-weight: bold;
  color: black;
}
.buttonBot{
  text-align:left ;
  margin-bottom:10px ;
  font-size: 1rem;
  font-weight: bold;
}
.privacy{
  font-size:0.8rem;
  line-height: 1.5;
}
.d7k{
 height:4.5rem;
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
</style>