<template>
<div  class='root'>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>

        <b-col col lg="3">
          <h1>Tumblr4U</h1>
          <p>{{form.email}}</p>


          <p v-if="InputError" class="DynamiError">{{this.ErrorMsg}}</p>
          <div class="TheForm">
            <b-form  v-if="show">
                <b-form-group
                  id="input-group-1"
                  label-for="input-1"
                >
                  
                  <b-form-input
                  
                    class="formInput"
                    id="input-1"
                    v-model="form.email"
                    placeholder="Email"
                  > </b-form-input>
                </b-form-group > 
                  

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
                  v-model="form.blogName"
                  placeholder="Blog name"
                ></b-form-input>
              </b-form-group>
              <h6>By clicking "sign up", or continuing with the other options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy</h6>
              <b-button v-on:click="Submit($event)" size="lg" class="buttonTop" type="submit" block variant="info">Sign up</b-button>
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
export default {

  name: 'SignUp',
  data(){

    return{
      
     

      show: true,
      ShareData: false,
      InputError:false,
      ErrorMsg:''
    }
  },
  methods:{
     Submit:function(event){

      //IF the fields are empty the counter value will be 0 
      if(!this.form.email)
      {
        this.ErrorMsg='you forgot to enter Email';
         this.InputError=true;
         event.preventDefult();
      }
      else if(!this.form.password)
      {
        this.ErrorMsg='you forgot to enter Password';
        this.InputError=true;
        event.preventDefault();
      }
      else if(!this.form.blogName)
      {
        this.ErrorMsg='you forgot to enter Blog Name';
        this.InputError=true;
        event.preventDefault();
      }
      

      //Email Validation
      var  apos=this.form.email.indexOf('@');
      console.log(apos);
      var dotpos=this.form.email.indexOf('.');
      console.log(dotpos);
      if(apos<1||dotpos-apos<2){
        this.ErrorMsg='The Mail should contain @ and . ';
        this.InputError=true;
        event.preventDefault();
      }
      


      //Validate Password
      var illegalChars = /[\W_]/; // allow only letters and numbers
 
  
      if ((this.form.password.length < 7) || (this.form.password.length > 15)) {
      this.ErrorMsg = "The password is the wrong length. \n";
      this.InputError=true;
      event.preventDefult();  

    }

      else if (illegalChars.test(this.form.password.value)) {
      this.ErrorMsg = "The password contains illegal characters.\n";
      this.InputError=true;
      event.preventDefult();
    } 
    else if ( (this.form.password.search(/[a-zA-Z]+/)==-1) || (this.form.password.search(/[0-9]+/)==-1) ) {
        this.ErrorMsg = "The password must contain at least one numeral.\n";
        this.InputError=true;
        event.preventDefult();
    }
 
  
   
}
      


    
    
    
  },
  computed:{
    user(){
      return this.$store.state.form;

    }
    

   
  },

  

  props: {

    msg: String

  }
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