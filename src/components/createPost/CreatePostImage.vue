<template>
  <md-dialog v-bind:md-active.sync="postToBegin">
    <md-dialog-content>
      <CreatePostUploadImage />
      <div v-if="imgChosen">
        <v-textarea
          name="input-7-1"
          filled
          placeholder="Title"
          auto-grow
          rows="2"
          ref="titleRefs"
          v-model="postTitle"
        ></v-textarea>

        <CreatePostTextEditor v-on:childToParent="onTextClick" />
        <input type="text" placeholder="#tags" id="theTags" />
        <md-divider></md-divider>
      </div>

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
import CreatePostUploadImage from "./CreatePostUploadImage.vue";
/**
 * Name Create post for images
 * @example [none]
 */
export default {
  props: {
    imagePost: {
      type: Boolean,
    },
  },
  components: {
    CreatePostUploadImage: CreatePostUploadImage,
  },

  data() {
    return {
      autogrow: null,
      postContent: null,
      postTitle: null,
      imgChosen: false,
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
      this.postTitle = null;
    },

    /**
     * Function to recieve the content written inside the post from the text editor file
     * @public This is a public method
     * @param {Boolean} content --> boolean sent from the create post section when clicking on image post to start uploading one
     */
    onTextClick(content) {
      this.postContent = content;
    },

    /**
     * Function to publish the post and save its content
     * @public This is a public method
     * @param {none}
     */
    postDone() {
      console.log(this.$refs.titleRefs.$el.outerHTML);
    },
  },

  computed: {
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
      if (
        this.postContent === null &&
        (this.postTitle === null || this.postTitle === "")
      )
        return true;
      return false;
    },
  },
};
</script>

<style>
.v-textarea textarea {
  max-width: 30vw;
  font-size: 36px;
  font-weight: 400;
  outline: none;
  border: none;
  font-family: inherit;
  resize: none;
}

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
