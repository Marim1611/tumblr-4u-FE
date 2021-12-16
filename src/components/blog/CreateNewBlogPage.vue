<template>
<body style="background-color:#001935;">
      <HomePageNavBar/>
<b-container class="bv-example-row box" >
          <h1> create a new blog </h1>
      <p1> This additional blog can be managed by multiple authors or set to private.<br />
        Note: If you want to Like posts or Follow other users with this blog identity, you must log out and create a separate account.<br />
        Learn more about Primary vs. Secondary blog features here. </p1>

  <b-row class="row-handler">
    <b-col cols="1" class="col1-handler">
      <h class="h11">  Title <br /></h>
      <h   class="h11">  URL  <br /></h>
      <h   class="h11">  Privacy  <br /></h>
         <v-btn class="button-create"  v-if="!router_flag"  @click="go_validations" >create blog</v-btn>
                <router-link v-else to="/blog/created" >  </router-link>

    </b-col>
    <b-col cols="8">
        <form class="the-form" >
            <div class="form-group">
                <p v-if="!isHidden_title" class=err_title>error: you must fill the title</p>
    <input type="text"  v-model="title" class="form-control titlee border border-secondary"  placeholder="title " >

            </div>
            <div class="form-group">
                        <p v-if="!isHidden_url" class=err_url >error: you must fill the url</p>
                         <p v-if="!special_char_detected" class=special_char >special char not permitted</p>
        <input type="text" v-model="url" class="form-control urll border border-secondary "   placeholder="url" >
    
            </div>
                <div class="form-group">
                    <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"  v-on:change="access_privacy()">
                    <label class="form-check-label" for="exampleCheck1">Password protect this blog</label>
                </div>
                <input type="text" v-model="pass" class="form-control passwordd border border-secondary"  placeholder="password" :disabled="validated == 0">
                 

            </div>
        </form>
    </b-col>
    <b-col>
            <p>ie. Acme Corp, Sara & Jacob, My Awesome Blog</p>
            <p>
                you can change this at any time
            </p>
       <v-btn class="button-cancel">cancel</v-btn>

    </b-col>
  </b-row>

</b-container>
<div class="end"></div>
</body>
</template>

<script>
//import CreatedBlog from './CreatedBlogPage.vue'
import HomePageNavBar from '../homePage/HomePageNavBar.vue'


export default {
  name: 'CreateBlog',
    components: {
  //'created-blog':CreatedBlog
    HomePageNavBar 

  },
  props: {
    
  },
  methods: {
      /*
      *makes textbox of password enabled when the its label accessed
      *@public
      */ 
    access_privacy(){
      if(this.validated==0)
        this.validated=1;
      else
      {
        //delete text entered before
        this.pass="";
        this.validated=0;
      }
        
    },
      /*
      *does not permit user to create a blog except he enters the title and 
      *url and url without special characters
      *@public
      */ 
    go_validations(){
        var illegalChars = /[\W_]/; // allow only letters and numbers
      if(this.title==" " && this.url==" " ){
        this.isHidden_url=0;
        this.isHidden_title=0;

      }
      else if(this.title=="" && this.url!="" &&illegalChars.test(this.url)!=1){
        this.isHidden_title=0;
        this.isHidden_url=1;
        this.special_char_detected=1;
      }
      else if(this.url==""){
        this.isHidden_url=0;
      }
      else if(illegalChars.test(this.url) ){// special char
            this.special_char_detected=0;
            this.isHidden_url=1;

      }
      else{
        this.isHidden_url=1;
        this.isHidden_title=1;
        this.special_char_detected=1;
        this.router_flag=1;
      }
      

    }
   
 },
  data(){
    return{
       title:""
      ,url:""
      ,privacy:""
      ,validated:0,
      isHidden_title:1,
      isHidden_url:1,
      special_char_detected:1,
      pass:"",
      router_flag:0
      //BE needs title,url,pass
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h11{
    text-align: left;
    color: rgb(160, 96, 96);
    left:10px;
    position: relative;
    line-height: 2.5;
    font-size: 25px;
    top:-10px;
    border:1px solid whitesmoke ;
    margin: 15px;

}
.end{

    height: 600px;

}
      /*
      *make the form in shape of a box 
      *@public
      */ 
.box{
    background-color: white;
    position: relative;
    top: 100px;
    border-radius: 25px;
    border: 2px solid #73AD21;
    height:550px;
}
.button-create{
    position: relative;
    top: 100px;
    color: cornflowerblue;
}
.titlee{
    border-color: black;
}
.urll{
    border-color: black;
}
.password{
    border-color: black;
}
.row-handler{
    position: relative;
    top: 40px;
}
.button-cancel{
 position: relative;
    top: 180px;
    color: cornflowerblue;
    
}
.err_title{
font-size: 20px;
color: red;
}
.err_url{
font-size: 20px;
color: red;
}
.form-group{
    margin: 15px;
}
.special_char{
    font-size: 20px;
color: red;
}
/*.col1-handler{
     margin: 15px;
}*/
</style>