<template>
    <div id="Heading">
     <Header/>
      <b-container class="bv-example-row">
        
  <b-row>
    <b-col></b-col>

    <b-col>
      <h1>Temblr4U</h1>
      <p>Make stuff, look at stuff,</p>
      <p>talk about stuff, find your people.</p>
      <div>
        <router-link to="/signUp" >
          <b-button  size="lg" class="buttonTop"  block variant="success">Sign up</b-button>
     </router-link>
      </div>
      <div>
           <router-link to="/signIn" > 
           <b-button size="lg" class="buttonTop" block variant="info">Log in</b-button>
             </router-link>
          
      </div>
      <div class="striped-border"></div>
      <h6>By continuing with the options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy</h6>

      <div>
          <b-button size="lg" class="buttonBot"  block variant="light"><i class="bi bi-google"></i> Continue with Google</b-button>
      </div>
      <div>
          <b-button size="lg" class="buttonBot" block variant="light">Continue with Apple</b-button>
      </div>
      

    </b-col>

    <b-col></b-col>
  </b-row>
</b-container>

    </div>
    
</template>
<script>
import Header from './WelcomePageHeader.vue'
export default {

  name: 'WelcomePage',

  props: {

    msg: String

  },
  components: {
'Header':Header 
  },
}
</script>

<style scoped>

#Heading{
  font-family: 'Ubuntu', sans-serif;
  margin-top: 20px;
  
  line-height: 1.5;
  text-align: center;
}
.buttonTop{
  margin-bottom:20px ;
  width: 230px;
}
.buttonBot{
  text-align:left ;
  margin-bottom:10px ;
  font-size: 1rem;
}
.striped-border{ 
  border: 1px solid #000; 
  width: 115px; 
  margin: auto; 
  
}
</style>