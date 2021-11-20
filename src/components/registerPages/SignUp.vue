<template>
 
<div  class='root imgg'>
   <Header/>
  <b-container class="bv-example-row tt ">

      <b-row>
        <h1 class="Main">Tumblr4U</h1>
        <b-col>
        </b-col>
        
        <b-col lg="3" >
          

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

            <div class="form-group">
            <input 
            type="text" 
            class="form-control formInput" 
            v-bind:class="{ 'is-invalid': blogError }" 
            id="blog" placeholder="Blog Name" v-model="userBlogName">
            <div class="invalid-feedback" id="feedback-3" v-if="errors[2]">
              {{ errors[2].message }}
            </div>
            </div>
            
              <h6 class="privacy">By clicking "sign up", or continuing with the other options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy</h6>
              <button v-if="!cleanEmail" class="btn btn-primary buttonTop" type="submit">Sign up</button>
              <button v-else-if="!cleanPassword" class="btn btn-primary buttonTop" type="submit">Sign up</button>
              <button v-else-if="!cleanBlogName" class="btn btn-primary buttonTop" type="submit">Sign up</button>

           <router-link v-else to='/home' >
            <button  class="btn btn-primary buttonTop" type="submit">Sign up</button>
            </router-link>
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
import {mapFields} from 'vuex-map-fields';
import Header from './WelcomePageHeader.vue'
export default {

  name: 'SignUp',
  data(){

    return{
      
     
      userEmail: '',
      userPassword: '',
      userBlogName: '',
 
      passwordError: false,
			emailError: false,
      blogError:false,
      errors:[],
      cleanEmail:false,
      cleanPassword:false,
      cleanBlogName:false

    }
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
          this.cleanEmail=true;
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
          this.cleanPassword=true;
    }

    //blog
    if(!this.userBlogName)
    {
        this.blogError = true;
        this.errors.push({
            'message': 'you forgot to enter Blg Name.'
        });
    }
    else
    {
      document.getElementById('password').className = "form-control is-valid";
					this.errors.push({
						'message': 'Validated.'
					});
					document.getElementById('feedback-3').className = "valid-feedback";
          this.cleanBlogName=true;
    }
    
      
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
}
.buttonBot{
  text-align:left ;
  margin-bottom:10px ;
  font-size: 1rem;
}
.privacy{
  font-size:0.8rem;
  line-height: 1.5;
}
.d7k{
 height:1.2rem;
}


</style>