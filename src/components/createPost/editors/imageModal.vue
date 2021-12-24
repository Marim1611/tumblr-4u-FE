<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <div class="uploadingImg" v-show="!urlChosen">
        <vue-dropzone
          ref="myVueDropzone"
          id="dropzone"
          @vdropzone-success="vfileUploaded"
          :options="dropzoneOptions"
        >
        </vue-dropzone>

        <div class="webImg" v-on:click="urlChosen = true">
          <p>ADD PHOTO FROM WEB</p>
        </div>
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
          name="input-7-1"
          auto-grow
          placeholder="Paste a URL"
        ></v-textarea>
      </div>

      <footer class="modal-footer">
        <button
          @click="insertImage"
          class="success"
          :title="validImage ? '' : 'Image URL needs to be valid'"
          :disabled="!validImage"
        >
          Add Image
        </button>
        <button @click="show = false" class="danger">Close</button>
      </footer>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import axios from "axios";

export default {
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      imageSrc: "",
      command: null,
      show: false,
      urlChosen: false,
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 200,
        dictDefaultMessage: "UPLOAD A PHOTO",
      },
    };
  },
  computed: {
    validImage() {
      return (
        this.imageSrc.match(/unsplash/) !== null ||
        this.imageSrc.match(/\.(jpeg|jpg|gif|png)$/) != null
      );
    },
  },
  methods: {
    showModal(command) {
      this.command = command;
      this.show = true;
    },
    vfileUploaded(file) {
      this.imageSrc = "https://source.unsplash.com/random/400x100";

      // await axios
      //   .post(Browser().baseURL + "/imageUpload", {
      //     imageSrc: this.$refs.myVueDropzone.getAcceptedFiles()[0].dataURL,
      //   })
      //   .then((res) => {
      //     console.log(res.data);
      //   });

      // await axios.get(Browser().baseURL + "/imageUpload").then((res) => {
      //   this.imageSrc = res.data.imageUpload[0].imageUrl;

      //   // console.log(res);
      // });
      // },
    },

    insertImage() {
      const data = {
        command: this.command,
        data: {
          src: this.imageSrc,
        },
      };
      this.$emit("onConfirm", data);
      this.closeModal();
    },

    closeModal() {
      this.urlChosen = false;
      this.show = false;
      this.imageSrc = "";
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  width: 90%;
  background-color: #fff;
  padding: 30px;
}

.modal-footer {
  margin-top: 10px;
  border: none;
}

label {
  display: block;
  margin: 0.25em 0;
}

.modal-footer button {
  font-family: inherit;
  font-size: 100%;
  padding: 0.5em 1em;
  color: white;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  border: 1px solid #999;
  border: transparent;
  background-color: #e6e6e6;
  text-decoration: none;
  border-radius: 2px;
  cursor: pointer;
}

.modal-footer button.danger {
  background: rgb(202, 60, 60);
}

.modal-footer button.success {
  background: rgb(28, 184, 65);
}

.modal-footer button:disabled {
  opacity: 0.3;
}

.modal-footer button + button {
  margin-left: 10px;
}

.uploadingImg {
  color: rgb(161, 159, 159);
  background-color: white;
  display: flex;
  flex-direction: row;
}

.webImg:hover {
  background-color: rgba(241, 241, 241, 0.842);
}

.webImg {
  color: #777777;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15vw;
  align-items: center;
  font-size: 16px;
  border: 2px solid #e5e5e5;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  align-items: center;
}

.enterURL {
  /* border-bottom: 2px dashed #ccc;
  border-top: 2px dashed #ccc; */
  background-color: white;
  align-items: center;
  font-size: 14px;
  color: black;
  font-style: Helvetica Neue, HelveticaNeue, Helvetica, Arial, sans-serif;
}

.exitURL {
  float: right;
  cursor: pointer;
}
</style>
