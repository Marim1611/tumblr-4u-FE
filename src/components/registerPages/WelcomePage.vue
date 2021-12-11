<template>
<body>
  <div class="Heading" id="h">
    <Header/>
      <b-container class="bv-example-row">
    <b-row> 
      <h1 class="Main">Tumblr4U</h1>
      <b-col></b-col>
      <b-col lg="3">
      <p class="prag">Make stuff, look at stuff,</p>
      <p class="prag">talk about stuff, find your people.</p>
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
</body>
    
</template>
<script>
import Header from './WelcomePageHeader.vue'
export default {
  name: 'WelcomePage',
  props: {
    msg: String
  },
  data(){
    return{
      img: '',
      x:0,
    }
  },
  components: {
    Header
  },
  methods:{
    
  },
  mounted(){
     var img=[ "../../assets/images/1.jpg",
                "../../assets/images/2.jpg"];
      //var size = this.img.length;
      // var x = Math.floor(size * Math.random());
       let x=0;
       this.img=img[x];
       document.body.style.backgroundImage="url('" + img[x]+ "')";
       console.log(this.img)


      alert(x);
     /* var element = document.getElementsByClassName('Heading')[0];
      element[0].style["background-image"] = "url("+ img[x] + ") no-repeat;";*/
    
  }

}
</script>

<style scoped>
body{
background-image: url("../../assets/images/6.jpg");
  background-position: center;
  background-size: cover;
}
.Main{
  margin-top:50px;
  font-size: 5rem;
  text-align: center;
  
  
  
}
.privacy{
  font-size:0.85rem;
  line-height: 1.5;
}
.Heading{
  font-family: 'Ubuntu', sans-serif;
  color:white;
  
  height: 100%; 
  width:100%;
  line-height: 1;
  text-align: center;
 
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