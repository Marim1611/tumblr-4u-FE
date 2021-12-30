 <template>
  <div id="searchCard" v-show="forMe">
     
      <div class="container" v-bind:style="{'background': homeTheme[homeThemeIndex].cardColor, 'max-width': this.maxWidth }" >
        <!--header of card-->
        <div class="header">
          <img class="profile" src="https://64.media.tumblr.com/54a1c708b6e6f778e6d6a62122b87264/dd15ee49758e1917-0f/s64x64u_c1/591674a52eaa19af57c763479bdbddcfa2219db8.jpg" alt="">
          <div class="name-follow">
            <a href="" class="name" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}">{{this.postName}} </a>
            <a href="" v-on:click.prevent="followUnfollow" v-show="!follow" v-bind:style="{'color': homeTheme[homeThemeIndex].focused}">Follow</a>
          </div>

          <div class="dropdown">
     
           <b-icon class="options" v-on:click="postOption"  icon="three-dots" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
            
            <!--drop down menu of options-->
            <div v-show="showDropDown" class="dropdown-content">
              <a href="#">Posted - Tuesday 6:30AM</a>
              <button v-clipboard:copy="" v-on:click="copy">{{copyText}}</button>
              <button v-on:click="followUnfollow" v-show="follow">Unfollow</button>
              <button v-on:click="notForMe">This particular post isn't for me</button>
              <button class="red">Report</button>
              <button class="red">Block</button>

              <button v-on:click="closeDropDown" class="closeButton">Close</button>
            </div>
          </div>
        </div>
        <!--content & tags of card-->
        <div class="content" v-html="post.postHtml" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"></div>
        <div class="tag-container">
          <a v-bind:style="{'color': homeTheme[homeThemeIndex].focused}" href="" class="tags" v-for="tag in post.tags" :key="tag">#{{ tag }}</a>
        </div>

        <!--footer of card-->
        <div class="footer-flex dropdown">
          <div class="notes" v-on:click="commentShow" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"> {{ this.notesCount }} notes</div> <!--onClick:300x510-->
          <!--comment dropdown menu-->
          <div class="v-flex comment-window" v-show="comment" v-bind:style="{'background': homeTheme[homeThemeIndex].cardColor}">
            
            <!--header of comment window-->
              <div class="h-flex border-bottom">
                <b-icon class="clickable" v-on:click="noComment" icon="arrow-left" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon>
                <p class="grow" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}">{{ this.notesCount }} notes</p>
                <div class="no-padding" v-show="hash">
                <b-icon class="clickable" v-on:click="subscribeConversation" v-show="!subscribe" icon="lightning" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon>
                <b-icon class="clickable" v-on:click="subscribeConversation" v-show="subscribe" icon="lightning-fill" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon>
                <b-icon class="clickable" v-on:click="hashtag" icon="hash" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon>
              </div>
            </div>
            <!-- reactions -->
            <div id="reactions" v-show="response">
              <div class="no padding" v-for="(res, i) in responseComputed" :key="i">
                <div class="h-flex center">
                  <img class="imgComment" v-bind:src="responseImgs[i]?responseImgs[i]:defaultImg" > <!--v-bind:src="comment">-->  
                  <b-icon v-if="res.noteType==='like'" icon="heart-fill" font-scale=".8" aria-hidden="true" v-bind:style="{'color': 'red'}" ></b-icon> 
                  <b-icon v-if="res.noteType==='reblog'" icon="arrow-left-right" font-scale=".8" aria-hidden="true" v-bind:style="{'color': 'lightgreen'}" ></b-icon> 
                  <div class="h-flex" v-bind:style="{'border-color':homeTheme[homeThemeIndex].fontColor}">
                    <h6 v-bind:style="{color:homeTheme[homeThemeIndex].fontColor}">{{responseNames[i]}}</h6>
                    <b-icon v-if="res.noteType==='reblog'" icon="arrow-left-right" font-scale="1" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
                    <h6 v-if="res.noteType==='reblog'" v-bind:style="{color:homeTheme[homeThemeIndex].fontColor}">{{postName}}</h6>
                    
                  </div>
                </div>
              </div>
            </div>


            <div v-on:click="responses" v-show="!response" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" class="clickable reactionsWind border-bottom v-flex text-left">
              <div class="h-flex no-padding">
               <!-- <img v-for="i in 8" :key="i" class="img-reactions" src="https://64.media.tumblr.com/51b7d5e9cfaa579ec94a17e618d96a1a/95b6dc889657dcc9-3c/s64x64u_c1/283ac5792129caa8fa116b4560861ff3431d7e3c.pnj"> -->
              </div > 
              {{this.likesCount}} likes and {{this.reblogsCount}} reblogs
            </div>
            <!--body (comments)(of others)-->
            <div v-show="!response" class="border-bottom grow v-flex comments">
              <div id="comments" class="no padding" v-for="(comment, i) in commentsComputed" :key="i">
                <div class="h-flex">
                  <!--<img class="imgComment" > v-bind:src="comment">-->
                 <img class="imgComment" v-bind:src="commentImgs[i]?commentImgs[i]:defaultImg" > <!--v-bind:src="comment">-->  
                 
                  <div class="borderComment" v-bind:style="{'border-color':homeTheme[homeThemeIndex].fontColor}">
                    <h6 v-bind:style="{color:homeTheme[homeThemeIndex].fontColor}">{{commentNames[i]}}</h6>
                    <span v-bind:style="{color:homeTheme[homeThemeIndex].fontColor}">{{comment.text}}</span>
                  </div>
                  <div class="grow right clickable">
                  <b-icon icon="three-dots" font-scale="1.5" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"/>
                  </div>
                </div>
              </div>
            </div>
            <!--input comment-->
            <div v-show="!response" class="h-flex">
              <input v-model="inputComment" id="inputComment" class="grow" placeholder="Have something to say?" type="text">
              <button v-on:click="commenting">Reply</button>
            </div>
          </div>

          <!--the rest of card footer icons-->
          <div class="dropdown">
          <b-icon class="options" v-on:click="shareShow"  icon="reply" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
          </div>



