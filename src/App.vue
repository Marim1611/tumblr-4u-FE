<template>
  <div id="app">
     <Header></Header>
     <LogIn></LogIn>
     <SignUp></SignUp>
     
  </div>
</template>

<script>
 import LogIn from './components/SignIn.vue'
 import Header from './components/Header.vue'
 //import Content_1 from './components/Content_1.vue'
 import SignUp from './components/SignUp.vue'
 


export default {
  name: 'App',
  components: {
    Header,
    LogIn,
    SignUp
    
     
  }
}
</script>

<style>
 
</style>
