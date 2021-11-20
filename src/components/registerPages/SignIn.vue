<template>
<div class='root '>
   <Header/>
    <b-container class="bv-example-row ">

      <b-row>
        <h1 class="Main">Tumblr4U</h1>
        <b-col></b-col>

        <b-col col lg="3">
          <form @submit.prevent="Validation">
            <div class="form-group">
              <input type="text"
               class="form-control formInput" 
               v-bind:class="{ 'is-invalid': emailError }" 
               id="mail" placeholder="Email" v-model="userEmail">
              <div class="invalid-feedback" id="feedback-1" v-if="errors[0]">
                {{ errors[0].message }}
              </div>
            </div>

            <div class="form-group">
              <input 
              type="password" 
              class="form-control formInput" 
              v-bind:class="{ 'is-invalid': passwordError }" 
              id="password" placeholder="Password" v-model="userPassword">
              <div class="invalid-feedback" id="feedback-2" v-if="errors[1]">
                {{ errors[1].message }}
              </div>
            </div>
            <h6 class="privacy">By clicking "log in", or continuing with the other options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy</h6>
               
            <button  class="btn btn-primary buttonBot" type="submit">Log in</button>
            
					</form>
          <a class="pass" href="#">ForgotPassowrd</a>
   <div class="striped-border"></div>
   <br>
   <div>
          <b-button size="lg" class="buttonBot"  block variant="light"><b-icon icon="google"></b-icon> Continue with Google</b-button>
      </div>
      <div>
          <b-button size="lg" class="buttonBot" block variant="light"> Continue with Apple</b-button>
      </div>
  
   <div class="d7k"></div>
<!-- =======
          <h1>Tumblr4U</h1>
 
          <p v-if="InputError" class="DynamiError">{{this.ErrorMsg}}</p>
          <div class="TheForm">
            <b-form  v-if="show">
              <b-input-group size="sm" class="mb-2">
                <b-input-group-prepend is-text>
                  <b-icon  icon="envelope"></b-icon>
                </b-input-group-prepend>
                <b-form-input 
                    id="input-1"
                    v-model="email"
                    placeholder="Email">
                </b-form-input>
              </b-input-group>
                <b-input-group size="sm" class="mb-2"> 
                  <b-input-group-prepend is-text>
                    <b-icon icon="shield-lock"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input
                      type="password" 
                      id="input-2" 
                      v-model="password"
                      aria-describedby="password-help-block" 
                      placeholder="Password">
                  </b-form-input>
                </b-input-group>
                  
              
              <h6>By clicking "log in", or continuing with the other options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy</h6>
               <router-link to="/home" > 
              <b-button v-on:click="Submit($event)"  size="lg" class="buttonTop" type="submit" block variant="info">Log in</b-button>
   </router-link>
                 
 
          </b-form>

          </div>
          
          <div class="striped-border"></div>
          

>>>>>>> main -->
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
</div>

</template>

<script>

import {mapFields} from 'vuex-map-fields';
import Header from './WelcomePageHeader.vue'
  
export default {

  name: 'SignIn',
  data(){

    return{
      
      userEmail: '',
      userPassword:'',
     

      passwordError: false,
			emailError: false,
			

      errors: [],
 

    }
  },

  computed:{
    ...mapFields([
      'user.email',
      'user.password',

    ]),

  },
  methods:{
    Validation:function(){
      this.errors = [];
      var  apos=this.userEmail.indexOf('@');
      var dotpos=this.userEmail.indexOf('.');
      // email validate
      //IF the fields are empty the counter value will be 0 
    if(!this.userEmail)
    {
        this.emailError = true;
        this.errors.push({
            'message': 'you forgot to enter Email.'
        });
    }
      
    else if(apos<1||dotpos-apos<2){
      this.emailError = true;
        this.errors.push({
        'message': 'The Mail should contain @ and .'
        });
    }
				
		else {
					document.getElementById('mail').className = "form-control is-valid";
					this.errors.push({
						'message': 'Validated.'
					});
					document.getElementById('feedback-1').className = "valid-feedback";
				}

        //password validation
      var illegalChars = /[\W_]/; // allow only letters and numbers

  
      if ((this.userPassword.length < 7) || (this.userPassword.length > 15)) {
       this.passwordError = true;
					this.errors.push({
						'message': 'The password should be between 7 : 15 charachters.'
					});
    }
      else if (illegalChars.test(this.userPassword.value)) {
        this.passwordError = true;
					this.errors.push({
						'message': 'The password contains illegal characters.'
					});
    } 
    else if ( (this.userPassword.search(/[a-zA-Z]+/)==-1) || (this.userPassword.search(/[0-9]+/)==-1) ) {
        this.passwordError = true;
					this.errors.push({
						'message': 'The password contains illegal characters.'
					});
    }
    else{
      document.getElementById('password').className = "form-control is-valid";
					this.errors.push({
						'message': 'Validated.'
					});
					document.getElementById('feedback-2').className = "valid-feedback";
    }
    },
      },
components: {
      'Header':Header 
  },
 
}
  
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
  margin: 5px auto 5px auto;
  height: 45px;
  width:90%;
}
.buttonTop{
  margin:20px 0 20px 0 ;
  width: 230px;
}

.privacy{
  font-size:0.8rem;
  line-height: 1.5;
}
.d7k{
 height:5rem;
}

.buttonBot{
  text-align:left ;
  margin-bottom:10px ;
  font-size: 1rem;
}

</style>