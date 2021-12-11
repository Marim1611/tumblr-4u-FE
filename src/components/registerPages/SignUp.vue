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
            <div class="error" v-else-if="emptyEamil">You forgot to enter your email!</div>
            <div class="error" v-else-if="emptypassword">You forgot to enter your password!</div>
            <div class="error" v-else-if="emptyBlog">You forgot to enter your blog Name!</div>
            <div class="error" v-else-if="invalidEmail">That's not a valid email address. Please try again.</div>
            <div class="error" v-else-if="invalidPassword">The password should be between 7 : 15 charachters.</div>
          

            <div class="mb-3">
              <input type="text" class="form-control formInput" id="email" placeholder="Email" v-model="email"  >
            </div>
            <div class="mb-3">
              <input type="password" class="form-control formInput" id="pass" placeholder="Password" v-model="password" >
            </div>
            <div class="mb-3">
              <input type="text" class="form-control formInput " id="blog" placeholder="Blog Name" v-model="blogname" >
               
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
import { mapFields } from 'vuex-map-fields';


/**
 *   A complete SignUp template    
 * @example [none]
 */
export default {
  name: 'SignUp',
  data(){
    return{
      emptyError:'',
      emptyEamil:false,
      emptypassword:false,
      emptyBlog:false,
      cleanEmail:false,
      cleanPassword:false,
      cleanBlogName:false,
      invalidEmail:false,
      invalidPassword:false,
 
    }
  },
  methods:{
    /** 
      * Gets Called When user clicks Sign up button
      * @public
     */
     resetflags(){
      this.emptyEamil=false;
      this.emptypassword=false;
      this.emptyBlog=false;
      this.invalidPassword=false;
      this.invalidEmail=false;

     },

     handel:function()
     {
       if(this.email===''&&this.password===''&&this.blogname==='')
       {
         this.emptyError=true;
       }
       else if(!this.email)
       {
         this.resetflags()
         this.emptyEamil=true;
       }
       else if(!this.password){
         this.resetflags()
         this.emptypassword=true;
       }
       else if(!this.blogname){
         this.resetflags()
         this.emptyBlog=true
       }

       var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if(this.email.match(mailformat))
      {
      this.cleanEmail=true;
      }
      else{
        this.resetflags()
        this.invalidEmail=true;
      }
      var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      if(this.password.match(passw)){ 
        this.cleanPassword=true;
      }
      else{ 
        this.resetflags()
        this.invalidPassword=true;
      }
      this.cleanBlogName=true;
      if(this.cleanEmail&&this.cleanPassword&&this.cleanBlogName){
        this.$router.push('/age');
      }
    
      
    } ,
    
  },
  props: {
    msg: String
  },
  components: {
      'Header':Header ,
      
     
  },
  computed:{
    ...mapFields([
      'user.email',
      'user.password',
      'user.blogname' 
    ])
  }
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