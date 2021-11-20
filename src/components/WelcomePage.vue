<template>
    <div class="Heading img">
     <Header/>
     <h1 class="Main">Temblr4U</h1>
      <b-container class="bv-example-row tt">
        
    <b-row>
   
       <b-col></b-col>
       
    <b-col col lg="3">
      
 
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
      
      <h6 class="privacy">By continuing with the options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy</h6>
      <div class="striped-border"></div>  
      <br>

      <div>
          <b-button size="lg" class="buttonBot"  block variant="light"><b-icon icon="google"></b-icon> Continue with Google</b-button>
      </div>
      <div>
          <b-button size="lg" class="buttonBot" block variant="light"> Continue with Apple</b-button>
      </div>
      <div class="d7k">
         
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
.Main{
  margin-top:50px;
  font-size: 5rem;
  /*transition: all 0.15s ease 0s;*/
  
}
.privacy{
  font-size:0.85rem;
  line-height: 1.5;

}

.Heading{
  font-family: 'Ubuntu', sans-serif;
  color:white;
  background-image: url("../images/Home-Background.jpg");
  background-position: center;
  background-size: cover;
  height: 100%; 
  width:100%;
  line-height: 1;
 
}
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
  border: 2px solid #D3E4CD; 
  width: 115px; 
  margin: auto; 
}
.d7k{

  height: 5.1rem;
}
 
</style>