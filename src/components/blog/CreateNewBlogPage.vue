<template>
<body style="background-color:#001935;">
      <HomePageNavBar/>
<div class="container" >
  <div class="form">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-11">
          <h1 class="h1"> Create a new blog </h1>
          <p class="p1"> This additional blog can be managed by multiple authors or set to private.<br />
              Note: If you want to Like posts or Follow other users with this blog identity, you must log out and create a separate account.<br />
              Learn more about Primary vs. Secondary blog features. </p>
        <div class="row" id="roww"> 
              <div class="col-3" id="coll3">
                  <p class="h11">  Title <br /></p>
                  <p  class="h111">  URL  <br /></p>
                  <p   class="h1111">  Privacy  <br /></p>
                </div>
              <div class="col-6" >
                  <div class="form2">
                    <p v-if="!isHidden_title" class=err_title> you must fill the title</p>
                    <input type="text"  v-model="title" class="form-control titlee border border-secondary"  placeholder="title " >
                  </div>

                  <div class="form3">
                    <p v-if="!isHidden_url" class=err_url > you must fill the url</p>
                    <p v-if="!special_char_detected" class=special_char >special char not permitted</p>
                    <input type="text" v-model="url" class="form-control urll border border-secondary "   placeholder="url" >
                  </div>

                  <div class="form4">
                    <div class="cb"><input type="checkbox" class="form-check-input" id="exampleCheck1"  v-on:change="access_privacy()">
                    <label class="form-check-label" for="exampleCheck1">Password protect this blog</label></div>
                    <input type="text" v-model="pass" class="form-control passwordd border border-secondary"  placeholder="password" :disabled="validated == 0">
                  </div>

                </div>
              <div class="col-3">
                <p class="pp">(ie. Acme Corp, Sara & Jacob, My Awesome Blog)</p>
                <p class="pp">(you can change this at any time)</p>
              </div>
          </div>
    </div><!--end row-->
    <div class="row" id="roww2">
            <div class="col-1"></div>
            <div class="col-9">
              <v-btn class="button-create"  @click="go_validations" >create blog</v-btn>
              <!--<router-link to="/blog/created"   :disabled="!router_flag"
                 v-bind:Username="url"
                  v-bind:Title="title"
                 >  </router-link>-->

            </div>
            <div class="col-2">
            <router-link  to="/Home">
             <v-btn class="button-cancel">cancel</v-btn>  
            </router-link>
            </div>
    </div>

    </div>     
  </div>
</div>
<div class="end"></div>
</body>
</template>

<script>
import HomePageNavBar from '../homePage/HomePageNavBar.vue'
import axios from "axios";
import Browser from '../../mocks/browser'

export default {
  name:'CreateBlog',

    components: {
    //CreatedBlogPage,
    'HomePageNavBar':HomePageNavBar,
   // HomePageNavBar: () => import('../homePage/HomePageNavBar.vue')
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
   async go_validations(){
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
        this.router_flag=true;

         if(this.pass!="")
        this.privacy=true;
        else this.privacy=false;
         
         
        try {
  
        await axios.get(  Browser().baseURL+`/user/new/blog`, 
        {
          title:this.title,
          name:this.name,
          privacy:this.privacy,
          password:this.pass
         },
        { headers: { 'Authorization':   `Bearer ${localStorage.getItem('token')}` } }
        ).then(res => {
            console.log("FINAL CREATE BLOG")
                 console.log(res.data.res.message)
                })
        } catch (e) {
          console.error(e);
        }

        this.$router.push({ name: 'CreatedBlogPage', params: { indxFlag: this.temp, noPostsFlag: this.tempFlag } });
        console.log(this.url);
        }
      

    },
         isMockServer(baseUrl){
     
        if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
          return false
          else 
          return true
    },
   
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
      router_flag:false,
      tempFlag:true,
      temp:0
}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.end{
    height: 600px;
}
.form{
border-radius:20px;
background-color: white;
width:1000px;
position: relative;
left:60px;
padding: 10px;
}
.h1{
  color: black;
}
.p1{
  color:black;
}
.form2{
padding: 25px;
}
.form3{
padding: 25px;
}
.form4{
padding: 25px;
}
.cb{
  padding: 10px;
  position: relative;
  left:15px
}
.h11{
  padding: 25px;
  color: rgb(81, 101, 102);
  font-size: 25px;
  text-align: right;
}
.h111{
  padding: 25px;
  color: rgb(81, 101, 102);
  font-size: 25px;
  text-align: right;

}
.h1111{
  padding: 25px;
  color: rgb(81, 101, 102);
  font-size: 25px;
  text-align: right;

  }
#coll3{
  background-color: rgb(240, 236, 235);
}
.pp{
  padding: 11px;
}
.ppp{
  padding: 11px;
}
.button-cancel{
    color: cornflowerblue;
}
.button-create{
    color: cornflowerblue;
}
#roww1{
padding:40px;
}
#roww2{
padding:40px;

}
.err_title{
  font-size: 20px;
  color: red;
}
.err_url{
  font-size: 20px;
  color: red;
}
.special_char{
  font-size: 20px;
  color: red;
}
</style>