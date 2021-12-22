 <template>
	<div id="radar">
    <h4 v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor, 'font-family':homeTheme[homeThemeIndex].fontStyle }">Radar</h4>
                <div
            id="divider2"
            v-bind:style="{
              'background-color': homeTheme[homeThemeIndex].fontColor,
            }"
          ></div>
         <PostCard v-bind:post="posts[index]" v-bind:maxWidth="postCardWidth"  />
    </div>
</template>

<script>
import PostCard from "./ViewPostCard.vue"
export default {
  data(){
return{
  postCardWidth:"300px",
  posts:[
    
 {
          id:'cataster',
          postHtml:'<img width="100%" src="https://64.media.tumblr.com/454c3b59dfb328a77f21233e950f328e/625e74fe79169878-5a/s400x600/54fe1df5835d18f13fd2fba9fef2545d95cda46b.gifv" alt=""><strong>Every morning, we get a chance to be different.</strong> A chance to change. A chance to be better. Your past is your past. Leave it there. Get on with the future part. Nicole Williams',
          tags:['#Nicole Williams','#relationship','#love','#breakup','#heartbreak','#moving on','#strength'],
          notes:2962,
          URL: "https://catasters.tumblr.com/post/669903012557373440"
          },
          {
          id: 'sillydegu',
          postHtml:'<img width="100%" src="https://64.media.tumblr.com/23b3b9b5b262ad45edcd7c525c0c8135/68bdea3bca9e36e5-bd/s640x960/d9f1fa0c05948cd469ac098df5a47d50524a3061.png" alt=""><strong>Every morning, we get a chance to be different.</strong> A chance to change. A chance to be better. Your past is your past. Leave it there. Get on with the future part. Nicole Williams',
          tags:['#Nicole Williams','#relationship','#love','#breakup','#heartbreak','#moving on','#strength','#recovery','#healing','#self compassion','#self respect','#personal development','#personal growth'],
          notes:5138,
          URL:"https://akiema.tumblr.com/post/669598235133886464/december-is-here-and-this-cutie-loves-it"
          },
          {
          id: 'sillydegu',
          postHtml:'<img width="100%" src="https://64.media.tumblr.com/0a7d4276e280f559b87a6f0bcb9808dd/4b9142b138008417-25/s400x600/7b9ffef56dfbff0a32bd4a44103d8525ae7aa420.jpg" alt=""><strong>Every morning, we get a chance to be different.</strong> A chance to change. A chance to be better. Your past is your past. Leave it there. Get on with the future part. Nicole Williams',
          tags:['#Nicole Williams','#relationship','#love','#breakup','#self compassion','#self respect','#personal development','#personal growth','#growth mindset','#mindfulness','#live in the now','#live in the present','#change','#breaking patterns','#second chance','#new chance','#new day','#let go of the past','#it’s not too late','#leave the past in the past','#quotes'],
          notes:5138,
          URL:"https://akiema.tumblr.com/post/669598235133886464/december-is-here-and-this-cutie-loves-it"
          },            
  ],
  index:0
  
}
  },
components:{
PostCard:PostCard
},

 computed: {
     
    homeTheme: function () {
      return this.$store.state.homeTheme;
    },
     
    homeThemeIndex: function () {
      return this.$store.state.homeThemeIndex;
    },
  },
   created() {
  this.index=this.randomPost();
   console.log( this.posts[this.index])
  }, 

 methods: {
    randomPost() {
 
      return   Math.floor(Math.random() * this.posts.length);
      
    }
    }
 
}
</script>

<style scoped>
#radar{
  width: 350px;
  margin: 40px;
}
#divider2 {
  width: 300px;
  height: 0.5px;
  margin-bottom: 15px;
}
</style>