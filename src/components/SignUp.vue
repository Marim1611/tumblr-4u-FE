<template>
<div  class='root'>
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
                    v-model="userEmail"
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
                      v-model="userPassword"
                      aria-describedby="password-help-block" 
                      placeholder="Password">
                  </b-form-input>
                </b-input-group>
                
              <b-input-group size="sm" class="mb-4"> 
                <b-input-group-prepend is-text>
                    <b-icon icon="person-circle"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input
                  v-model="userBlogName"
                  placeholder="Blog name"
                ></b-form-input>


              </b-input-group>
                
                  
              
                
              
              <h6>By clicking "sign up", or continuing with the other options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy</h6>
             
              <b-button v-if="!ShareData"  v-on:click="Submit($event)" size="lg" class="buttonTop" type="submit" block variant="info">Sign up</b-button>
          
             <router-link v-else to="/home"  > 
              <b-button  v-on:click.prevent='doNoThing' size="lg" class="buttonTop" type="submit" block variant="info">Sign up</b-button>
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

  name: 'SignUp',
  data(){

    return{
      
     
      userEmail: '',
      userPassword: '',
      userBlogName: '',
      show: true,
      ShareData: false,
      InputError:false,
      ErrorMsg:''
    }
  },
  methods:{
    doNoThing: function()
    {
     console.log(this.ShareData)

    },
     Submit:function(event){

      //IF the fields are empty the counter value will be 0 
      if(!this.userEmail)
      {
        this.ErrorMsg='you forgot to enter Email';
         this.InputError=true;
         event.preventDefult();
      }
      else if(!this.userPassword)
      {
        this.ErrorMsg='you forgot to enter Password';
        this.InputError=true;
        event.preventDefault();
      }
      else if(!this.userBlogName)
      {
        this.ErrorMsg='you forgot to enter Blog Name';
        this.InputError=true;
        event.preventDefault();
      }
      

      //Email Validation
      var  apos=this.userEmail.indexOf('@');
      console.log(apos);
      var dotpos=this.userEmail.indexOf('.');
      console.log(dotpos);
      if(apos<1||dotpos-apos<2){
        this.ErrorMsg='The Mail should contain @ and . ';
        this.InputError=true;
        event.preventDefault();
      }
      


      //Validate Password
      var illegalChars = /[\W_]/; // allow only letters and numbers
 
  
      if ((this.userPassword.length < 7) || (this.userPassword.length > 15)) {
      this.ErrorMsg = "The password should be between 7 : 15 charachters.\n";
      this.InputError=true;
      event.preventDefult();  

    }

      else if (illegalChars.test(this.userPassword.value)) {
      this.ErrorMsg = "The password contains illegal characters.\n";
      this.InputError=true;
      event.preventDefult();
    } 
    else if ( (this.userPassword.search(/[a-zA-Z]+/)==-1) || (this.userPassword.search(/[0-9]+/)==-1) ) {
        this.ErrorMsg = "The password must contain at least one numeral.\n";
        this.InputError=true;
        event.preventDefult();
    }
   if( !this.InputError)
   this.ShareData=true;
  
   
}
      
   
  },
  computed:{
     ...mapFields([
      'user.email',
      'user.password',
      'user.blogName'

    ]),
    

   
  },

  

  props: {

    msg: String

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