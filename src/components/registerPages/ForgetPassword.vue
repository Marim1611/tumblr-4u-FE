<template>
  <body id="bc"> 
    <Header/>
    
    <b-container class="bv-example-row ">
      <div class="fillempty1"></div>
      <h1 class="Main">Tumblr4U</h1>

      <b-row>
        
        <b-col></b-col>

        <b-col col lg="3">
          <div class="error" v-if="emptyEmail">Please enter your email address.</div>
          <div class="error" v-else-if="invalidEmail">There was an error submitting your request.</div>

          <form v-if="!success" @submit.prevent="handel">
          <input type="text" class="form-control"   placeholder="Email" v-model="Email">
          <b-row>
            <b-col >
              <router-link to="/signIn">
              <button  class="btn btn-dark ss  ">Cancel</button>
              </router-link>
            </b-col>
            <b-col>
              <button  class="btn btn-danger   bb  " type="submit">Reset password</button>
            </b-col>
          </b-row>
          
          
          </form>
          <div v-if="success" class="suc">
            <p>We've sent you an email with instructions
               to reset your password.</p>
            
            <p>Please make sure it didn't wind up in
            your Junk Mail. If you aren't receiving
            our password reset emails, see our help documents.</p>
            
          </div>
          <router-link to="/">
           <button v-if="success" class="btn btn-dark btn-lg btn-block bb bbb " type="submit">Done</button>
           </router-link>

          
          <p v-if="!success" class="pp">This site is protected by reCAPTCHA and the Google Terms of Service and Privacy Policy apply.</p>


        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
    <div class="fillempty2"></div>
  </body>
</template>
     



<script>
 
export default {
  name: 'forgotPassword',
  data(){
    return{
      Email:'',
      emptyEmail:false,
      invalidEmail:false,
      cleanEmail:false,
      success:false,

    }
  },
  components: {

     
  },
  methods:{
    resetflags(){
      this.emptyEmail=false;
      this.invalidEmail=false;
    },
    handel(){
      var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if(!this.Email){
        this.resetflags();
        this.emptyEmail=true;
      }
      else if(this.Email.match(mailformat)){
        this.resetflags();
        this.cleanEmail=true;
      }
      else{
        this.resetflags();
        this.invalidEmail=true;
      }
      if(this.cleanEmail){
        let email=this.Email
        this.$store.dispatch('forgotpassword',{email})
        .then(()=>this.success=true)
        .catch(err => console.log(err))

      }
        

      }

    },
    
  }
  
</script>


<style scoped>
.cont{
  text-align: center;
}
#bc{
  font-family: 'Ubuntu', sans-serif;
  color: #ffff;
  background-color: #001935;
  width: 100%;
  min-height: 100%; 
  width: 100%;

}
.Main{
  text-align: center;
  margin-top:50px;
  font-size: 5rem; 
}
.bb{
  margin-top:7px;
  width:100%;
  text-align: center;
  
}
.pp{
  margin-top:5px;
  text-align: center;
  font-weight: bold;

}
.fillempty1{
  height:150px;
}
.fillempty2{
  height:250px
}
.ss{
  margin-top:7px;
   text-align: center;
   width:80%

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
.suc{
  background: rgba(0,0,0,.25);
    border-radius: 3px;
    color: #fff;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.2;
    text-align: center;
    
    padding: 14px 15px;
}
.bbb{
  background-color:rgba(0,0,0,.25);
}


</style>
