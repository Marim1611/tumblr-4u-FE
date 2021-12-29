<template>
	<div class="popup">
		<div class="popup-inner">
			<slot />
      <h2 v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor,'font-family':homeTheme[homeThemeIndex].fontStyle}">
          Are you sure you want to block {{this.blocked}} ? </h2>
		<div id="buttons" >
	<button id="myButton" v-on:click="neverMind" type="button" v-bind:style="{'background': homeTheme[homeThemeIndex].focused,'font-family':homeTheme[homeThemeIndex].fontStyle }" >Never mind</button>
   
<button id="myButton" v-on:click="block" class="blockButton"   type="button" >Block</button>
            

		</div>
		</div>
	</div>
</template>

<script>
export default {


 computed: {
     
    homeTheme: function () {
      return this.$store.state.homeTheme;
    },
     
    homeThemeIndex: function () {
      return this.$store.state.homeThemeIndex;
    },
  },
  created: function() {
  document.addEventListener('keyup', this.hideMe);
},
destroyed: function() {
  document.removeEventListener('keyup', this.hideMe);
},
 methods:{
  hideMe(event) {
  if (event.keyCode === 27) {
    {
         this.$emit("hideMe", false);
    }
     console.log('esc key pressed');
  }
},
 neverMind(){
 this.$emit("hideMe", false);
  },
  block(){
    console.log("ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
 this.$emit("doBlock", false);
  },
   
},
props:{
    blocked:String
}
}
</script>

<style lang="scss" scoped>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.699);
	
	display: flex;
	align-items: center;
	justify-content: center;

	.popup-inner {
		background: transparent;
		padding: 32px;
	}
}
h2{
	font-weight: bold;
}
.blockButton{
    background-color:rgb(204, 51, 51);
}
#buttons{
	margin-left:300px;
  margin-top:100px ;
	justify-content: space-between;
}
#myButton {
	
   border-radius: 5px;
 padding: 5px 0 0 0 ;
    margin:20px;
  text-align: center;
  text-decoration: none;
  width: 100px;
  height: 60px;
  font-size: 15px;
}
</style>