<template>
  <md-dialog v-bind:md-active.sync="postToBegin" v-on:keyup.esc="closeTextBox">
    <md-dialog-content>
      <div class="audioMainDiv">
        <div class="uploadAudio" v-show="!showAudio">
          <div class="audioStaff">
            <label for="audioUpload" class="customAudioUpload">
              <b-icon
                icon=" headphones"
                font-scale="3.5"
                style="color: #a3a3a3"
              ></b-icon>
              <p>Upload an audio</p>
            </label>

            <input
              id="audioUpload"
              type="file"
              name="filefield"
              accept="audio/mp3 "
              ref="fileInput"
              @input="audioSelected"
            />
            <button @click="uploadAudioDone" class="success">
              Insert the audio
            </button>
          </div>
        </div>

        <!-- v-show="srcs == ''" -->

        <!-- <audio
          controls
          :src="this.srcs[0]"
          class="audioShown"
          v-show="srcs != ''"
        ></audio> -->

        <audio
          controls
          :src="audioURL[0]"
          class="audioShown"
          v-show="showAudio"
        ></audio>
        <button class="exitURL" v-show="showAudio" v-on:click="uploadAudio">
          <b-icon
            icon="x-circle-fill"
            font-scale="1.4"
            style="color: red"
          ></b-icon>
        </button>
      </div>

      <audioEditor v-on:childToParent="onTextClick" />

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
import audioEditor from "./editors/linkEditor.vue";
import Browser from "../../mocks/browser";
import axios from "axios";

/**
 *  Uploading, dragging/dropping audios file
 * @example [none]
 */
export default {
  components: {
    audioEditor,
  },
  props: {
    audioPost: {
      type: Boolean,
    },
  },
  data() {
    return {
      dt: "",
      AudiosUploaded: [],
      srcs: [],
      audioSrc: [],
      audioURL: "",
      urlChosen: false,
      showEditor: false,
      postTitle: "",
      showAudio: false,
    };
  },

  methods: {
    closeTextBox() {
      this.$emit("closeAudioBox", false);
      this.postContent = null;
      this.srcs = [];
      this.showAudio = false;
      this.audioURL = [];
    },
    /**
     * Function to take the uploaded audios and save them in an array
     * @public This is a public method
     * @param {none}
     */
    audioSelected(e) {
      let input = this.$refs.fileInput;
      let file = input.files;
      let datas = e.target.files || e.dataTransfer.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.srcs.push(e.target.result);
        };
        reader.readAsDataURL(file[0]);

        this.readFile(datas);
      }
    },

    readFile(files) {
      var vm = this;
      for (var index = 0; index < files.length; index++) {
        var file = { file: "" };
        var reader = new FileReader();
        reader.onload = function (event) {
          file.file = event.target.result;
          vm.srcs.push(file);
        };
        reader.readAsDataURL(files[index]);
      }

      // this.tryme()
    },

    async uploadAudioDone() {
      this.audioSrc.push(this.srcs[0]);

      let myRoute = "";
      if (this.isMockServer(Browser().baseURL))
        myRoute = Browser().baseURL + "/uploadImg";
      else myRoute = Browser().baseURL + `/uploadImg`;

      try {
        await axios
          .post(
            myRoute,
            {
              file: this.audioSrc,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((res) => {
            console.log("audio url wesl elhamdullahh");
            console.log(res.data);

            this.audioURL = res.data.images;
            this.showAudio = true;
            this.postTitle = this.audioURL[0];

            // console.log(res.data);
          });
      } catch (e) {
        console.log("error in uploading audio");
        console.error(e);
      }

      // console.log(this.postTitle);
    },

    onTextClick(content) {
      this.postContent = content;
      if (content === "" || content === null) {
        this.showEditor = false;
      }

      console.log(content);
    },

    uploadAudio() {
      this.showEditor = false;
      this.showAudio = false;
      this.srcs = [];
    },

    isMockServer(baseUrl) {
      if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
        return false;
      else return true;
    },

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
              postHtml:
                "<audio controls style= 'width: 600px;' src='" +
                this.audioURL[0] +
                "'></audio>" +
                +this.postContent,
              type: "audio",
              state: "published",
              tags: [],
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
            this.postTitle = "";
            console.log(res.data);
            this.closeTextBox();
          });
      } catch (e) {
        console.log("^^^^^^^^^^^^^^^^^^");
        console.error(e);
      }
    },
  },

  computed: {
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
        return this.audioPost;
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
      if (this.audioURL == []) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
.audioMainDiv {
  /* border-bottom: 2px dashed #ccc;
  border-top: 2px dashed #ccc; */
  color: rgb(161, 159, 159);
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 28vw;
  height: 20vh;
  cursor: pointer;
  padding-bottom: 10px;
  /* padding-top:30px ; */
  /* padding: 20px; */

  /* margin: 0;
  padding: 0; */
  /* position: relative; */
  /* left: 0; */
}
input[type="file"] {
  cursor: pointer;
  display: none;
}

.uploadAudio {
  /* padding: 6px 12px; */
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* width: 100vw; */
  align-items: center;
  /* padding-top: 40px; */
}
.customAudioUpload {
  cursor: pointer;
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.uploadAudio p {
  font-size: 14px;
  cursor: pointer;
}

.webAudioDiv {
  background-color: white;
  cursor: text;
}

#inputUrl {
  outline: 0px solid transparent;
  border: none;
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

.audioShown {
  width: 600px;
  border: none;
}

.exitURL {
  padding-left: 20px;
  padding-right: 10px;
}

.success {
  font-family: inherit;
  font-size: 100%;
  /* padding: 0.5em 1em; */
  color: white;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid #999;
  border: transparent;
  background-color: #e6e6e6;
  text-decoration: none;
  border-radius: 2px;
  cursor: pointer;
  background: rgb(73, 194, 101);
  /* padding-bottom: 20px; */
  height: 40px;
  padding: 6px 10px 10px 10px;
  color: white;
  margin: 40px;
}

.audioStaff {
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
}
</style>
