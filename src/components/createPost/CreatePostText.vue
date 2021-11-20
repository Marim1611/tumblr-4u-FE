<template>
  <!-- <div class="textBox"> -->
  <!-- <div id="header"> -->
  <!-- <p :style="{ 'flex-direction': 'row', color: 'gray' }">marimzayn</p> -->
  <!-- <b-icon
        id="icon"
        icon="gear-fill"  
        class="border rounded p-2"
        font-scale="1"
      ></b-icon> -->
  <!-- </div> -->
  <md-dialog v-bind:md-active.sync="postToBegin" >
    <md-dialog-content>
      <!-- <md-dialog-title>mariemzayn22</md-dialog-title> -->
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
      <!-- <v-divider /> -->
      <!-- <div class="footerBtns">
        <button class="closeBtn">Close</button>
        <div class="postOptions">
          <button></button>
          <v-divider />
        </div>
      </div> -->

      <!-- <md-dialog-actions> -->

      <!-- <md-button class="closeBtn" v-on:click="closeTextBox">Close</md-button>
        <md-button class="md-primary" v-on:click="textChosen = false"
          >Save</md-button
        > -->
      <!-- </md-dialog-actions> -->
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
              class="border rounded p-2"
              font-scale="1.2"
            ></b-icon>
          </button> -->
      </div>
      <!-- </div> -->
    </md-dialog-content>
  </md-dialog>
</template>

<script>
import CreatePostTextEditor from "./CreatePostTextEditor.vue";
export default {
  props: {
    textPost: Boolean,
    
  },
  components: {
  'CreatePostTextEditor':CreatePostTextEditor,
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
      postContent: null,
      postTitle: null,
    };
  },
  methods: {
    // changepostOption(event) {
    //   let selectedIndex =
    //     event.target.options[event.target.options.selectedIndex];
    //   if (selectedIndex === 1) this.selectedPostOption = "Mariem";
    // },

    closeTextBox() {
      this.$emit("closeTextBox", false);
      this.postContent = null;
      this.postTitle = null;
    },

    onTextClick(content) {
      this.postContent = content;
    },
    postDone() {
      console.log(this.$refs.titleRefs.$el.outerHTML);
      // console.log(this.postContent);
    },
  },

  computed: {
    postToBegin: {
      get() {
        return this.textPost;
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
