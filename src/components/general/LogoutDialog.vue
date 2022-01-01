<template>
	<div class="popup">
		<div class="popup-inner">
			<slot />
      <h2 v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor,'font-family':homeTheme[homeThemeIndex].fontStyle}">Are you sure you want to log out?</h2>
		<div id="buttons" >
	<button id="myButton" v-on:click="cancel" type="button" v-bind:style="{'background': homeTheme[homeThemeIndex].focused,'font-family':homeTheme[homeThemeIndex].fontStyle }" >Cancel</button>
  <router-link :to="this.routeOut">
<button id="myButton" v-on:click="goOut" type="button" v-bind:style="{'background': homeTheme[homeThemeIndex].focused,'font-family':homeTheme[homeThemeIndex].fontStyle }" >Ok</button>
             </router-link>


		</div>
		</div>
	</div>
</template>

<script>
/**
 *  Logout dialog appears when user click on logout button
 * @example [none]
 */
export default {

data(){
  return{
    routeOut:""
  }
},

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
    /**
     * Function to hide the logout dialog when user click esc button
     * @public This is a public method
     * @param {none}
     */
  hideMe(event) {
  if (event.keyCode === 27) {
    {
         this.$emit("hideMe", false);
    }
     console.log('esc key pressed');
  }
},
 cancel(){
 this.$emit("hideMe", false);
  },
    /**
     * Function for user log out remove token from local storage and get the user back to welcome page
     * @public This is a public method
     * @param {none}
     */
  goOut(){
   localStorage.removeItem('token')
  this.routeOut="/"
  
  }
},
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
#buttons{
	margin: 40px;
	justify-content: space-between;
}
#myButton {
	color:white;
   border-radius: 5px;
 padding: 5px 0 0 0 ;
    margin:20px;
  text-align: center;
  text-decoration: none;
  width: 70px;
  height: 40px;
  font-size: 15px;
}
</style>