<!--340x303.8 the share-->
        <!--share dropdown menu-->
        <div class="v-flex share-window" v-show="share" v-bind:style="{'background': homeTheme[homeThemeIndex].cardColor}">
          <!--share header (searching for people to share(?))-->
          <div class="h-flex share-header">
            <b-icon class="img-icon" icon="search" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
            <input class="" type="text" placeholder="Message to...">
          </div>
          <!--the result of search (people to share(?))-->
          <div class="h-flex message-result"> <!-- if want to put a line    <div class=" border-bottom message-result">-->
            
          </div>
          <!--other sharing options(to out of tumblr like: facebook, twitter...etc)-->
          <div class="out-share h-flex">
            <div v-clipboard:copy="" v-on:click="copyShare" class="share-item clickable">
              <b-icon class="img-icon" icon="files" font-scale="2" aria-hidden="true" ></b-icon> 
              <p v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}">{{shareCopy}}</p>
            </div>
            <div class="share-item clickable">
              <b-icon class="img-icon" icon="code" font-scale="2" aria-hidden="true"  ></b-icon> 
              <p v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}">Embed</p>
            </div>
            <div class="share-item clickable">
              <b-icon class="img-icon" icon="facebook" font-scale="2" aria-hidden="true"></b-icon> 
              <p v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}">Facebook</p>
            </div>
            <div class="share-item clickable">
              <b-icon class="img-icon" icon="twitter" font-scale="2" aria-hidden="true"  ></b-icon> 
              <p v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}">Twitter</p>
            </div>
            <div class="share-item clickable">
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
              </svg>
              <p v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}">Pinterest</p>
            </div>
            <div class="share-item clickable">
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-reddit" viewBox="0 0 16 16">
                <path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z"/>
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z"/>
              </svg>
              <p v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}">Reddit</p>
            </div>
          </div>       
        </div>




          <div>
            <b-icon class="options" v-on:click="commentShow"  icon="chat" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
          </div>
          <div>
            <b-icon class="options" v-on:click="reblogWind(true)"  icon="arrow-left-right" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
          </div>

          <ReblogWindow v-on:reblogWind="reblogWind($event)" v-show="reblog" v-bind:postName="postName" v-bind:name="this.name" v-bind:post="post" />


          <div v-show="!heartFilled" v-on:click="like(post)">
            <b-icon class="options" icon="heart" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
          </div>
          <div v-show="heartFilled"  v-on:click="unlike(post)">
            <b-icon class="options" icon="heart-fill" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
          </div>
        </div>
       

          

      </div>
    </div>
