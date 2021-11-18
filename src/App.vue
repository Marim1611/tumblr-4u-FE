<template>
  <div id="app">
     <Header></Header>
     <Content_1></Content_1>
     <SignUp></SignUp>
     <LogIn></LogIn>
  </div>
</template>

<script>
 import LogIn from './components/SignIn.vue'
 import Header from './components/Header.vue'
 import Content_1 from './components/Content_1.vue'
 import SignUp from './components/SignUp.vue'
 


export default {
  name: 'App',
  components: {
    Header,
    Content_1,
    SignUp,
    LogIn
     
  }
}
</script>

<style>
 
</style>
