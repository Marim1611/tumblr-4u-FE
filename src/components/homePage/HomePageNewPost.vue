<template>
<md-dialog v-bind:md-active.sync="postToBegin" v-bind:md-close-on-esc="true">
    <md-dialog-content>
<div id = 'parentDiv'>
    <div id = 'postItem'>
        <div id="circle" class ='text' style=" background-color:white;">
            <b-icon id="icon"  icon="type" font-scale="2" aria-hidden="true"></b-icon>        
        </div>
        <p>Text</p>
    </div>    
    <div id = 'postItem'>
        <div id="circle" class ='text' style=" background-color:rgb(219, 67, 67);">
            <b-icon id="icon"  icon="camera" font-scale="2" aria-hidden="true"></b-icon>        
        </div>
        <p>Photo</p>
    </div>    
    <div id = 'postItem'>
        <div id="circle" class ='text' style=" background-color:orange;">
         <b-icon id="icon"  icon="chat-square-quote-fill" font-scale="2" aria-hidden="true"></b-icon>        
        </div>
        <p>Quote</p>
    </div>    
    <div id = 'postItem'>
        <div id="circle" style=" background-color:greenyellow">
             <b-icon id="icon"  icon="link45deg" font-scale="2" aria-hidden="true"></b-icon>        
        </div>
        <p>Link</p>
    </div>    
    <div id = 'postItem'>
        <div id="circle" style=" background-color:rgb(97, 97, 226);">
            <b-icon id="icon"  icon="chat-text-fill" font-scale="2" aria-hidden="true"></b-icon>        
        </div>
        <p>Chat</p>    
    </div>
    <div id = 'postItem'>
         <div id="circle" style=" background-color:rgb(176, 65, 240);">
          <b-icon id="icon"  icon="music-note-beamed" font-scale="2" aria-hidden="true"></b-icon>        
        </div>
        <p>Audio</p>
    </div>
    <div id = 'postItem'>
        <div id="circle" style=" background-color:pink;">
             <b-icon id="icon"  icon="camera-reels-fill" font-scale="2" aria-hidden="true"></b-icon>        
        </div>
        <p>Video</p>
     </div>    
</div>

   </md-dialog-content>
  </md-dialog>
</template>

<script>
export default {
  name: 'NewPost',
  props:{
      openCircles:Boolean
  },
  computed: {
    postToBegin: {
      get() {
        return this.openCircles;
      },
      set(newVal) {
        return newVal;
      },
    },
  }
}
</script>

<style scoped>
#parentDiv{
width: 100%;
display: flex;
justify-content: center;
text-align: center;
position: absolute;

}
#postItem{
    position: relative;
    top: 200px;
    right: 700px;
    padding: 20px;
    flex-grow: 1;
}
#circle {
    background: lightblue;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    text-align: center;
    position: relative;

}
#icon{
   color: navy;
   text-align: center;
  top: 30px;
    position: absolute;
 }
 
 p{
      color: white;
      font-size: 20px;
 }  
 
</style>