<template>
<div class='root '>
   <Header/>
    <b-container class="bv-example-row ">

      <b-row>
        <h1 class="Main">Tumblr4U</h1>
        <b-col></b-col>

        <b-col col lg="3">
          <form @submit.prevent="handel">
            <div class="error" v-if="emptyError">You do have to fill this stuff out, you know.</div>
            <div class="error" v-else-if="emailError">You forgot to enter your email!</div>
            <div class="error" v-else-if="passwordError">You forgot to enter your password!</div>
            <div class="mb-3">
              <input type="text" class="form-control " id="exampleInputEmail1" placeholder="Email" v-model="userEmail">
              
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="userPassword">
            </div>
            <h6 class="privacy">By clicking "log in", or continuing with the other options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy</h6>
             <button  class="btn btn-info buttonTop" type="submit">Log in</button>
          </form>
         
            

           
          <a class="pass" href="#">ForgotPassowrd</a>
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

export default {
  
  data: () => ({
    userPassword: '',
    userEmail: '',
    emptyError:false,
    passwordError: false,
		emailError: false,
    cleanEmail:false,
    cleanPassword:false,
			
      errors: [],
  }),
  
  methods: {
    handel(){
        this.errors = [];
      if(!this.userEmail&&!this.userPassword)
      {
          this.emptyError = true;
      }
      else if(!this.userEmail&&this.userPassword)
      {
        this.emptyError=false;
        this.emailError=true;
      }
      else if(!this.userPassword&&this.userEmail)
      {
        this.emptyError=false;
        this.passwordError=true;
      }
      else{
        let email=this.userEmail
        let password=this.userPassword
        this.$store.dispatch('login',{email,password})
        .then(()=>this.$router.push('/home'))
        .catch(err => console.log(err))
      }

    }, 
      
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
  background-image: url("../../assets/images/HomeBackground.jpg");
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
.privacy{
  font-size:0.8rem;
  line-height: 1.5;
}
.d7k{
 height:6rem;
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
</style>
