<template>
  <!-- <div class="textBox"> -->
  <!-- <div id="header"> -->
  <!-- <p :style="{ 'flex-direction': 'row', color: 'gray' }">marimzayn</p> -->
  <!-- <b-icon
        id="icon"
        icon="gear-fill"  
        
        font-scale="1"
      ></b-icon> -->
  <!-- </div> -->
  <md-dialog v-bind:md-active.sync="postToBegin" v-on:keyup.esc="closeTextBox">
    <md-dialog-content>
      <!-- <md-dialog-title>mariemzayn22</md-dialog-title> -->

      <CreatePostTitleEditor v-on:childToParent="onTitleClick" />
      <CreatePostTextEditor v-on:childToParent="onTextClick" />
      <input type="text" placeholder="#tags" id="theTags" />
      <md-divider></md-divider>
      <div class="footerBtns">
        <button class="closeBtn" v-on:click="closeTextBox">Close</button>
        <!-- <div class="postOptions"> -->
        <button
          v-bind:disabled="disablePosting"
          v-bind:class="{
            disabledBtn: this.disablePosting,
            nonDisabledBtn: !this.disablePosting,
          }"
          v-on:click="postDone"
        >
          Post
        </button>
        <!-- <v-divider />
          <button>
            <b-icon
              icon="caret-down-fill"
              
              font-scale="1.2"
            ></b-icon>
          </button> -->
      </div>
      <!-- </div> -->
    </md-dialog-content>
  </md-dialog>
</template>

<script>
import CreatePostTextEditor from "./editors/textEditor.vue";
import CreatePostTitleEditor from "./editors/titleEditor.vue";
import axios from "axios";
import Browser from "../../mocks/browser";

/**
 *  Create post for text
 * @example [none]
 */
export default {
  props: {
    textPost: Boolean,
  },
  components: {
    CreatePostTextEditor,
    CreatePostTitleEditor,
  },
  data() {
    return {
      // postOptions: [
      //   { name: "Post now", id: 1 },
      //   { name: "Add to queue", id: 2 },
      //   { name: "Save as draft", id: 3 },
      //   { name: "Post privately", id: 4 },
      //   { name: "Schedule", id: 5 },
      // ],
      // selectedPostOption: "Post",
      autogrow: null,
      textChosen: this.textPost,
      postContent: "",
      postTitle: "",
    };
  },
  methods: {
    // changepostOption(event) {
    //   let selectedIndex =
    //     event.target.options[event.target.options.selectedIndex];
    //   if (selectedIndex === 1) this.selectedPostOption = "Mariem";
    // },
    /**
     * Function to close the text upload section for create post
     * @public This is a public method
     * @param {none}
     */
    closeTextBox() {
      this.$emit("closeTextBox", false);
      this.postContent = "";
      this.postTitle = "";
    },
    /**
     * Function to recieve the content written inside the post from the text editor file
     * @public This is a public method
     * @param {Boolean} content --> boolean sent from the create post section when clicking on text post to start uploading one
     */
    onTextClick(content) {
      this.postContent = content;
    },

    onTitleClick(content) {
      this.postTitle = content;
    },

    isMockServer(baseUrl) {
      if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
        return false;
      else return true;
    },
    /**
     * Function to publish the post and save its content
     * @public This is a public method
     * @param {none}
     */

    async postDone() {
      let myRoute = "";
      if (this.isMockServer(Browser().baseURL))
        myRoute = Browser().baseURL + "/create_post";
      else myRoute = Browser().baseURL + `/${this.blogId}/create_post`;
      try {
        await axios
          .post(
            myRoute,
            {
              postHtml: this.postTitle + this.postContent,
              type: "text",
              state: "published",
              tags: [],
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            },

          )
          .then((res) => {
            this.$emit("closeTextBox", false);
            this.postContent = "";
            this.postTitle = "";
            console.log(res.data);
          });
      } catch (e) {
        console.log("^^^^^^^^^^^^^^^^^^");
        console.error(e);
      }
    },
  },
  computed: {
     blogId: function () {
      return this.$store.state.primaryBlogId;
    },
    /**
     * Function to know if the text upload post should appear or not
     * @public This is a public method
     * @param {none}
     */
    postToBegin: {
      get() {
        return this.textPost;
      },
      set(newVal) {
        return newVal;
      },
    },
    /**
     * Function to know if the post containing content to be displayed or not and activate or deactivate the post button according to this
     * @public This is a public method
     * @param {none}
     */
    disablePosting() {
      if (
        (this.postContent === "" || this.postContent === null) &&
        (this.postTitle === "" || this.postTitle === null)
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style scoped>
.md-dialog .md-dialog-container {
  width: 30vw;
  min-height: 30vh;
  max-height: 100%;
}
#header {
  display: flex;
}
input[type="text"] {
  cursor: text;
  border: none;
  outline: none;
}
.footerBtns {
  display: flex;
  flex-direction: row;
}
.footerBtns button {
  border: none;
  border-radius: 1.9px;
  margin-top: 10px;
  padding: 5px 7px;
  font-weight: 700;
}
.postOptions {
  background-color: #00b8ff;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 24px;
}
.nonDisabledBtn {
  background-color: #00b8ff;
  position: absolute;
  right: 24px;
  color: white;
  cursor: pointer;
  font-size: 13px;
}
.closeBtn {
  background-color: #9da6af;
  color: white;
  cursor: pointer;
  font-size: 13px;
}
.disabledBtn {
  background-color: #00b8ff;
  position: absolute;
  right: 24px;
  color: hsla(0, 0%, 100%, 0.5);
  cursor: default;
  font-size: 13px;
}
</style>
