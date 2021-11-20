<template>
  <div class="last">
    
     <b-container class="bv-example-row">
        
    <b-row> 
      <h1 class="Main">Okay, it’s not actually hard to explain.</h1>
      <b-col></b-col>
       
      <b-col lg="3">
      
 
      <p class="prag">We lied. But now you understand this thing. So come on in.</p>
      <div>
        <router-link to="/signUp" >
          <b-button  size="lg" class="buttonTop"  block variant="info">Sign up</b-button>
     </router-link>
      </div>
      <div>
           <router-link to="/signIn" > 
           <b-button size="lg" class="buttonTop" block variant="success">Log in</b-button>
             </router-link>
          
      </div>
      
      <h6 class="privacy">By continuing with the options below, you agree to Tumblr’s Terms of Service and have read the Privacy Policy</h6>
      <div class="striped-border"></div>  
      <br>

      <div>
          <b-button size="lg" class="buttonBot"  block variant="light"><b-icon icon="google"></b-icon> Continue with Google</b-button>
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

export default {
  name: 'LastPage',
  components: {
     
  }
  
}
</script>


<style scoped>
 .last{
    background-image: url("../../assets/images/HomeBackground.jpg");
    background-position: center;
    background-size: cover;
    height: 100%; 
    width:100%;
    color:white;
 }
 .Main{
  margin-top:50px;
  font-size: 4rem;
  text-align: center;
  
  
  
}
.privacy{
  font-size:0.85rem;
  line-height: 1.5;

}

.Heading{
  font-family: 'Ubuntu', sans-serif;
  color:white;
  background-image: url("../../assets/images/HomeBackground.jpg");
  background-position: center;
  background-size: cover;
  height: 100%; 
  width:100%;
  line-height: 1;
  text-align: center;
 
}

.buttonTop{
  margin-bottom:20px ;
  width: 230px;
  font-weight: bold;
  color: black;
}
.buttonBot{
  text-align:center ;
  margin-bottom:10px ;
  font-size: 1rem;
  font-weight: bold;
}
.striped-border{ 
  border: 2px solid #D3E4CD; 
  width: 115px; 
  margin: auto; 
}
.d7k{

  height: 8.4rem;
}

 
</style>
