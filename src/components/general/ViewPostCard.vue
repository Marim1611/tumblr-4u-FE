 <template>
  <div id="searchCard" v-show="forMe">
     
      <div class="container" v-bind:style="{'background-color': homeTheme[homeThemeIndex].cardColor, 'max-width': this.maxWidth }" >
        <!--header of card-->
        <div class="header">
          <img class="profile" src="https://64.media.tumblr.com/54a1c708b6e6f778e6d6a62122b87264/dd15ee49758e1917-0f/s64x64u_c1/591674a52eaa19af57c763479bdbddcfa2219db8.jpg" alt="">
          <div class="name-follow">
            <a href="" class="name" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}">{{post.id}} </a>
            <a href="" v-on:click.prevent="followUnfollow" v-show="!follow" v-bind:style="{'color': homeTheme[homeThemeIndex].focused}">Follow</a>
          </div>

          <div class="dropdown">
     
           <b-icon class="options" v-on:click="postOption"  icon="three-dots" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
            
            <!--drop down menu of options-->
            <div v-show="showDropDown" class="dropdown-content">
              <a href="#">Posted - ....,..:...M</a>
              <button v-clipboard:copy="post.URL" v-on:click="copy">{{copyText}}</button>
              <button v-on:click="followUnfollow" v-show="follow">Unfollow</button>
              <button v-on:click="notForMe">This particular post isn't for me</button>
              <button class="red">Report</button>
              <button class="red">Block</button>
              <button v-on:click="closeDropDown" class="closeButton">Close</button>
            </div>
          </div>
        </div>
        <!--content & tags of card-->
        <div class="content" v-html="post.content" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"></div>
        <div class="tag-container">
          <a href="" class="tags" v-for="tag in post.Tags" :key="tag">{{ tag }}</a>
        </div>

        <!--footer of card-->
        <div class="footer-flex">
          <div class="notes" v-on:click="commentShow" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}"> {{ post.notes }} notes</div> <!--onClick:300x510-->
          <!--comment dropdown menu-->
          <div class="v-flex comment-window" v-show="comment" v-bind:style="{'background-color': homeTheme[homeThemeIndex].cardColor}">
            
            <!--header of comment window-->
              <div class="h-flex border-bottom">
              <b-icon class="clickable" v-on:click="noComment" icon="arrow-left" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon>
              <p class="grow" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}">{{ post.notes }} notes</p>
              <div class="no-padding" v-show="hash">
              <b-icon class="clickable" v-on:click="subscribeConversation" v-show="!subscribe" icon="lightning" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon>
              <b-icon class="clickable" v-on:click="subscribeConversation" v-show="subscribe" icon="lightning-fill" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon>
              <b-icon class="clickable" v-on:click="hashtag" icon="hash" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon>
              </div>
            </div>
            <!--body (comments or reactions)(of others)-->
            <div class="border-bottom grow v-flex comments">
              
            </div>
            <!--input comment-->
            <div class="h-flex">
              <input class="grow" placeholder="Have something to say?" type="text">
              <button>Reply</button>
            </div>
          </div>

          <!--the rest of card footer icons-->
          <div>
          <b-icon class="options" v-on:click="shareShow"  icon="reply" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
          </div>
          <div>
            <b-icon class="options" v-on:click="commentShow"  icon="chat" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
          </div>
          <div>
            <b-icon class="options" v-on:click="postOption"  icon="arrow-left-right" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
          </div>
          <div v-show="!heartFilled" v-on:click="like">
            <b-icon class="options" icon="heart" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
          </div>
          <div v-show="heartFilled"  v-on:click="unLike">
            <b-icon class="options" icon="heart-fill" font-scale="2" aria-hidden="true" v-bind:style="{'color': homeTheme[homeThemeIndex].fontColor}" ></b-icon> 
          </div>
        </div>
        <!--340x303.8 the share-->
        <!--share dropdown menu-->
        <div class="v-flex share-window" v-show="share" v-bind:style="{'background-color': homeTheme[homeThemeIndex].cardColor}">
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
            <div v-clipboard:copy="post.URL" v-on:click="copyShare" class="share-item clickable">
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

          

      </div>
    </div>
</template>
<script>
/** 
 *  Post Card in the home page
 * @example [none]
 */
export default {
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
          shareCopy:"Copylink"
      }
  },
  methods:{
   /** Function that shows a drop down list of clickable options in the post when clicking on the 3-points icon in the post
    * @public This is a public method
    * @param {none}
    */
   postOption: function(){
     this.showDropDown = !this.showDropDown;
   },
   /**
    * Function that close the drop down list of options in the post when clicking on the close button in the list
    * @public This is a public method
    * @param {none}
    */
   closeDropDown:function(){
     this.showDropDown = false;
   },
   like:function(){
     this.heartFilled = !this.heartFilled;
     this.post.notes +=1;
   },
   unLike:function(){
     this.heartFilled = !this.heartFilled;
     this.post.notes -=1;
   },
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
   commentShow:function(){
     this.comment = !this.comment;
     
     this.hash=true;
   },
   shareShow:function(){
     this.share = !this.share;
   },
   subscribeConversation:function(){
     this.subscribe = !this.subscribe;
     
   },
   noComment:function(){
     this.comment=false;
     
     this.hash=true;
   },
   hashtag:function(){
     this.hash = false;
   }
  },
  props:{
      post:Object,
      maxWidth:String
  },
   computed: {
        homeTheme: function(){
            return this.$store.state.homeTheme;
        },
        homeThemeIndex: function(){
            return this.$store.state.homeThemeIndex;
        },
        
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  height: 415px;
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
  left: 390px;
  border-radius: 3px;
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
  left: 500px;
  border-radius: 3px;
  padding:10px;
  background: #ffffff;
  position: absolute;
  display: block;
  z-index: 1;
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