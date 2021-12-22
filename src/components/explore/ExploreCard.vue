<template>
    <div id="ExploreCard" v-bind:style="{background:card.color}">
        <p id="tag">#{{card.tag}}</p>
        <div id="imgs">
            <img class="img" v-bind:src="card.imgs[0]">
            <img class="img" v-bind:src="card.imgs[1]">
        </div>
        <button>Follow</button>
    </div>       
</template>

<script>
 
 
 
export default {
  name: "ExploreCard",
  components: {
   
  },
  methods:{
   
  },
  data: function () {
    return {
    }
  },
  props:{
      card:Object
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
    #ExploreCard{
        display: flex;
        flex-direction: column;
        height: 199.33px;
        width: 140px;
        padding: 8px;
        border-radius: 7px;
    }
    #tag{
        color: white;
        font-size: 14px;
        margin-top: 5px;
        cursor: pointer;
    }
    #imgs{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        cursor: pointer;
    }
    .img{
        width: 56px;
        height: 93.33px;
        border-radius: 3px;
    }
    button{
        padding: 8px 10px 12px 10px;
        background: white;
        border-radius: 5px;
        margin-top: 8px;
        width:122px;
        height:40px;
        
    }
</style>
