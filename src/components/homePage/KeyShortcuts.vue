<template>
  <div id="key">
    <h1> !!!!hellooooo</h1>
 <p> 
   ahmed <br />
   ahmed<br />
   ahmed<br />
   ahmed<br /><br />
   ahmed<br />
   ahmed<br />
   ahmed<br /><br />
   ahmed<br />
   ahmed<br />

   ahmed<br />
   ahmed<br />
   ahmed<br />
   ahmed<br />
   ahmed<br />
   ahmed<br /><br /><br />
   ahmed<br /><br />
   ahmed<br />
   ahmed<br />
   ahmed<br />
   ahmed<br />
   ahmed<br />
   ahmed<br />
   ahmed<br /><br />
   ahmed<br />
   ahmed
   ahmed<br />
   ahmed
   ahmed<br />
   ahmed
   ahmed<br />
   ahmed<br />
   ahmed <br />
   ahmed<br />
   ahmed<br />
   ahmed<br /><br />
   ahmed<br />
   ahmed<br />
   ahmed<br /><br />
   ahmed<br />
   ahmed<br />

   ahmed<br />
   ahmed<br />
   ahmed<br />
   ahmed<br />
   ahmed<br />
   ahmed<br /><br /><br />
   ahmed<br /><br />
   ahmed<br />
   ahmed<br />
   ahmed<br />
   ahmed<br />
   ahmed<br />
   ahmed<br />
   ahmed<br /><br />
   ahmed<br />
   ahmed
   ahmed<br />
   ahmed
   ahmed<br />
   ahmed
   ahmed<br />
 
 </p>
  </div>
</template>

<script>
export default {
  name: 'KeyShortcuts',
  props: {
},
  methods: {
       /**
      *go to top of the page as a reaction from the event listener 
      *@public
      */ 
    $_go_to_top(){
          window.scrollBy(0,-document.body.scrollHeight);
    },
      /**
      *scrolling up the page as a reaction from the event listener 
      *@public
      */ 
    $_scroll_up(){
        window.scrollBy({
        top: -50,
        left: -50,
        behavior: 'smooth'
      });
    },
      /** 
      *scrolling down  the page as a reaction from the event listener 
      *@public
      */
    $_Scroll_down(){
        window.scrollBy({
        top: 50,
        left: 50,
        behavior: 'smooth'
      });
        },
 },
  data(){
    return{  
    }
  },
  /** 
      *listener to any click on keboard by the user
      *@public

      */
  mounted(){
      

  this._keyListener  = function(e) {
    if (e.key === "." ) {
        this. $_go_to_top();
     }else if(e.key === "k" ){ 
        this.$_scroll_up();
     }else if(e.key === "j" ){
        this.$_Scroll_down();
     }
   };
    document.addEventListener('keydown', this._keyListener.bind(this));

 },
 beforeDestroy(){

   document.removeEventListener('keydown', this._keyListener.bind(this));
 }


}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
