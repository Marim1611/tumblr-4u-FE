<template>
<body style="background-color:#001935;top:-100px">
  <div id="main" >
    <div class="posts">
        <p1>No posts available<br /></p1>
        <p2>Learn how to make a post.</p2>
    </div>
    <div class="features">
          <v-btn id="button-posts">Posts</v-btn>
          <v-btn id="button-followers">Followers</v-btn>
          <v-btn id="button-activity">Activity</v-btn>
          <v-btn id="button-members">Members</v-btn>
          <v-btn id="button-drafts">Drafts</v-btn>
          <v-btn id="button-queue">Queue</v-btn>
          <v-btn id="button-edit-appearance">Edit appearance</v-btn>
          <!--<button id="button-mass-post-editor">Mass Post Editor</button>-->
    </div>
  </div>
</body>
</template>

<script>
export default {
  name: 'CreatedBlog',
  /*  created: function () {
    this.document.body.style.backgroundColor ="#001935";
  },
  destroyed: function () {
    this.document.body.style.backgroundColor = null;
  },*/
  props: {
},
  methods: {
 
 },
  data(){
    return{  
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main{
    background-color: #001935;
    top:-20px;
}
.posts{
    width: 550px;
    border: 5px solid ;
    padding: 50px;
    margin: 100px;
    background-color:rgba(111, 111, 122, 0.795);
    height: 350PX;
    position: relative;
    left:300px;
    top: 170px;
}
p1{
    font-size: 30px;
    color: darkturquoise;
    position: relative;
    top: 90px;
    left:130px;
}
p2{
    font-size: 15px;
    color: darkturquoise;
    position: relative;
    top: 90px;
    left:130px;
}
.features{
    width: 300px;
    border: 5px solid ;
    margin: 150px;
    border-block-color:rgba(9, 9, 17, 0.795) ;
    padding: 50px;
    background-color:#001935;
    height: 530PX;
    position: relative;
    top: -450px;
    left:850px;
}
#button-posts{
    color: white;
    font-size: 25px;
    position: relative;
    top:40px;
    left:-50px;
    border: none;
    background-color: #001935;
}
#button-followers{
    color: white;
    font-size: 25px;
    position: relative;
    top: 60px;
    left:-50px;
    border: none;
    background-color: #001935;
}
#button-activity{
    color: white;
    font-size: 25px;
    position: relative;
    top: 80px;
    left:-50px;
    border: none;
    background-color: #001935;
}
#button-members{
    color: white;
    position: relative;
    font-size: 25px;
    top: 100px;
    left:-50px;
    border: none;
    background-color: #001935;
}
#button-drafts{
    color: white;
    position: relative;
    font-size: 25px;
    top: 120px;
    left:-50Px;
    border: none;
    background-color: #001935;
}
#button-queue{
    color: white;
    position: relative;
    top: 150px;
    font-size: 25px;
    left:-45px;
    border: none;
    background-color: #001935;
}
#button-edit-appearance{
    color: white;
    position: relative;
    font-size: 25px;
    top: 180px;
    left:-45px;
    border: none;
    background-color: #001935;
}
/*#button-mass-post-editor{
    color: white;
    font-size: 25px;
    position: relative;
    top: 310px;
    left:-50px;
    border: none;
    background-color: #001935;
}*/
body {
  background-color:"#001935";
}
</style>