</template>
<script>
import ReblogWindow from "./ReblogWindow.vue";
import Browser from "../../mocks/browser";
import axios from "axios";


/** 
 *  Post Card in the home page
 * @example [none]
 */
export default {
  components:{
    ReblogWindow:ReblogWindow
  },
  data() {
    return{
      showDropDown: false,
      heartFilled: false,
      follow:false,
      forMe:true,
      comment: false,
      subscribe:false,
      share:false,
      hash:true,
      copyText: "Copy link",
      shareCopy:"Copylink",
      reblog: false,
      notes:[],
      notesCount: '',
      blogIdsNotes:[],
      likesCount: '',
      reblogsCount: '',
      postName:"",
      name:"",
      inputComment:"",
      commentNames:[]  ,
      responseNames:[],
      response: false,
      defaultImg: "https://assets.tumblr.com/images/default_avatar/octahedron_closed_96.png",
      responseImgs:[],
      commentImgs:[],
      }
  },
  
 async created() {
    
  
    ///1-get notes
 
    try {
      let myRoute=""
      if (this.isMockServer(Browser().baseURL))
        myRoute=Browser().baseURL+'/notes'
      else
        myRoute=Browser().baseURL+`/${this.post.notesId}/notes`
      await axios.get(myRoute, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          this.notes = res.data.res.notes;
          console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
          console.log( res.data.res.notesCount)
          this.notesCount= res.data.res.notesCount,
          this.likesCount= res.data.res.likesCount,
          this.reblogsCount= res.data.res.reblogsCount,
          console.log(res.data.res.message)
        });
    } catch (e) {
      console.log("error in notes");
      console.error(e);
    }

    //
    
  

 
    try {
      let myRoute2=""
      if (this.isMockServer(Browser().baseURL))
        myRoute2=Browser().baseURL+'/blog'
      else
        myRoute2=Browser().baseURL+`/blog/view/${this.post.blogId}`
      await axios.get(myRoute2, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          console.log("*****************")
         
          this.postName = res.data.res.data.name;
           console.log("name worked probably");
            console.log(  this.postName)
        });
    } catch (e) {
      console.log("error in blog");
      console.error(e);
    }
  },
  methods:{

     async commenting() {
       document.getElementById('inputComment').value = '';
      try {
        let myRoute=""
      if (this.isMockServer(Browser().baseURL))
        myRoute=Browser().baseURL+'/comment'
      else
        myRoute=Browser().baseURL+`/${this.getPrimaryBlogId}/${this.post._id}/comment`
        await axios
          .post(myRoute, {
             text: this.inputComment
          })
          .then((res) => {
            console.log(res.data);
          });
      } catch (e) {
        console.log("^^^^^^^^^^^^^^^^^^");
        console.error(e);
      }
    },



    



     async like(post) {
    try {
      console.log("LIKEEEEEE")
      
      let myRoute=""
      if (this.isMockServer(Browser().baseURL))
        myRoute=Browser().baseURL+'/like_press'
      else
        myRoute=Browser().baseURL+`/${this.getPrimaryBlogId}/${post._id}/like_press`
      await axios.put(myRoute, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
         
    } catch (e) {
      console.log("error in like_press");
      console.error(e);
    }
     this.heartFilled = !this.heartFilled;
  }
  ,
     async unlike(post) {
    try {
      
      let myRoute=""
      if (this.isMockServer(Browser().baseURL))
        myRoute=Browser().baseURL+'/like_press'
      else
        myRoute=Browser().baseURL+`/${this.getPrimaryBlogId}/${post._id}/like_press`
      await axios.put(myRoute, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
         
         
         
   
    } catch (e) {
      console.log("error in like_press");
      console.error(e);
    }
     this.heartFilled = !this.heartFilled;
  },

    isMockServer:function(baseURL){
      if(baseURL == "http://localhost:3000")
        return true;
      else
        return false;
    },
   /** Function that shows a drop down list of clickable options in the post when clicking on the 3-points icon in the post
    * @public This is a public method
    * @param {none}
    */
   postOption: function(){
     this.showDropDown = !this.showDropDown;
   },
  //  responses: function(){
  //    this.response = "true";
  //  },
   async responses(){
      this.response = true;
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
     console.log(this.responseComputed)
     // getcomments
     for(let i=0; i<this.responseComputed.length; i++)
     {
       try {
      let myRoute=""
      if (this.isMockServer(Browser().baseURL))
        myRoute=Browser().baseURL+'/blog'
      else
        myRoute=Browser().baseURL+`/blog/view/${this.responseComputed[i].blogId}`
      await axios.get(myRoute, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          console.log(  res.data.res.data.name)
          this.responseNames.push(
             res.data.res.data.name
          ); 
          this.responseImgs.push(
            res.data.res.data.img
          );

         
        //  console.log(this.commentNames)
           console.log("name worked probably");
        });
    } catch (e) {
      console.log("error in blog");
      console.error(e);
    }
     }
   },



   /**
    * Function that close the drop down list of options in the post when clicking on the close button in the list
    * @public This is a public method
    * @param {none}
    */
   
   async reblogWind(x) {
     this.reblog = x;
    try {
      let myRoute=""
      if (this.isMockServer(Browser().baseURL))
        myRoute=Browser().baseURL+'/blog'
      else
        myRoute=Browser().baseURL+`/blog/view/${this.getPrimaryBlogId}`
      await axios.get(myRoute, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          this.name = res.data.res.data.name;
        });
    } catch (e) {
      console.log("error in blog");
      console.error(e);
    }
  },





   closeDropDown:function(){
     this.showDropDown = false;
   },
   /*like:function(){
     this.heartFilled = !this.heartFilled;
   },*/
   
   copy:function(){
     //time in milliseconds
     setTimeout(this.copyText= "Link copied!",1500); //waiting after
     setTimeout(() => this.copyText= "Copy link",1500);  //waiting before
   },
   copyShare:function(){
     setTimeout(this.shareCopy="Linkcopied!",1500);
     setTimeout(()=> this.shareCopy="Copylink",1500);
   },
   followUnfollow:function(){
     this.follow= !this.follow;
   },
   notForMe:function(){
     this.forMe= false;
   },
   async commentShow(){
     this.comment = !this.comment;
     document.getElementById('inputComment').value = "";
     this.hash=true;
      this.response = false;

      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
     console.log(this.commentsComputed)
     // getcomments
     for(let i=0; i<this.commentsComputed.length; i++)
     {
       try {
      let myRoute=""
      if (this.isMockServer(Browser().baseURL))
        myRoute=Browser().baseURL+'/blog'
      else
        myRoute=Browser().baseURL+`/blog/view/${this.commentsComputed[i].blogId}`
      await axios.get(myRoute, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then((res) => {
          console.log(  res.data.res.data.name)
          this.commentNames.push(
             res.data.res.data.name
          );
          this.commentImgs.push(
            res.data.res.data.img
          );
         
        //  console.log(this.commentNames)
           console.log("name worked probably");
        });
    } catch (e) {
      console.log("error in blog");
      console.error(e);
    }
     }
   },
   shareShow:function(){
     this.share = !this.share;
   },
   subscribeConversation:function(){
     this.subscribe = !this.subscribe;
     
   },
   noComment:function(){
     this.comment=false;
     document.getElementById('inputComment').value = '';
     this.hash=true;
     this.response = false;
   },
   hashtag:function(){
     this.hash = false;
    },
  //  checkReblog: function(note){
  //    if(note.noteType === "reblog" && !note.isDeleted)
  //     return note;
  //  },
   checkResponse: function(note){
     if(note.noteType === "reblog" && !note.isDeleted || note.noteType === "like" && !note.isDeleted)
      return note;
   },
  //  checkLikes: function(note){
  //    if(note.noteType === "like" && !note.isDeleted)
  //     return note;
  //  },
    checkComment: function(note){
            
     if(note.noteType === "comment" && !note.isDeleted )
     {
      return note;
     }
   }
  },
  props:{
      post:Object,
      maxWidth:String,
  },
   computed: {
      getPrimaryBlogId: function(){
          return this.$store.state.user.primaryBlogId;
        },
        homeTheme: function(){
            return this.$store.state.homeTheme;
        },
        homeThemeIndex: function(){
            return this.$store.state.homeThemeIndex;
        },
        // reblogsComputed: function(){
        //   return this.notes.filter(this.checkReblog);
        // },
        commentsComputed: function(){
          console.log("comments computed");
          return this.notes.filter(this.checkComment);
        } ,
        responseComputed: function(){
          console.log("comments computed");
          return this.notes.filter(this.checkResponse);
        } ,
        
        // likesComputed: function(){
        //   return this.notes.filter(this.checkLikes);
        // }  
  },
  // created(){
  //     this.reblogs = this.reblogsComputed;
  //     this.likes = this.likesComputed;
  //     this.comments = this.commentsComputed;
  // // },
  // watch: {
  //   computedData(){
  //     this.reblogs = this.reblogsComputed;
  //     this.likes = this.likesComputed;
  //     this.comments = this.commentsComputed;
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#reactions{
   height: 430px;
  overflow-y: auto;
}
.img-reactions{
  width:25px;
  border-radius: 5px;
  margin-right: 5px;
}
.text-left{
  text-align: left;
}
.reactionsWind{
  margin: 10px 0px;
  height: 68;
}
.right{
  align-items: flex-end;
}
.imgComment{
  border-radius:25px; 
  height:25px; 
  width:25px;
}
.borderComment{
  border: 1px solid;
  border-radius: 5px;
  text-align:left;
}
.message-result{
  height: 135px;
  margin-bottom: 5px;
  flex-grow: 1;
  overflow-x: auto;
}
.out-share img{
  height: 50px;
  width: 50px;
  border-radius: 25px;

}
.out-share{
  overflow-x: scroll; 
}
.center{
  align-items: center;
 
}
.share-item{
  display: flex;
  width: 80px;
  flex-direction: column;
  align-items: center;
  margin: 0px 13px;
  color: white;
}
.share-header
{
  margin-bottom: 15px;
}
.share-header .img-icon{
  margin-right: 20px;
  height: 20px;
  width: 20px;
}
.footer-flex div .no-padding{
  padding: 0px;
}
.comments{
  overflow-y: auto;
  height: 365px;
}
.clickable{
  cursor: pointer;
}
.v-flex{
  display: flex;
  flex-direction: column;
}
.h-flex{
  display: flex;
  flex-direction: row;
}
.border-down{
  border-bottom: #eee 2px solid;
}
.footer-flex .h-flex{
  display: flex;
  flex-direction: row;
  padding: 10px 10px 0px 10px;
}
.comment-window{
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.9);  width: 300px;
  height: 510px;
  left: 50px;
  border-radius: 3px;
  z-index: 1;
  text-align: center;
  padding:10px;
  background: #ffffff;
  position: absolute;
  display: block;

}
.share-window{
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.9);
  width: 340px;
  height: 303.8px;
  left: 50px;
  top: -300px;
  border-radius: 3px;
  padding:10px;
  background: #ffffff;
  position: absolute;
  display: block;
  z-index: 2;
}
.footer-flex div{
padding: 0px 10px;
}
.grow{
  flex-grow: 1;
  
}
.red{
  color: red;
}
.options{
  width: 25px;
  height : 25px;
  cursor: pointer;
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
  display: block;
  padding: 12px 16px;
  background: #ffffff;
  color: black;
  text-decoration: none;
  border-bottom: #eee 2px solid;
}
.dropdown-content button{
    padding: 12px;
    display: block;
    width: 100%;
    border: none;
    background: #ffffff; 
}
.dropdown-content{
  min-width: 250px;
  position: absolute;
  left:-100px;
  display: block;
  border-radius: 3px;
  text-align: center;
  padding:10px;
}
.flex-container{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 20px;
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
.dropdown-content :hover{
  background: #eee;
}

.header .name-follow{
  display: inline;
  flex-grow: 1;
}
.profile{
  width: 38px;
  height: 38px;
  margin-right: 10px;
  border-radius: 3px;
}
.footer-flex{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 25px 0px 0px;
}

#searchCard{
  
  margin-bottom: 10px;
  width: 100%;
}
.container{
 
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
.tags{
  color: #000000a6;
  font-size: 16px;
  font-family: 'Helvetica';
  margin: 0px 11px 0px 0px;
  display: inline-block;
}
.notes{
  flex-grow: 1;
  font-size: 16px;
  font-family: 'Helvetica';
  cursor: pointer;
  padding: 0px 0px 12px;
}
.tag-container{
  margin: 12px 0px 0px;
  padding: 0px 10px;
}
</style>