<template>
	<div id="popup" >
		<div class="popup-inner">
			<slot />
		<div id = 'parentDivDialog'>
             <transition name="bounce">
    <div id = 'postItem'>
        <div id="circle" class ='text' style=" background-color:white;">
            <b-icon id="Dicon"  animation="throb" icon="type" font-scale="2.2" aria-hidden="true"></b-icon>        
        </div>
        <p>Text</p>
    </div>    
     </transition>
    <div id = 'postItem'>
        <div id="circle" class ='text' style=" background-color:rgb(219, 67, 67);">
            <b-icon id="Dicon" animation="throb" icon="camera" font-scale="2.2" aria-hidden="true"></b-icon>        
        </div>
        <p>Photo</p>
    </div>    
    <div id = 'postItem'>
        <div id="circle" class ='text' style=" background-color:orange;">
         <b-icon id="Dicon" animation="throb" icon="chat-square-quote-fill" font-scale="2.2" aria-hidden="true"></b-icon>        
        </div>
        <p>Quote</p>
    </div>    
    <div id = 'postItem'>
        <div id="circle" style=" background-color:greenyellow">
             <b-icon id="Dicon" animation="throb" icon="link45deg" font-scale="2.2" aria-hidden="true"></b-icon>        
        </div>
        <p>Link</p>
    </div>    
    <div id = 'postItem'>
        <div id="circle" style=" background-color:rgb(97, 97, 226);">
            <b-icon id="Dicon" animation="throb" icon="chat-text-fill" font-scale="2.2" aria-hidden="true"></b-icon>        
        </div>
        <p>Chat</p>    
    </div>
    <div id = 'postItem'>
         <div id="circle" style=" background-color:rgb(176, 65, 240);">
          <b-icon id="Dicon"  animation="throb" icon="music-note-beamed" font-scale="2.2" aria-hidden="true"></b-icon>        
        </div>
        <p>Audio</p>
    </div>
    <div id = 'postItem'>
        <div id="circle" style=" background-color:pink;">
             <b-icon id="Dicon" animation="throb" icon="camera-reels-fill" font-scale="2.2" aria-hidden="true"></b-icon>        
        </div>
        <p>Video</p>
     </div>    
</div>
		</div>
	</div>
</template>

<script>
export default {
    data(){
        return{
            noActivated:true
        }
    },
methods:{
   
  hideFunc(event) {
  if (event.keyCode === 27) {
    {
         this.$emit("hideFunc", false);
    }
     console.log('esc key pressed');
  }
}
},
created: function() {
  document.addEventListener('keyup', this.hideFunc);
},
destroyed: function() {
  document.removeEventListener('keyup', this.hideFunc);
}
}
</script>

<style lang="scss" scoped>
#popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.678);
	
	display: flex;
	align-items: center;
	justify-content: center;

	#popup-inner {
		background: transparent;
		padding: 32px;
	}
}
#parentDivDialog{
/* width: 100%; */
display: flex;
justify-content: center;
text-align: center;
position: relative;

}

#postItem{
    /* position: relative; */
    /* top: 200px; */
    /* right: 700px; */
    padding: 20px;
    flex-grow: 1;
}
#postItem:hover
{
    transform: scale(1.2);
    margin-right: 6%; /* fallback for ancient browsers that don't support calc() */
    margin-right: calc(5% + 10px);
    margin-left: 5%;
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
#Dicon{
   color: rgb(1, 1, 10);
   text-align: center;
  top: 30px;
    position: absolute;
 }
 
p{
      color: white;
      font-size: 20px;
 }
 .shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

 
</style>