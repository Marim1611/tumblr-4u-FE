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
          id="imgUrl"
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
import Browser from "../../../mocks/browser";

/**
 *  Uploading images modal
 * @example [none]
 */
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
      imagesUploaded: [],
      imagesURLS: [],
    };
  },
  computed: {
    blogId: function () {
      return this.$store.state.primaryBlogId;
    },

    /**
     * Function to check fir the validity of image link
     * @public This is a public method
     * @param {none}
     */
    validImage() {
      if (this.imageSrc != "")
        return (
          this.imageSrc.match(/unsplash/) !== null ||
          this.imageSrc.match(/\.(jpeg|jpg|gif|png)$/) !== null
        );
      return true;

      //   for (var i = 0; i < this.imagesUploaded.length; i++) {
      //     if (
      //       this.imagesUploaded[i].match(/unsplash/) !== null ||
      //       this.imagesUploaded[i].match(/\.(jpeg|jpg|gif|png)$/) !== null
      //     ) {
      //       alert("Please enter a valid image!");

      //       flag = false;
      //       return false;
      //     } else {
      //       flag = true;
      //     }
      //   }

      //   return flag;
      // },
    },
  },
  methods: {
    showModal(command) {
      this.command = command;
      this.show = true;
    },

    isMockServer(baseUrl) {
      if (baseUrl == "http://tumblr4u.eastus.cloudapp.azure.com:5000")
        return false;
      else return true;
    },

    /**
     * Function to send the src of the image chosen to the server and gets a url instead
     * @public This is a public method
     * @param {none}
     */
    async vfileUploaded(file) {
      // console.log(file.dataURL);
      this.imagesUploaded.push(file.dataURL);

      let myRoute = "";
      if (this.isMockServer(Browser().baseURL))
        myRoute = Browser().baseURL + "/uploadImg";
      else myRoute = Browser().baseURL + `/uploadImg`;
      console.log("UPLOADING IMAGE: images uploaded--> ");
      console.log(this.imagesUploaded);
      let formData = new FormData();

      formData.append("file", this.imagesUploaded);

      try {
        await axios
          .post(
            myRoute,
            {
              file: this.imagesUploaded,
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((res) => {
            console.log("images url weslo elhamdullahh");
            console.log(res.data);
            this.imagesURLS = res.data.images;
            // console.log("images url weslo elhamdullahh");
            // console.log(res.data.file);
          });
      } catch (e) {
        console.log("error in uploading imgs");
        console.error(e);
      }

      console.log(this.imagesURLS);
    },

    /**
     * Function to insert the image in the editor
     * @public This is a public method
     * @param {none}
     */
    insertImage() {
      if (this.imageSrc === "") {
        console.log("inserting uploaded img");
        console.log("this.imagesUploaded");

        for (var i = 0; i < this.imagesUploaded.length; i++) {
          const data = {
            command: this.command,
            data: {
              // src:this.imagesUploaded,

              src: this.imagesURLS[i],
            },
          };

          this.$emit("onConfirm", data);
        }
      } else {
        console.log("inserting url img");
        console.log("this.imageSrc");

        const data = {
          command: this.command,
          data: {
            src: this.imageSrc,
          },
        };
        this.$emit("onConfirm", data);
      }

      // const data = {
      //   command: this.command,
      //   data: {
      //     src: this.imageSrc,
      //   },
      // };
      // this.$emit("onConfirm", data);
      this.closeModal();
    },

    closeModal() {
      this.urlChosen = false;
      this.show = false;
      this.imageSrc = "";
      this.imagesUploaded = [];
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
  border-bottom: 2px dashed #ccc;
  border-top: 2px dashed #ccc;
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
