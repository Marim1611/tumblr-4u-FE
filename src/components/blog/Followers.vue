<template>
<div class="container">
<div class="main">
    <div class="Followers" >
        <div class="follower_names">
            <div class="row ">
                <div class="col">
                    <div class="row ">
                        <div class="col-2 "><v-img class="imggg" :src=" image" ></v-img> </div>
                        <div class="col-1 ">
                        <div class="username-follower" > {{ username }}<br/>  </div>
                        <div class="title-follower">{{title}} </div>
                        </div>

                        <div class="col-8" >
                        <div class="button-follow" v-if="!followerFlag"><button v-on:click="follow"> follow </button></div>
                        <button class="friend" v-if="followerFlag"><b-icon  icon="file-person" class="per" ></b-icon></button>
                        </div>  
                    </div>
                </div>

                <div class="col-1">
                       <div class="dropdown">
                            <b-icon class="three-dots" v-on:click="threeDotsHandler"  icon="three-dots-vertical"  ></b-icon> 
                            <div v-show="threeDotsFlag" class="dropdown-content">
                            <div  class="red"><button>Report</button></div>
                            <div class="red"><button >Block</button></div>
                            <div class="Close"><button v-on:click="close" >Close</button></div>
                            </div>
                       </div>
                </div>
            </div>  
        </div>
    </div>

</div> 
</div>
</template>

<script>
 //import axios from "axios";

export default {

  name: 'App',
 

  components: {
  },
  data(){
    return{
        threeDotsFlag:false,
    }
  },
  props: {
  image: String,
  username: String,
  title: String,
  followerFlag:Boolean,
  //bogId:String
},
methods:{
    threeDotsHandler(){
    if(this.threeDotsFlag)this.threeDotsFlag=false;
    else this.threeDotsFlag=true;
},
    close(){
    this.threeDotsFlag=false;
},
    follow(){
        this.followerFlag=!this.followerFlag;
       //this.$store.commit('follow',blogId);

    }

}
   

}


</script>

<style>
.three-dots{
    position: relative;
    left: 0PX;
    top:0px;
    width: 25px;
    height : 25px;
    cursor: pointer;
}
.dropdown{
  position: relative;
  display: inline-block;
}
.three-dots-box{
  position: relative;
  left: 00px;
  top: 0px;
  width: 00px;
  height: 00px;
}
.imggg{
      border-radius: 8px;
      width: 60px;
      height: 40px;
      position: relative;
      top:00px;
      left: 0px;
}
.username-follower{
    position: relative;
    left: -30px;
    top:0px;
    font-weight: bold;
}
.title-follower{
    position: relative;
    left: -30px;
    top:0px;
}

.Close{
    position: relative;
    left: 0px;
    padding: 5px;

}
.button-follow{
    color: rgb(72, 53, 241);
    background: white;
    border-block-color: white;
    width: 50px;
    border-inline-color: white;
    position: relative;
    left: 420px;
}
.per{
    color: yellowgreen;
}
.dropdown-content{
  min-width: 200px;
  position: absolute;
  left:-90px;
  border-radius: 3px;
  text-align: center;
  padding:10px;
  background-color: white;
  z-index: 4;
}
.red{
  color: red;
  padding: 5px;
}

</style>