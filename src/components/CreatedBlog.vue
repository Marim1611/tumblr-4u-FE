<template>
  <div id="main">
    <div class="posts">
        <p1>No posts available<br /></p1>
        <p2>Learn how to make a post.</p2>
    </div>
    <div class="features">
          <button id="button-posts">Posts</button>
          <button id="button-followers">Followers</button>
          <button id="button-activity">Activity</button>
          <button id="button-members">Members</button>
          <button id="button-drafts">Drafts</button>
          <button id="button-queue">Queue</button>
          <button id="button-edit-appearance">Edit Appearance</button>
          <button id="button-mass-post-editor">Mass Post Editor</button>
    </div>
       <!-- <img src="@/assets/file-slash.PNG"/> -->

  </div>
</template>

<script>
export default {
  name: 'CreatedBlog',
    created: function () {
    document.body.style.backgroundColor ="#001935";
  },
  destroyed: function () {
    document.body.style.backgroundColor = null;
  },

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
.posts{
    width: 500px;
    border: 5px solid ;
    padding: 50px;
    margin: 100px;
    background-color:rgba(111, 111, 122, 0.795);
    height: 250PX;
    position: relative;
    left:100px;
}
p1{
    font-size: 30px;
    color: darkturquoise;
    position: relative;
    top: 140px;
}
p2{
    font-size: 15px;
    color: darkturquoise;
    position: relative;
    top: 140px;
}
.features{
    width: 200px;
    border: 5px solid ;
    margin: 150px;
    border-block-color:rgba(9, 9, 17, 0.795) ;
    padding: 50px;
    background-color:#001935;
    height: 450PX;
    position: relative;
    top: -550px;
    left:1000px;
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
    top: 100px;
    left:-115px;
    border: none;
    background-color: #001935;
}
#button-activity{
    color: white;
    font-size: 25px;
    position: relative;
    top: 130px;
    left:-40px;
    border: none;
    background-color: #001935;
}
#button-members{
    color: white;
    position: relative;
    font-size: 25px;
    top: 189px;
    left:-130px;
    border: none;
    background-color: #001935;
}
#button-drafts{
    color: white;
    position: relative;
    font-size: 25px;
    top: 215px;
    left:-60Px;
    border: none;
    background-color: #001935;
}
#button-queue{
    color: white;
    position: relative;
    top: 270px;
    font-size: 25px;
    left:-135px;
    border: none;
    background-color: #001935;
}
#button-edit-appearance{
    color: white;
    position: relative;
    font-size: 25px;
    top: 290px;
    left:-40px;
    border: none;
    background-color: #001935;
}
#button-mass-post-editor{
    color: white;
    font-size: 25px;
    position: relative;
    top: 310px;
    left:-40px;
    border: none;
    background-color: #001935;
}


</style>
