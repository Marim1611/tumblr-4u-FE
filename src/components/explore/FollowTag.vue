<template>
    <div id="followTags" v-bind:style="{'background-color': homeTheme[homeThemeIndex].cardColor}" >
        <div class="container">
             <h5 v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">Let's get personal</h5>
             <p v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">Whatever you’re into, Tumblr has it. Follow tags that matter to you, and the things you love will show up here.</p>
             <button class="firButton " v-bind:style="{'background-color':homeTheme[homeThemeIndex].focused,'color': homeTheme[homeThemeIndex].backgroundColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">Let's follow some tags</button>
             <button class="secButton" v-bind:style="{'border-color':homeTheme[homeThemeIndex].fontColor,'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">Maybe later</button>
        </div>
    </div>       
</template>

<script>
 
 
 
export default {
  name: "FollowTags",
  components: {
   
  },
  methods:{
   
  },
  data: function () {
    return {
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
 
  
};
</script>

<style scoped>
 #followTags{
     max-width: 350px;
    
     margin-top:20px;
 }
 .container{
     padding: 20px;
 }
 .firButton{
     border-radius: 3px;
     text-align: center;
     padding: 10px;
     margin-bottom: 7px;
     width: 100%;
 }
 .secButton{
     border-radius: 3px;
     border: solid 2px ;
     text-align: center;
     padding: 10px;
     width: 100%;
 }
</style>
