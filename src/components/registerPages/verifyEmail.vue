<template>
  <body id="bc"> 
    <Header/>
    
    <b-container class="bv-example-row ">
      <div class="fillempty1"></div>
    <b-row v-show="verified" class="firstRow">
        <h1 class="head">Your tumblr account is now verified</h1>
       
        <h1>Congratulations</h1>
        <br>
        <br>
        <br>
        <br>
        <p>Now you are a real user.</p>
        <br>
        <br>
        <br>
        <div>
        <router-link to="/dashBoard">Skip to your dashboard</router-link>
        </div>
    </b-row>
      <b-row>
        
        <b-col></b-col>

        <b-col v-show="!verified" cols="3">
            
                 
           <button @click="verify" class="btn btn-info btn-lg btn-block bb " type="submit">Verify Email</button>

    

        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
    <div v-if="verified" class="fillempty2"></div>
    <div v-else class="fillempty3"></div>
  </body>
</template>
     

<script>
import Header from './WelcomePageHeader.vue'
 
import api from '@/api';
 
 


 
export default {
  name: 'verifyEmail',
  
  
  
  components: {
    Header
   
  },
  data(){
    return{
      verified:false, 
    } 
  },
  methods:{
    verify(){
        var token=this.$store.state.user.token
 
        api.put('verify/'+token, {
 
       }).then(resp => {
          this.$store.state.msg = resp.message;
          this.verified=true;
        })
        .catch(err => {
          alert(err.error)
      })
       
        

        
    },
  }

  }



</script>

<style scoped>
.head{
    margin-top:5rem;
    margin-bottom:2rem;
}
a{
    color: white !important;
    text-decoration: none;

}
a:hover{
    text-decoration: none !important;
}

#bc{
  font-family: 'Ubuntu', sans-serif;
  color: #ffff;
  background-color: #001935;
  width: 100%;
  min-height: 100%; 
  width: 100%;

}

.bb{
  margin-top:250px;
  width:100%
}
.fillempty1{
  height:150px;
}
.fillempty2{
  height:14rem
}
.fillempty3{
  height:17.1rem
}
.firstRow{
    text-align: center;
}


</style>