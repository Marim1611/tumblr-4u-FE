<template>

  <div id="app">
     <router-view/>
  </div>
  
</template>

<script>
 

export default {
  name: 'App',
 
  methods: {
    goTop(){
          window.scrollBy(0,-document.body.scrollHeight);
    },
    scrollUp(){
        window.scrollBy({
        top: -50,
        left: -50,
        behavior: 'smooth'
      });
    },
    scrollDown(){
        window.scrollBy({
        top: 50,
        left: 50,
        behavior: 'smooth'
      });
        },
 },
  mounted(){

  this._keyListener  = function(e) {
    if (e.key === "." ) {
        this. goTop();
     }else if(e.key === "k" ){ 
        this.scrollUp();
     }else if(e.key === "j" ){
        this.scrollDown();
     }
   };
    document.addEventListener('keydown', this._keyListener.bind(this));

 },
 beforeDestroy(){

   document.removeEventListener('keydown', this._keyListener.bind(this));
 }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
</style>