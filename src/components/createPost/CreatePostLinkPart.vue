<template>
  <md-dialog v-bind:md-active.sync="postToBegin" v-on:keyup.esc="closeTextBox">
    <md-dialog-content>
      <div class="postLink" v-show="!showLink">
        <v-textarea
          id="linkTextArea"
          auto-grow
          placeholder="Type or paste a URL"
          v-model="urlString"
          v-bind:rules="rules"
        ></v-textarea>
      </div>

      <div class="showLink" v-show="showLink">
        <button class="exitURL" v-on:click="writeLink">
          <b-icon
            icon="x-circle-fill"
            font-scale="1.4"
            style="color: red"
          ></b-icon>
        </button>
        <a :href="urlString">{{ urlString }}</a>
      </div>
      <linkEditor v-on:childToParent="onTextClick" v-show="showEditor" />
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
import axios from "axios";
import Browser from "../../mocks/browser";
import linkEditor from "./editors/linkEditor.vue";

/**
 *  Create post for link
 * @example [none]
 */
export default {
  components: {
    linkEditor,
  },
  props: {
    linkPost: Boolean,
  },

  data() {
    return {
      autogrow: null,
      textChosen: this.linkPost,
      urlString: "",
      rules: [(value) => !!value, (value) => this.validURL(value)],
      showEditor: false,
      postContent: "",
      validUrlDone: false,
      showLink: false,
    };
  },

  methods: {
    /**
     * Function to open the write link textarea
     * @public This is a public method
     * @param {none}
     */
    writeLink() {
      this.showLink = false;
      this.urlString = "";
    },

    /**
     * Function to check the validity of the link
     * @public This is a public method
     * @param {none}
     */
    validURL(str) {
      var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      );

      var validUrl = !!pattern.test(str);

      if (validUrl) {
        this.validUrlDone = true;
        // if (this.postContent != "" || this.postContent != null)
        this.showEditor = true;
        this.showLink = true;
      } else {
        if (this.postContent === "" || this.postContent === null) {
          this.showEditor = false;
        }
        this.validUrlDone = false;
        this.showLink = false;
      }
      return validUrl;
    },

    /**
     * Function to close the link upload section for create post
     * @public This is a public method
     * @param {none}
     */
    closeTextBox() {
      this.$emit("closeTextBox", false);
      this.postContent = "";
      this.showLink = false;
      this.urlString = "";
    },
    /**
     * Function to recieve the content written inside the post from the link editor file
     * @public This is a public method
     * @param {Boolean} content --> boolean sent from the create post section when clicking on link post to start uploading one
     */
    onTextClick(content) {
      this.postContent = content;
      if (content === "" || content === null) {
        if (!this.validUrlDone) this.showEditor = false;
      }
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
      console.log("CREATE POST Link *****************");
      // console.log(this.postTitle + this.postContent);
      if (this.isMockServer(Browser().baseURL))
        myRoute = Browser().baseURL + "/create_post";
      else myRoute = Browser().baseURL + `/${this.blogId}/create_post`;
      try {
        await axios
          .post(
            myRoute,
            {
              postHtml:
                '<a href="' +
                this.urlString +
                '">' +
                this.urlString +
                "</a>" +
                this.postContent,
              state: "published",

              type: "link",
              tags: [" "],
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((res) => {
            this.$emit("closeTextBox", false);
            this.postContent = "";
            console.log(res.data);
          });
      } catch (e) {
        console.log("^^^^^^^^^^^^^^^^^^");
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
     * Function to know if the text upload post should appear or not
     * @public This is a public method
     * @param {none}
     */
    postToBegin: {
      get() {
        return this.linkPost;
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
      if (!this.validUrlDone) {
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

#theTags {
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

.v-input.v-textarea > .v-input__control > .v-input__slot:before {
  border: none;
}

.primary--text:focus {
  outline: none !important;
  border: none !important;
  display: none;
}

.v-text-field > .v-input__control > .v-input__slot:after {
  background-color: transparent !important;
  border-color: transparent !important;
  border-style: none !important;
  border-width: 0 !important;
  transform: none !important;
}

.v-text-field.v-input--is-focused > .v-input__control > .v-input__slot:after {
  transform: none !important  ;
}

.v-textarea > textarea {
  max-width: 30vw;
  font-size: 36px;
  font-weight: 400;
  outline: none;
  border: none;
  font-family: inherit;
  resize: none;
}

.postLink {
  border-bottom: 2px dashed #ccc;
  border-top: 2px dashed #ccc;
  background-color: rgba(241, 241, 241, 0.842);
  align-items: center;
  font-size: 14px;
  color: black;
  font-style: Helvetica Neue, HelveticaNeue, Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
}

#linkTextArea {
  padding: 50px;
}

#imgUrl {
  padding-top: 50px;
  padding-left: 10px;
}

.exitURL {
  float: right;
  cursor: pointer;
}

.showLink {
  padding-bottom: 20px;
}
</style>
