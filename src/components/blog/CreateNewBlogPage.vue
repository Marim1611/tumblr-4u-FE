<template>
<body style="background-color:#001935;top:-20px ">
<div main>
  <div  class="revert">
      <h1> create a new blog </h1>
      <p1> This additional blog can be managed by multiple authors or set to private.<br />
        Note: If you want to Like posts or Follow other users with this blog identity, you must log out and create a separate account.<br />
        Learn more about Primary vs. Secondary blog features here. </p1>

      <div id="part1">
        <p2>Title</p2>
        <input  v-model="title" id="input-title"  > 
        <p5> (ie. Acme Corp, Sara & Jacob, My Awesome Blog)</p5>
      </div>

      <div id="part2">
        <p3>URL<br /></p3>
        <input  v-model="url" id="input-url" > 
        <p6> (you can change this at any time)</p6>
      </div>

      <div id="part3">
            <p4>Privacy<br /></p4>
            <input  v-model="privacy" id="input-privacy" :disabled="validated == 1" >
            <p7><strong> Password protect this blog<br/></strong></p7>
              <p8>This blog can only be viewed by people who enter this password: <br /></p8>
                <input type="checkbox" id="password"  v-on:change="$_access_privacy()">
      </div>
    <component v-bind:is="component"></component>
    <router-link to="/blog/created">
    <button id="button-create"  >create blog</button>
    </router-link>
    <button id="button-cancel">cancel</button>
  </div>
</div>
</body>
</template>

<script>
import CreatedBlog from './CreatedBlogPage.vue'


export default {
  name: 'CreateBlog',
  /*created: function () {
    document.body.style.backgroundColor ="#001935";
  },
  destroyed: function () {
    document.body.style.backgroundColor = null;
  },*/
    components: {
  'created-blog':CreatedBlog
  },
  props: {
    
  },
  methods: {
    $_access_privacy(){
      if(this.validated==0)
        this.validated=1;
      else
      {
        //delete text entered before
        this.validated=0;
      }
        
    },
   
 },
  data(){
    return{
       title:""
      ,url:""
      ,privacy:""
      ,validated:1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main{
  background-color: #001935;
}
.revert{
  position: relative;
  top:30px;
  /*font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  border: 15px solid whitesmoke;
  width: 1200px;
  padding: 50px;
  margin: 20px;
  height: 650px;
  text-align:left;
  align-self: left;
  background-color: rgb(255, 255, 255);
}

#part1{
  align-self: right;
  text-align: right;
  border:solid powderblue   ;
  background-color:rgba(226, 207, 207, 0.719);
  width:200px;
  height:80px ;
  top:10px;
  position: relative;
  border-width: 2px;
}
#part2{
  align-self: right;
  text-align: right;
  border:solid white   ;
  border-color:white powderblue;
  background-color:rgba(226, 207, 207, 0.719);
  width:200px;
  height:80px ;
  top:10px;
  position: relative;
  border-width: 2px;

}
#part3{
  align-self: right;
  text-align: right;
  border:solid powderblue   ;
  background-color:rgba(226, 207, 207, 0.719);
  width:200px;
  height:120px ;
  top:10px;
  position: relative;
  border-width: 2px;
}
#p1 {
  font-size: 8px;
}
p2{
  font-size: 20px;
  position: relative;
  top:25px;
}
p3{
  font-size: 20px;
  position: relative;
  top:25px;
}
p4{
   font-size: 20px;
   position: relative;
   top:50px;
}
p5{
   font-size: 10px;
   position: relative;
   top:-30px;
   left:820px;
}
p6{
   font-size: 10px;
   position: relative;
   top:-30px;
   left:820px;
}
p7{
   font-size: 14px;
   position: relative;
   top:-80px;
   left:255px;
}
p8{
   font-size: 13px;
   position: relative;
   top:-80px;
   left:245px;
}
#password{
  position: relative;
  top:-150px;
  left:70px;
}
#input-title{
border: 1px solid black;
  width: 600px;
  padding: 6px ;
  margin: 2px ;
  box-sizing: border-box;
  position: relative;
  left:250px;
  top:-5px;
}
#input-url{
  position: relative;
  top:-5px;
}

/**{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}*/
/*.revert{

    all:revert;
    color:revert;
    padding: revert;
}*/
#input-url{
  border: 1px solid black;
  width: 600px;
  padding: 6px ;
  margin: 2px ;
  box-sizing: border-box;
  position: relative;
  left:250px;

}
#input-privacy{
   border: 1px solid black;
  width: 400px;
  padding: 6px ;
  margin: 2px ;
  box-sizing: border-box;
  position: relative;
  left:250px;
  top:50px;

}
 #button-create{
 position: relative;
 top:80px;
 padding:10px;
 color:white;
 background-color:rgb(20, 143, 243);
 width: 130px;
}
 #button-cancel{
 position: relative;
 top:80px;
 left:500px;
 padding:10px;
  color:white;
 background-color:rgb(20, 143, 243);
  width: 100px;
}

</style>