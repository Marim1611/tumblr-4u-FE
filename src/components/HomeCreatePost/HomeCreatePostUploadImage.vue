<template>
  <div class="imageMainDiv">
    <div
      draggable="true"
      @dragover.prevent="tts"
      @drop.prevent="ttrs"
      class="uploadImage"
      v-if="!urlChosen"
    >
      <label for="imageUpload" class="customImageUpload">
        <b-icon
          icon="camera-fill"
          class="border rounded p-2"
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
        accept="image/* "
        ref="fileInput"
        @input="ImageSelected"
      />
    </div>

    <!-- <div v-for="src in srcs" :key="src.id">
        <img :src="src.file" />
      </div> -->
    <v-divider v-if="!urlChosen"> </v-divider>

    <div class="uploadImageFromWeb" @click="webImage" v-if="!urlChosen">
      <b-icon
        icon="cloud-download-fill"
        class="border rounded p-2"
        font-scale="3.5"
        style="color: #a3a3a3"
      ></b-icon>
      <p>Add photo from web</p>
    </div>
    <div v-if="urlChosen" class="webImageDiv">
      <input type="url" name="" id="inputUrl" placeholder="Paste a URL" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dt: "",
      ImagesUploaded: [],
      srcs: [],
      urlChosen: false,
    };
  },

  methods: {
    ImageSelected: function (e) {
      let input = this.$refs.fileInput;
      let file = input.files;
      let datas = e.target.files || e.dataTransfer.files;

      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.srcs.push(e.target.result);
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

    webImage: function () {
      this.urlChosen = true;
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
  width: 100vw;
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
</style>
