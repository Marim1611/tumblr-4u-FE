<!--
<template>
  <div id="searchResult">
    <div class="search-outer">
      <div class="search-inner">

      </div>
      <div class="search-inner"></div>
    </div>
  </div>
</template>
-->
<template>
  <div id="searchCard">
    <div class="fex-container">
      <div class="container">
        <div class="header">
          <img class="profile" src="https://64.media.tumblr.com/54a1c708b6e6f778e6d6a62122b87264/dd15ee49758e1917-0f/s64x64u_c1/591674a52eaa19af57c763479bdbddcfa2219db8.jpg" alt="">
          <div >
            <a href="" class="name">{{blogs.id[1]}} </a>
            <a href="">Follow</a>
          </div>
          <div class="dropdown">
            <button class="dropbutton">
              <img v-on:click="postOption" class="options" src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-3-1/512/points-512.png" alt="">
            </button>
            <div class="dropdown-content">
              <a href="#">Posted - ....,..:...M</a>
              <button>Copy link</button>
              <button>Close</button>
            </div>
          </div>
        </div>
        <img class="content-image" v-bind:src="blogs.photos[0]" alt="">
        <div class="content" v-html="blogs.content[2]"></div>
        <div class="tag-container">
          <a href="" class="tags" v-for="tag in blogs.tags" :key="tag">{{ tag }}</a>
        </div>
        <div class="notes"> {{ blogs.notes[1] }} notes</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return{
          blogs: {
            id:['cataster','sillydegu','iamstrongallonmyown'],
            photos:['https://64.media.tumblr.com/eb7f04ce18aa06c84b653829eea3a252/3e53fe6da9921150-fb/s640x960/7e1cb8b752e64ab2180513c5f01b92211d72a77d.jpg'],
            content:['It\'s his egg now','Source: reddit.com','<strong>Every morning, we get a chance to be different.</strong> A chance to change. A chance to be better. Your past is your past. Leave it there. Get on with the future part. Nicole Williams'],
            tags:['#Nicole Williams','#relationship','#love','#breakup','#heartbreak','#moving on','#strength','#recovery','#healing','#self compassion','#self respect','#personal development','#personal growth','#growth mindset','#mindfulness','#live in the now','#live in the present','#change','#breaking patterns','#second chance','#new chance','#new day','#let go of the past','#it’s not too late','#leave the past in the past','#quotes'],
            notes:['2,962','5,138','1,439']
            }
      }
  },
  methods:{
   postOption: function(){

   }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-outer{
    display: flex;
    flex-direction: row;
}
.options{
  width: 25px;
  height : 25px;
}
.dropdown{
  position: relative;
  display: inline-block;
}
.dropbutton{
  border: none;
  background: #ffffff;
  display: block;
}
.dropdown-content a{
  display: none;
  padding: 12px 16px;
  background: #ffffff;
  color: black;
  text-decoration: none;
}
.dropdown-content button{
    padding: 12px;
    display: none;
    width: 100%;
}
.dropdown-content{
  min-width: 250px;
  position: absolute;
  display: none;
  border-radius: 3px;
  text-align: center;
  padding:10px;
}
.dropbutton:hover .dropdown-content button{
  display: block;
}
.flex-container{
  width: 300px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
a:link{
  text-decoration: none;
}
.name:hover {
  text-decoration: none;
}
.dropdown-content a:hover{
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}

a{
  color: #00b8ff;
}
.header div{
  display: inline;
  flex-grow: 1;
}
.profile{
  width: 38px;
  height: 38px;
  margin-right: 10px;
  border-radius: 3px;
}
.search-outer{
  display: flex;
  flex-direction: row;
}
#searchCard{
  background: navy;
  position: relative;
  min-height: 100vh;
  width: 100%;
  
}
.container{
  max-width: 300px; 
  background: #ffffff;
  border-radius: 3px;
  display: inline-block;
  
}
.header{
  display: flex;
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
.content{
  font: 24px;
  font-family: 'Times New Roman';
  margin: 15px 0px;
  padding: 0px 10px;
  
}
.tags{
  color: #000000a6;
  font-size: 16px;
  font-family: 'Helvetica';
  margin: 0px 11px 0px 0px;
  display: inline-block;
}
.notes{
  font-size: 16px;
  font-family: 'Helvetica';
  margin: 25px 11px 0px;
  padding: 0px 0px 12px;
}
.tag-container{
  margin: 12px 0px 0px;
  padding: 0px 10px;
  
}
.content-image{
  width: 100%;
  height: 100%;
}
</style>
