<template>
  <div>
    <div class="CreatePost">
      <ul>
        <li>
          <button v-on:click="textUpload">
            <b-icon
              
              icon="type"
              class="border rounded p-2"
              font-scale="3"
              name="textButton"
            ></b-icon>

            <p>Text</p>
          </button>
        </li>
        <li>
          <button v-on:click="imageUpload">
            <b-icon
              icon="camera"
              class="border rounded p-2"
              font-scale="3"
              name="imgButton"
            ></b-icon>
            <p>Photo</p>
          </button>
        </li>
        <li>
          <button v-on:click="quoteUpload">
            <b-icon
              icon="chat-quote-fill"
              class="border rounded p-2"
              font-scale="3"
              name="quoteButton"
            ></b-icon>
            <p>Quote</p>
          </button>
        </li>
        <li>
          <button v-on:click="linkUpload">
            <b-icon
              icon="link45deg"
              class="border rounded p-2"
              font-scale="3"
              name="linkButton"
            >
            </b-icon>
            <p>Link</p>
          </button>
        </li>
        <li>
          <button v-on:click="chatUpload">
            <b-icon
              icon=" chat-dots-fill"
              class="border rounded p-2"
              font-scale="3"
              name="chatButton"
            ></b-icon>

            <p>Chat</p>
          </button>
        </li>
        <li>
          <button v-on:click="audioUpload">
            <b-icon
              icon=" headphones"
              class="border rounded p-2"
              font-scale="3"
              name="audioButton"
            ></b-icon>
            <p>Audio</p>
          </button>
        </li>
        <li>
          <button v-on:click="videoUpload">
            <b-icon
              icon="camera-reels"
              class="border rounded p-2"
              font-scale="3"
              name="videoButton"
            ></b-icon>
            <p>Video</p>
          </button>
        </li>
      </ul>
    </div>

    <!-----------------------Selfie part !-------------------->
    <!-- <button
      class="selfie"
      @mousemove="SelfieTextShow"
      @mouseleave="SelfieTextHide"
    > -->
    <!--change this icon, w byghmez kaman lama ba hover!-->
    <!-- <b-icon
        icon="emoji-smile"
        class="border rounded p-2"
        font-scale="2"
        style="color: #a3a3a3"
      ></b-icon>
      <span v-show="selfieText">Take a selfie</span>
    </button>

    <br />
    <br /> -->

    <HomeCreatePostImage
      v-bind:imagePost="imageChosen"
      v-on:closeimageBox="closeImage($event)"
    />

    <HomeCreatePostText
      v-bind:textPost="textChosen"
      v-on:closeTextBox="closeText($event)"
    ></HomeCreatePostText>
  </div>
</template>

<script>
import HomeCreatePostImage from "./HomeCreatePostImage.vue";
import HomeCreatePostText from "./HomeCreatePostText.vue";
export default {
  components: {
    HomeCreatePostImage,
    HomeCreatePostText,
  },
  data() {
    return {
      chooseTypeOfPost: true, // text,image,video..
      selfieText: false,
      textChosen: false,
      imageChosen: false,
      video: false,
      audio: false,
      link: false,
      quote: false,
      chat: false,
      dialog: false,
    };
  },
  methods: {
    // SelfieTextShow: function () {
    //   this.selfieText = true;
    // },
    // SelfieTextHide: function () {
    //   this.selfieText = false;
    // },
    textUpload: function () {
      this.textChosen = true;
    },
    closeText: function (text) {
      // console.log(text);
      this.textChosen = text;
    },
    imageUpload: function () {
      this.imageChosen = true;
    },
    closeImage: function (img) {
      this.imageChosen = img;
    },
    videoUpload: function () {
      this.video = true;
    },
    audioUpload: function () {
      this.audio = true;
    },
    linkUpload: function () {
      this.link = true;
    },
    quoteUpload: function () {
      this.quote = true;
    },
    chatUpload: function () {
      this.chat = true;
    },
  },
};
</script>

<style scoped>
.CreatePost {
  align-items: center;
  background-color: rgb(123, 123, 219);
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  width: 40%;
  margin: 100px;
  left: 200px;
  min-height: 100px;
  position: relative;
}

ul {
  position: absolute;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
}
li {
  position: relative;
  padding: 20px;
  list-style: none;
}

button {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  user-select: none;
  font-size: 16px;
  font-weight: 400;
  height: 100%;
}

p {
  margin: 0;
  padding-top: 5px;
}

.selfie {
  display: flex;
  flex-direction: row;
}

.selfie span {
  padding: 5px;
  color: #a3a3a3;
}

.changeOpacity {
  opacity: 0.5;
}
</style>
