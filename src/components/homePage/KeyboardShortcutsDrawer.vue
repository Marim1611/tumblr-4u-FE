 <template>
  <div>
    <v-navigation-drawer
      v-bind:style="{
          'background-color': homeTheme[homeThemeIndex].cardColor,
        }"
      id="blogDrawer"
      v-bind:width="400"
      v-bind:right="true"
      v-show="showMe"
    v-click-outside="hideDrawer"
      app
    >
    <div id="heading">
            <h2 v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }"
    >Keyboard Shortcuts</h2>
    <h3 v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">
        Dash Board</h3>

    </div>

 <div id="divider" v-bind:style="{'background-color': homeTheme[homeThemeIndex].fontColor}"  ></div>
 
 
     <div id="myItem">
  <p  v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">
      Scroll Down</p>

      <div id="key"
       v-bind:style="{
          'background-color': homeTheme[homeThemeIndex].backgroundColor,
        }">
<p  v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">
    J</p>
      </div>
</div>

  <div id="myItem">
  <p  v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">
    Scroll Up  </p>

      <div id="key"
       v-bind:style="{
          'background-color': homeTheme[homeThemeIndex].backgroundColor,
        }">
<p  v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">
    K</p>
      </div>
</div>

  <div id="myItem">
  <p  v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">
     Back to the top</p>

      <div id="key"
       v-bind:style="{
          'background-color': homeTheme[homeThemeIndex].backgroundColor,
        }">
<p  v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">
    .</p>
      </div>
</div>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  created(){
     this.showMe=true
  },
  methods:{
       hideDrawer() {
       this.showMe=false
    }
  },
  data: function () {
    return {
      showMe:true,
      popularTags:["#art", "#crochet", "#baking", "#Block", "#Close","#art", "#crochet", "#baking"]
    };
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
 
#divider {
  width: 100%;
  height: 0.5px;
}
#myItem{
     display: flex;
      justify-content: space-around;
       margin: 20px;
}
 
 

#heading{
    margin: 20px;
}
p{
    font-size: 20px;
}
#key{
    width:30px;
     height:30px;
    justify-content: center;
    border-radius: 5px;
}
#blogDrawer{
   box-shadow: 0px 5px 10px rgb(43, 42, 42);
}
</style>
