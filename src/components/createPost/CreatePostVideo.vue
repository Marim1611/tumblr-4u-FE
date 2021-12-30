<template>
  <md-dialog v-bind:md-active.sync="postToBegin" v-on:keyup.esc="closeTextBox">
    <md-dialog-content>
      <div class="imageMainDiv">
        <div v-show="!urlChosen">
          <div
            draggable="true"
            @dragover.prevent="tts"
            @drop.prevent="ttrs"
            class="uploadImage"
          >
            <label for="imageUpload" class="customImageUpload">
              <b-icon
                icon="camera-fill"
                font-scale="3.5"
                style="color: #a3a3a3"
              ></b-icon>
              <p>Upload photos</p>
            </label>
            <input
              id="imageUpload"
              type="file"
              multiple
              name="filefield"
              accept="video/mp4,video/x-m4v,video/* "
              ref="fileInput"
              @input="ImageSelected"
            />
          </div>

          <!-- <div v-for="src in srcs" :key="src.id">
        <video controls :src="src.file" style="width: 800px"></video>
      </div> -->
          <v-divider> </v-divider>
        </div>
        <div class="uploadImageFromWeb" @click="webImage" v-show="urlChosen">
          <b-icon
            icon="cloud-download-fill"
            class="border rounded p-2"
            font-scale="3.5"
            style="color: #a3a3a3"
          ></b-icon>
          <p>Add photo from web</p>
        </div>

        <div v-show="urlChosen" class="enterURL">
          <button class="exitURL" v-on:click="urlChosen = false">
            <b-icon
              icon="x-circle-fill"
              font-scale="1.4"
              style="color: red"
            ></b-icon>
          </button>

          <v-textarea
            v-model="imageSrc"
            id="imgUrl"
            auto-grow
            placeholder="Paste a URL"
          ></v-textarea>
        </div>
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
/**
 *  Uploading, dragging/dropping images file
 * @example [none]
 */
export default {
  props: {
    videoPost: {
      type: Boolean,
    },
  },
  data() {
    return {
      dt: "",
      ImagesUploaded: [],
      srcs: [],
      urlChosen: false,
    };
  },

  methods: {
    closeTextBox() {
      this.$emit("closeVideoBox", false);
      this.postContent = null;
    },
    /**
     * Function to take the uploaded images and save them in an array
     * @public This is a public method
     * @param {none}
     */
    ImageSelected: function (e) {
      let input = this.$refs.fileInput;
      let file = input.files;
      let datas = e.target.files || e.dataTransfer.files;

      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.srcs.push(e.target.result);
          console.log(e.target.result);
        };
        reader.readAsDataURL(file[0]);

        var i;
        for (i = 0; i < datas.length; i++) {
          this.ImagesUploaded.push(datas[i]);
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
    },
    testfunc(event) {
      alert("dragdrop!");
      event.stopPropagation();
      event.preventDefault();
    },

    tts() {
      this.dt = "Drag here to upload files";
    },
    /**
     * Function to save the dragged photo in an array
     * @public This is a public method
     * @param {none}
     */
    ttrs(e) {
      let datas = e.target.files || e.dataTransfer.files;

      var i;
      for (i = 0; i < datas.length; i++) {
        this.ImagesUploaded.push(datas[i]);
      }

      this.readFile(datas);

      e.stopPropagation();
      e.preventDefault();
    },

    /**
     * Function to uppload image as a link (from browser, not finished yet)
     * @public This is a public method
     * @param {none}
     */
    webImage: function () {
      this.urlChosen = true;
    },
  },

  computed: {
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
      if (this.postContent === "" || this.postContent === null) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
.imageMainDiv {
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
  position: relative;
  /* left: 0; */
}
input[type="file"] {
  cursor: pointer;
  display: none;
}

.uploadImage,
.uploadImageFromWeb {
  /* padding: 6px 12px; */
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 100vw; */
  align-items: center;
}
.customImageUpload {
  cursor: pointer;
}
.uploadImage p {
  font-size: 14px;
  cursor: pointer;
}

.webImageDiv {
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
</style>
