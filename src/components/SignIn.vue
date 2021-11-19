<template>
 
<div  class='root'>
 
<div class='root'>
   <Header/>
 
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>

        <b-col col lg="3">
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
              <b-button v-on:click="Submit($event)"  size="lg" class="buttonTop" type="submit" block variant="info">Log in</b-button>
 
          <div class="TheForm">
            <b-form   v-if="show">
                <b-form-group
                  id="input-group-1"
                  label-for="input-1"
                >
                  <b-form-input
                    class="formInput"
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="Email"
                    required
                  ></b-form-input>
                </b-form-group>
                  

                <b-form-group id="input-group-2" label-for="input-2" >
                  <b-form-input
                      class="formInput"
                      type="password" 
                      id="input-2" 
                      v-model="form.password"
                      aria-describedby="password-help-block" 
                      placeholder="Password">
                  </b-form-input>

                </b-form-group>
                  
              <b-form-group id="input-group-3" label-for="input-3">
                <b-form-input
                  class="formInput"
                  id="input-3"
                  v-model="form.name"
                  placeholder="Blog name"
                  required
                ></b-form-input>
              </b-form-group>
              <h6>By clicking "sign up", or continuing with the other options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy</h6>
            
             <router-link to="/home" > 
              <b-button size="lg" class="buttonTop" type="submit" block variant="info">Sign up</b-button>
           </router-link>
 
          </b-form>

          </div>
          
          <div class="striped-border"></div>
          

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
 
      email: '',
      password: '',
      show: true,
      ShareData: false,
      InputError:false,
      ErrorMsg:''
    }
  },

  computed:{
    ...mapFields([
      'user.email',
      'user.password',

    ]),

  },
  methods:{
    Submit:function(event){

       //IF any of the fields are empty 
      if(!this.email)
      {
        this.ErrorMsg='you forgot to enter Email';
         this.InputError=true;
         event.preventDefult();
      }
      else if(!this.password)
        {
          this.ErrorMsg='you forgot to enter Password';
          this.InputError=true;
          event.preventDefault();
        }

      
      //Email Validation
      var  apos=this.email.indexOf('@');
      console.log(apos);
      var dotpos=this.email.indexOf('.');
      console.log(dotpos);
      if(apos<1||dotpos-apos<2){
        this.ErrorMsg='The Mail should contain @ and . ';
        this.InputError=true;
        event.preventDefault();
      }
      


      //Validate Password
      var illegalChars = /[\W_]/; // allow only letters and numbers
 
  
      if ((this.password.length < 7) || (this.password.length > 15)) {
      this.ErrorMsg = "The password is the wrong length. \n";
      this.InputError=true;
      event.preventDefult();  

      }

      else if (illegalChars.test(this.password.value)) {
      this.ErrorMsg = "The password contains illegal characters.\n";
      this.InputError=true;
      event.preventDefult();
      } 
    else if ( (this.password.search(/[a-zA-Z]+/)==-1) || (this.password.search(/[0-9]+/)==-1) ) {
        this.ErrorMsg = "The password must contain at least one numeral.\n";
        this.InputError=true;
        event.preventDefult();
      }
 
    }
  },

      form: {
          email: '',
          password: '',
          blogName: '',
      },

      show: true
    }
  },

  },
  components: {
'Header':Header 
  },
 
}
  
</script>


<style scoped>
.root{

  font-family: 'Ubuntu', sans-serif;
  margin: 20px 0 20px 0;
  line-height: 1.5;
  text-align: center;
 
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
 
.DynamiError{
  background-color: #FFAB4C;

}
 

</style>