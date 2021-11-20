<template>
 
<div  class='root imgg'>
   <Header/>
  <b-container class="bv-example-row tt ">

      <b-row>
        <h1 class="Main">Tumblr4U</h1>
        <b-col>
        </b-col>
        
        <b-col lg="3" >
          
<!-- <div> from here </div> -->
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

<!-- <div> to there </div> -->
          
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
            <button  class="btn btn-primary buttonTop" type="submit">Sign up</button>
					</form>
          <div class="striped-border"></div>
          <br>
          <div>
          <b-button size="lg" class="buttonBot"  block variant="light"><b-icon icon="google"></b-icon> Continue with Google</b-button>
      </div>
      <div>
          <b-button size="lg" class="buttonBot" block variant="light"> Continue with Apple</b-button>
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
// =======
//       show: true,
//       ShareData: false,
//       InputError:false,
//       ErrorMsg:''
//     }
//   },
//   methods:{
//     doNoThing: function()
//     {
//      console.log(this.ShareData)

//     },
//      Submit:function(event){

//       //IF the fields are empty the counter value will be 0 
//       if(!this.userEmail)
//       {
//         this.ErrorMsg='you forgot to enter Email';
//          this.InputError=true;
//          event.preventDefult();
//       }
//       else if(!this.userPassword)
//       {
//         this.ErrorMsg='you forgot to enter Password';
//         this.InputError=true;
//         event.preventDefault();
//       }
//       else if(!this.userBlogName)
//       {
//         this.ErrorMsg='you forgot to enter Blog Name';
//         this.InputError=true;
//         event.preventDefault();
//       }
      

//       //Email Validation
//       var  apos=this.userEmail.indexOf('@');
//       console.log(apos);
//       var dotpos=this.userEmail.indexOf('.');
//       console.log(dotpos);
//       if(apos<1||dotpos-apos<2){
//         this.ErrorMsg='The Mail should contain @ and . ';
//         this.InputError=true;
//         event.preventDefault();
//       }
// >>>>>>> main
      
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
    }
    
      
    } 
    },
    
// =======
//       this.ErrorMsg = "The password should be between 7 : 15 charachters.\n";
//       this.InputError=true;
//       event.preventDefult();  

//     }

//       else if (illegalChars.test(this.userPassword.value)) {
//       this.ErrorMsg = "The password contains illegal characters.\n";
//       this.InputError=true;
//       event.preventDefult();
//     } 
//     else if ( (this.userPassword.search(/[a-zA-Z]+/)==-1) || (this.userPassword.search(/[0-9]+/)==-1) ) {
//         this.ErrorMsg = "The password must contain at least one numeral.\n";
//         this.InputError=true;
//         event.preventDefult();
//     }
//    if( !this.InputError)
//    this.ShareData=true;
  
   
// }
      
   
//   },
// >>>>>>> main
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
  background-image: url("../images/Home-Background.jpg");
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