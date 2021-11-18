<template>
<div  class='root'>
    <b-container class="bv-example-row">
      <b-row>
        <b-col></b-col>

        <b-col col lg="3">
          <h1>Tumblr4U</h1>
          <p v-if="InputError" class="DynamiError">{{this.ErrorMsg}}</p>
          <div class="TheForm">
            <b-form  v-if="show">
                <b-form-group
                  id="input-group-11"
                  label-for="input-11"
                >
                  <b-form-input
                    class="formInput"
                    id="input-1"
                    v-model="form.email"
                    placeholder="Email"
                  ></b-form-input>
                </b-form-group>
                  

                <b-form-group id="input-group-21" label-for="input-21" >
                  <b-form-input
                      class="formInput"
                      type="password" 
                      id="input-21" 
                      v-model="form.password"
                      aria-describedby="password-help-block" 
                      placeholder="Password">
                  </b-form-input>

                </b-form-group>
                  
              
              <h6>By clicking "log in", or continuing with the other options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy</h6>
              <b-button v-on:click="Submit($event)"  size="lg" class="buttonTop" type="submit" block variant="info">Log in</b-button>
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

  name: 'SignIn',
  data(){

    return{

      form: {
          email: '',
          password: '',
          blogName: '',
      },

      show: true,
      ShareData: false,
      InputError:false,
      ErrorMsg:''
    }
  },
  methods:{
    Submit:function(event){

       //IF any of the fields are empty 
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