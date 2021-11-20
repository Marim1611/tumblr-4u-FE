<template>
  <md-dialog v-bind:md-active.sync="postToBegin" v-bind:md-close-on-esc="false">
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
        <v-btn
          v-bind:disabled="disablePosting"
          v-bind:class="{
            disabledBtn: this.disablePosting,
            nonDisabledBtn: !this.disablePosting,
          }"
          v-on:click="postDone"
        >
          Post
        </v-btn>
      </div>
    </md-dialog-content>
  </md-dialog>
</template>

<script>
import CreatePostUploadImage from "./CreatePostUploadImage.vue";
 
export default {
  props: {
    imagePost: {
      type: Boolean,
    },
  },
  components: {
    'CreatePostUploadImage':CreatePostUploadImage,
     
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
    closeTextBox() {
      this.$emit("closeimageBox", false);
      this.postContent = null;
      this.postTitle = null;
    },

    onTextClick(content) {
      this.postContent = content;
    },
    postDone() {
      console.log(this.$refs.titleRefs.$el.outerHTML);
    },
  },

  computed: {
    postToBegin: {
      get() {
        return this.imagePost;
      },
      set(newVal) {
        return newVal;
      },
    },

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
  padding: 0;
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
  font-size: 13px;
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
}
.closeBtn {
  background-color: #9da6af;
  color: white;
  cursor: pointer;
}

.disabledBtn {
  background-color: #00b8ff;
  position: absolute;
  right: 24px;
  color: hsla(0, 0%, 100%, 0.5);
  cursor: default;
}
</style>
