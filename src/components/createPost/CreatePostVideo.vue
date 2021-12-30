<template>
  <md-dialog v-bind:md-active.sync="postToBegin" v-on:keyup.esc="closeTextBox">
    <md-dialog-content>
      <div class="videoMainDiv" v-show="!showVideo">
        <div v-show="!urlChosen" class="uploadVideoFromWeb">
          <label for="videoUpload" v-show="!showInsert">
            <b-icon
              icon="camera-reels"
              font-scale="3.5"
              style="color: #a3a3a3"
            ></b-icon>
            <p>Upload a video</p>
          </label>
          <input
            id="videoUpload"
            type="file"
            multiple
            name="filefield"
            accept="video/mp4,video/x-m4v,video/* "
            ref="fileInput"
            @input="videoSelected"
          />

          <button @click="uploadVideoDone" class="success" v-show="showInsert">
            Insert the video
          </button>

          <!-- <v-divider> </v-divider> -->
        </div>

        <!-- <div v-for="src in srcs" :key="src.id">
      </div> -->
        <div class="uploadVideoFromWeb" @click="webvideo">
          <b-icon
            icon="cloud-download-fill"
            font-scale="3.5"
            style="color: #a3a3a3"
          ></b-icon>
          <p>Add video from web</p>
        </div>

        <div v-show="urlChosen" class="enterURL">
          <v-textarea
            v-model="videoSrc"
            id="imgUrl"
            auto-grow
            placeholder="Paste a URL"
            v-bind:rules="rules"
          ></v-textarea>
        </div>
      </div>
      <button class="exitURL" v-show="showVideo" v-on:click="uploadVideo">
        <b-icon
          icon="x-circle-fill"
          font-scale="1.4"
          style="color: red"
        ></b-icon>
      </button>
      <video
        controls
        v-show="showVideo"
        :src="srcs[0]"
        style="width: 800px"
      ></video>

      <CreatePostTextEditor
        v-on:childToParent="onPostCaption"
        v-show="showEditor"
      />

      <!-- <div class="showLink" v-show="showLink">
        <button class="exitURL" v-on:click="writeLink">
          <b-icon
            icon="x-circle-fill"
            font-scale="1.4"
            style="color: red"
          ></b-icon>
        </button>
        <a :href="urlString">{{ urlString }}</a>
      </div> -->
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
import Browser from "../../mocks/browser";
import axios from "axios";
import CreatePostTextEditor from "./editors/imageContentEditor.vue";

/**
 *  Uploading, dragging/dropping videos file
 * @example [none]
 */
export default {
  components: { CreatePostTextEditor },
  props: {
    videoPost: {
      type: Boolean,
    },
  },
  data() {
    return {
      dt: "",
      videosUploaded: [],
      videoUrl: "",
      srcs: [],
      urlChosen: false,
      videoSrc: [],
      rules: [(value) => !!value, (value) => this.validURL(value)],
      showVideo: false,
      showEditor: false,
      showInsert: false,
    };
  },

  methods: {
    onPostCaption(content) {
      this.postCaption = content;
      if (content === "" || content === null) {
        // console.log("fadyyy")
        this.showEditor = false;
      } else this.showEditor = true;
      console.log(content);
    },
    validURL(str) {
      var pattern = new RegExp(
        "/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/"
      );

      var validUrl = !!pattern.test(str);
      return validUrl;
    },

    closeTextBox() {
      this.$emit("closeVideoBox", false);
      this.postCaption = null;
      this.srcs = [];
      this.showVideo = false;
      this.videoUrl = "";
      this.showInsert = false;
    },

    uploadVideo() {
      this.showEditor = false;
      this.showVideo = false;
      this.srcs = [];
      this.videoUrl = "";
      this.showInsert = false;
    },
    /**
     * Function to take the uploaded videos and save them in an array
     * @public This is a public method
     * @param {none}
     */
    videoSelected: function (e) {
      let input = this.$refs.fileInput;
      let file = input.files;
      let datas = e.target.files || e.dataTransfer.files;

      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.srcs.push(e.target.result);
          // console.log(e.target.result);
        };
        reader.readAsDataURL(file[0]);

        var i;
        for (i = 0; i < datas.length; i++) {
          this.videosUploaded.push(datas[i]);
        }
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

      this.showInsert = true;
    },

    /**
     * Function to uppload video as a link (from browser, not finished yet)
     * @public This is a public method
     * @param {none}
     */
    webvideo: function () {
      this.urlChosen = true;
    },

    isMockServer(baseUrl) {
      if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
        return false;
      else return true;
    },
    async uploadVideoDone() {
      this.videoSrc.push(this.srcs[0]);

      let myRoute = "";
      if (this.isMockServer(Browser().baseURL))
        myRoute = Browser().baseURL + "/uploadImg";
      else myRoute = Browser().baseURL + `/uploadImg`;

      console.log(this.videoSrc);
      try {
        await axios
          .post(
            myRoute,
            {
              file: this.videoSrc,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((res) => {
            console.log("video url wesl elhamdullahh");
            console.log(res.data);

            this.videoUrl = res.data.images;
            this.showVideo = true;
            this.postTitle = this.videoURL;
            this.showEditor = true;

            // console.log(res.data);
          });
      } catch (e) {
        console.log("error in uploading video");
        console.error(e);
      }

      // console.log(this.postTitle);
    },

    async postDone() {
      console.log(this.postCaption);
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
                "<video controls   style= 'width: 600px;' src='" +
                this.videoUrl +
                "'></video>" +
                "yarabb",
              type: "video",
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

            this.postCaption = "";
            this.srcs = "";
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
        return this.videoPost;
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
      if (!this.showVideo) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
.videoMainDiv {
  border-bottom: 2px dashed #ccc;
  border-top: 2px dashed #ccc;
  color: rgb(161, 159, 159);
  background-color: rgba(241, 241, 241, 0.842);
  display: flex;
  flex-direction: row;
  min-width: 28vw;
  height: 30vh;
  cursor: pointer;
  /* margin: 0;
  padding: 0; */
  /* position: relative; */
  /* display: flex;
  flex-direction: column; */
  justify-content: space-around;
  /* left: 0; */
}
input[type="file"] {
  cursor: pointer;
  display: none;
}

.uploadvideo,
.uploadVideoFromWeb {
  padding: 6px 12px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 100vw; */
  align-items: center;
}

.customvideoUpload {
  cursor: pointer;
  padding: 30px;
  height: 20px;
}

/* #imageUpload {
  padding-bottom: 30px;
  height: 20px;
} */

.uploadvideo p {
  font-size: 14px;
  cursor: pointer;
}

.webvideoDiv {
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

.exitURL {
  padding-left: 20px;
  padding-right: 10px;
}

.success {
  font-family: inherit;
  font-size: 100%;
  color: white;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid #999;
  border: transparent;
  background-color: #e6e6e6;
  text-decoration: none;
  border-radius: 2px;
  cursor: pointer;
  background: rgb(91, 156, 106);
  /* padding-bottom: 20px; */
  /* height: 40px; */
  padding: 6px;
  color: white;
  /* margin: 40px; */
}
</style>
