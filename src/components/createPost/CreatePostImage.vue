<template>
  <md-dialog v-bind:md-active.sync="postToBegin" v-on:keyup.esc="closeTextBox">
    <md-dialog-content>
      <div class="imgUpload">
        <imageEditor v-on:childToParent="onTextClick" ref="imgEditor" />
        <CreatePostTextEditor
          v-on:childToParent="onPostCaption"
          v-show="showEditor"
        />
      </div>
      <input type="text" placeholder="#tags" id="theTags" />
      <md-divider></md-divider>
      <div class="footerBtns">
        <button class="closeBtn" v-on:click="closeTextBox">Close</button>
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
      </div>
    </md-dialog-content>
  </md-dialog>
</template>

<script>
import CreatePostTextEditor from "./editors/imageContentEditor.vue";
import imageEditor from "./editors/imageEditor.vue";
import axios from "axios";
import Browser from "../../mocks/browser";

/**
 *  Create post for image
 * @example [none]
 */
export default {
  props: {
    imagePost: {
      type: Boolean,
    },
    // tumblrsObj: Object,
  },

  components: {
    CreatePostTextEditor,
    imageEditor,
  },
  data() {
    return {
      hideMe: true,
      autogrow: null,
      postContent: "",
      imgChosen: false,
      imageSrc: "",
      postCaption: "",
      showEditor: false,
    };
  },
  methods: {
    /**
     * Function to close the image upload section for create post
     * @public This is a public method
     * @param {none}
     */
    closeTextBox() {
      this.$emit("closeimageBox", false);
      this.postContent = null;
      this.postCaption = "";
    },
    /**
     * Function to recieve the content written inside the post from the image editor file
     * @public This is a public method
     * @param {Boolean} content --> boolean sent from the create post section when clicking on text post to start uploading one
     */
    onTextClick(content) {
      this.postContent = content;
      if (
        content !== "" ||
        content !== null ||
        this.postCaption !== "" ||
        this.postCaption !== null
      ) {
        this.showEditor = true;
      }
      // console.log(this.postCaption);
      else if (this.postCaption == "") {
        console.log("here");
        this.showEditor = false;
      } else this.showEditor = true;
      // console.log(this.postCaption);
      // console.log(content);
    },

 /**
     * Function to recieve the caption written inside the post from the image content editor file
     * @public This is a public method
     * @param {Boolean} content --> boolean sent from the create post section when clicking on text post to start uploading one
     */
    onPostCaption(content) {
      this.postCaption = content;
      if (content === "" || content === null) {
        // console.log("fadyyy")
        this.showEditor = false;
      } else this.showEditor = true;
      // console.log(content);
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
      console.log("CREATE POST image *****************");
      // console.log(this.postTitle + this.postContent);
      if (this.isMockServer(Browser().baseURL))
        myRoute = Browser().baseURL + "/create_post";
      else myRoute = Browser().baseURL + `/${this.blogId}/create_post`;
      try {
        await axios
          .post(
            myRoute,
            {
              postHtml: this.postContent + this.postCaption,
              type: "image",
              tags: [" "],
              state: "published",
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((res) => {
            // this.$emit("closeTextBox", false);
            this.postContent = "";
            this.postCaption = "";
            console.log(res.data);
            this.closeTextBox();
          });
      } catch (e) {
        console.error(e);
      }
    },
  },

  computed: {
     /**
     * Function to get id of the blog from the store
     * @public This is a public method
     * @param {none}
     */
    blogId: function () {
      return this.$store.state.user.primaryBlogId;
    },
    /**
     * Function to know if the image upload post should appear or not
     * @public This is a public method
     * @param {none}
     */
    postToBegin: {
      get() {
        return this.imagePost;
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
      if (this.postContent === "" || this.postContent === null) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style>
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

.imgUpload {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* height: 100px; */
}
</style>
