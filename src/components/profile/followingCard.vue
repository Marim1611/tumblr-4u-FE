<template>
  <div class="card " style="width: 22rem;">
    <div class="card-body">
      <div class="container-fluid ">
        <div
          class="row coverMargin"
          v-bind:style="{
            'background-image': 'url(' + this.coverImg + ')',
          }"
        >
        <div class=profileImg>
            <img :src="this.profileImg" alt="Avatar" class="avatar">
        </div>
        </div>
        <br>
        <h5 class="card-title userName">User Name</h5>
        <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <div class="row row-cols-1 row-cols-md-3 ">
      <div v-for="(img,index) in imgs" :key="index" class="col mb-4 zz">
          <img :src="img.url" class="recentlyImgs" >
    
        
    </div>
    
    </div>
     
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "followingcard",
  data() {
    return {
        coverImg:
            "https://64.media.tumblr.com/c7a6e4667a26600ac5001793f1722b8a/14c5179fb8ae066c-6d/s2048x3072/96211f955d3c3f515ebd52c4857002e92c44c119.png",
        profileImg:"https://64.media.tumblr.com/avatar_9778d75065f0_128.pnj",
        imgs:[
            {
            url:"https://64.media.tumblr.com/c2ec25b008544f4284be19e3913fa096/4baa8844f148f9ed-0b/s500x750/dd27ff53d6fda5c05de55ded23213c7450d6a913.jpg"
            },
            {url:"https://64.media.tumblr.com/71d8bc781645d8046c7cddd5352ba820/361c521dfe49ae02-9c/s500x750/eb7af2a4a96f341a7e63fe1c3abffc4bea7895d8.jpg"},
            {url:"https://64.media.tumblr.com/498bdc68c61929aad21108cb2e1f8934/9fe1b150732064ec-ee/s1280x1920/c23cae0b8f5061a13cc961240d4dfe58127623e4.jpg"}
            
        ]
    };
  },
  //created(){

  //alert(this.dd)
  /*let Domain=(new URL(this.dd))
    this.domain=Domain.hostname.replace('www.','')*/
  // },

  components: {},
  methods: {
    like() {
      this.fill = true;
      this.note++;
    },
    unlike() {
      this.fill = false;
      this.note--;
    },
  },
};
</script>

<style scoped>
.coverMargin {
  height:100px;
}
.profileImg{
    position: relative;
    text-align: center;
    top:70px
    
}
.avatar{

    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-style: solid;
    border-width: 2.5px;
    border-color: white;

}
.userName{
    text-align: center;
}
.imgs{
    width:50px;
    height:50px;
}
.recentlyImgs{
    width:80%;
    height:70%;
    border-radius: 6px;
}
.col {
    padding-left: 10px;
    padding-right:10px;
    margin: 0;
    
  

}
.card-body{
    padding: 0;
}
.card-text{
    color:grey;
}
.row{
    height:90px;
}
.card{
    border-radius: 6px;
}

</style>