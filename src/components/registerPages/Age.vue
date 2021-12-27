<template>
  <body id="bc"> 
    <Header/>
    
    <b-container class="bv-example-row ">
      <div class="fillempty1"></div>
      <h1 class="Main">Tumblr4U</h1>

      <b-row>
        
        <b-col></b-col>

        <b-col cols="3">
          <div v-if="ageError" class="error">That is not a valid age</div>
          <form @submit.prevent="handel">
          <input type="number" class="form-control"   placeholder="How old are you ?" v-model="Age">        
           <button  class="btn btn-info btn-lg btn-block bb " type="submit">Next</button>

          
          </form>
          
          <p class="pp">This site is protected by reCAPTCHA and the Google Terms of Service and Privacy Policy apply.</p>


        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
    <div class="fillempty2"></div>
  </body>
</template>
     

<script>
import Header from './WelcomePageHeader.vue'


 
export default {
  name: 'age',
  
  
  
  components: {
    Header
   
  },
  data(){
    return{
      Age:0,
      ageError:false, 
    } 
  },
  methods:{
    handel(){
      if(this.Age<=0){
        this.ageError=true;
      }
      else{
      let age=this.Age
      this.$store.dispatch('signup',{age})
      .then(()=>this.$router.push('/getting_to_know_tumblr'))
      }
    }
  }

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
.error{
    background: rgba(0,0,0,.25);
    border-radius: 3px;
    color: #fff;
    font-size: .875rem;
    font-weight: 400;
    margin: 15px 0;
    padding: 14px 15px;
}
.Main{
  text-align: center;
  margin-top:50px;
  font-size: 5rem; 
}
.bb{
  margin-top:7px;
  width:100%
}
.pp{
  margin-top:5px;
  text-align: center;
}
.fillempty1{
  height:150px;
}
.fillempty2{
  height:250px
}


</style>