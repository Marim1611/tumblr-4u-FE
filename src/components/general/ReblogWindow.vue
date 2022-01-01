<template>
	<div id="popup" >
		<div class="popup-inner">
			<slot />	    <div id = 'parentDivDialog'>
            <img id="profile" src="https://64.media.tumblr.com/54a1c708b6e6f778e6d6a62122b87264/dd15ee49758e1917-0f/s64x64u_c1/591674a52eaa19af57c763479bdbddcfa2219db8.jpg" alt="">
            <div class="container" v-bind:style="{'background': homeTheme[homeThemeIndex].cardColor }" >
                
                <div class="header">
                  
                    <div class="name-follow">
                    <a href="" class="clickable name" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}">{{this.name}} </a>
                    <b-icon class="clickable"  icon="arrow-left-right" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"/>
                    <a href="" class="name" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}">{{this.postName}} </a>
                    
                    <div>
    <b-dropdown  variant="primary">
      <template #button-content>
        <b-icon icon="gear-fill" aria-hidden="true"></b-icon> 
      </template>
      <b-dropdown-item-button>
        
        Custom URL <span class="sr-only">(Click to unlock)</span>
      </b-dropdown-item-button>
     
     
     
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button>Content source</b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button>Post date</b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button>
        
        Text editor
      </b-dropdown-item-button>
    </b-dropdown>
  </div>
                    </div>
                </div>
                <div class="border-up header">
                    <img class="profile" src="https://64.media.tumblr.com/54a1c708b6e6f778e6d6a62122b87264/dd15ee49758e1917-0f/s64x64u_c1/591674a52eaa19af57c763479bdbddcfa2219db8.jpg" alt="">
                    <div class="">
                        <a href="" class="clickable " v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}">{{this.name}} </a>
                    </div>
                </div>
                <div class="content" v-html="post.postHtml" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"></div>
                
                <div class="border-up">
                    <input v-model="reblogIn" id="reblogIn" placeholder="Your text here" type="text">
                </div>
                <div class="flex-button">
                    <button v-on:click="reblogWind" id="button-close">close</button>
                    <button v-on:click="reblogging" id="button-reblog">reblog</button>
                </div>
            </div>
            </div>
		</div>
	</div>
</template>

<script>
import Browser from "../../mocks/browser";
import axios from "axios";

/**
 *  reblog window 
 * @example [none]
 */
export default {
    data(){
        return{
            reblogIn:""
        }
    },
    props:
    {
        post: Object,
        name: String,
        postName: String,
    },
    computed:{
        homeTheme: function(){
            return this.$store.state.homeTheme;
        },
        homeThemeIndex: function(){
            return this.$store.state.homeThemeIndex;
        },
        getPrimaryBlogId: function(){
          return this.$store.state.user.primaryBlogId;
        },
    },
methods:{

     /**
     * Function that emits an event to close the reblog window.
     * get started when clicking on the close button on the reblog window.
     * @public This is a public method
     * @param {none}
     */
   reblogWind:function(){
        this.$emit("reblogWind",false)
   },


   
    /**
     * Function that alternates between the real and mock server.
     * @public This is a public method
     * @param {string} baseURL the currently used URL
     */
    isMockServer:function(baseURL){
      if(baseURL == "http://localhost:3000")
        return true;
      else
        return false;
    },
   
     /**
     * Function that reblogs the post.
     * get started when clicking on the reblog button on the reblog window.
     * @public This is a public method
     * @param {none}
     */
async reblogging() {
      document.getElementById('reblogIn').value = '';
   //   console.log(reblogIn);
try {
        let myRoute=""
      if (this.isMockServer(Browser().baseURL))
        myRoute=Browser().baseURL+'/reblog_post'
      else
        myRoute=Browser().baseURL+`/${this.getPrimaryBlogId}/${this.post._id}/reblog_post`
        await axios
          .put(myRoute, {
             text: this.reblogIn
          })
          .then((res) => {
            console.log(res.data);
          });
      } catch (e) {
        console.log("^^^^^^^^^^^^^^^^^^");
        console.error(e);
      }
    },



}
}
</script>

<style lang="scss" scoped>
.flex-button{
    display: flex;
    flex-direction:row ;
    justify-content: space-between;
    border-top: grey 1px solid;
}
#button-close{
    background: darkgrey;
    color: white;
    height: 30px;
    width: 60px;
    margin: 10px 0 15px 0;
    border-radius: 5px;
    padding: 0 0 3px 0;
}
#button-reblog{
    background: cyan;
    color: white;
    height: 30px;
    width: 60px;
    margin: 10px 0 15px 0;
    border-radius: 5px;
    padding: 0 0 3px 0;
}
.input-reblog{
    min-height: 70px;
    width: 100%;
}
#reblogIn{
  width: 100%;
}
.border-up{
    border-top: 1px grey solid;
}
.clickable{
    cursor: pointer;
}
.header .name-follow{
  display: inline;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.profile{
  width: 38px;
  height: 38px;
  margin-right: 10px;
  border-radius: 3px;
}
#profile{
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border-radius: 3px;
} 
.container{
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 3px;
  display: inline-block;
  overflow-y: auto;
  max-width: 50%;
  max-height: 720px;
  margin: 0;
}
.header{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 10px 0px;
  margin: 0px 0px 10px;
  font-size: 14px;
  font-family: 'Helvetica';
}
.name{
 margin: 0px 5px 0px 0px;
 color: black;
}
#popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.678);
	
	display: flex;
    //flex-direction: column;

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
flex-direction: row;
position: relative;
margin: 20px 0 10px 0;
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