<template>
  <div>
    <div
      class="createPost"
      v-bind:style="{ 'background': homeTheme[homeThemeIndex].cardColor }"
    >
      <ul>
        <li>
          <button v-on:click="textUpload">
            <button class="iconAnimation">
              <b-icon
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
                icon="type"
                font-scale="2.5"
              ></b-icon>
            </button>

            <p
              v-bind:style="{
                color: homeTheme[homeThemeIndex].fontColor,
                'font-family': homeTheme[homeThemeIndex].fontStyle,
              }"
            >
              Text
            </p>
          </button>
        </li>
        <li>
          <button v-on:click="imageUpload">
            <button class="iconAnimation">
              <b-icon
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
                icon="camera"
                font-scale="2.5"
              ></b-icon>
            </button>
            <p
              v-bind:style="{
                color: homeTheme[homeThemeIndex].fontColor,
                'font-family': homeTheme[homeThemeIndex].fontStyle,
              }"
            >
              Photo
            </p>
          </button>
        </li>
        <li>
 
          <button v-on:click="quoteUpload">
            <button class="iconAnimation">
              <b-icon
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
                icon="chat-quote-fill"
                font-scale="2.5"
              ></b-icon>
            </button>
 
            <p
              v-bind:style="{
                color: homeTheme[homeThemeIndex].fontColor,
                'font-family': homeTheme[homeThemeIndex].fontStyle,
              }"
            >
              Quote
            </p>
          </button>
        </li>
        <li>
          <button>
 
            <button class="iconAnimation">
              <b-icon
                icon="link45deg"
                font-scale="2.5"
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
              >
              </b-icon>
            </button>

 
            <p
              v-bind:style="{
                color: homeTheme[homeThemeIndex].fontColor,
                'font-family': homeTheme[homeThemeIndex].fontStyle,
              }"
            >
              Link
            </p>
          </button>
        </li>
        <li>
          <button>
 
            <button class="iconAnimation">
              <b-icon
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
                icon=" chat-dots-fill"
                font-scale="2.5"
              ></b-icon>
            </button>
 

            <p
              v-bind:style="{
                color: homeTheme[homeThemeIndex].fontColor,
                'font-family': homeTheme[homeThemeIndex].fontStyle,
              }"
            >
              Chat
            </p>
          </button>
        </li>
        <li>
          <button>
 
            <button class="iconAnimation">
              <b-icon
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
                icon=" headphones"
                font-scale="2.5"
              ></b-icon>
            </button>
 
            <p
              v-bind:style="{
                color: homeTheme[homeThemeIndex].fontColor,
                'font-family': homeTheme[homeThemeIndex].fontStyle,
              }"
            >
              Audio
            </p>
          </button>
        </li>
        <li>
          <button>
 
            <button class="iconAnimation">
              <b-icon
                v-bind:style="{ color: homeTheme[homeThemeIndex].fontColor }"
                icon="camera-reels"
                font-scale="2.5"
              ></b-icon>
            </button>
 
            <p
              v-bind:style="{
                color: homeTheme[homeThemeIndex].fontColor,
                'font-family': homeTheme[homeThemeIndex].fontStyle,
              }"
            >
              Video
            </p>
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
        
        font-scale="2.5"
        style="color: #a3a3a3"
      ></b-icon>
      <span v-show="selfieText">Take a selfie</span>
    </button>
    <br />
    <br /> -->

    <CreatePostImage
      v-bind:imagePost="imageChosen"
      v-on:closeimageBox="closeImage($event)"
    />

    <CreatePostText
      v-bind:textPost="textChosen"
      v-on:closeTextBox="closeText($event)"
    ></CreatePostText>

    <CreatePostQuote
      v-bind:quotePost="quoteChosen"
      v-on:closeTextBox="closeQuote($event)"
    >
    </CreatePostQuote>
    
  </div>
</template>

<script>
import CreatePostImage from "./CreatePostImage.vue";
import CreatePostText from "./CreatePostText.vue";
import CreatePostQuote from "./CreatePostQuote.vue";
/**
 *  Create post section
 * @example [none]
 */
export default {
  components: {
    CreatePostImage,
    CreatePostText,
    CreatePostQuote,
  },
  data() {
    return {
      chooseTypeOfPost: true, // text,image,video..
      selfieText: false,
      textChosen: false,
      imageChosen: false,
      quoteChosen: false,
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
    /**
     * Function to open the text upload box
     * @public This is a public method
     * @param {none}
     */
    textUpload: function () {
      this.textChosen = true;
    },
    /**
     * Function to close the text upload box and return to the main page
     * @public This is a public method
     * @param {Boolean} textClosed
     */
    closeText(textClosed) {
      // console.log(text);
      this.textChosen = textClosed;
    },

    closeQuote(quoteClosed) {
      this.quoteChosen = quoteClosed;
    },
    /**
     * Function to open the image upload box
     * @public This is a public method
     * @param {none}
     */
    imageUpload: function () {
      this.imageChosen = true;
    },
    /**
     * Function to close the image upload box and return to the main page
     * @public This is a public method
     * @param {Boolean} imgClosed
     */
    closeImage: function (imgClosed) {
      this.imageChosen = imgClosed;
    },
 
    // videoUpload: function () {
    //   this.video = true;
    // },
    // audioUpload: function () {
    //   this.audio = true;
    // },
    // linkUpload: function () {
    //   this.link = true;
    // },
    quoteUpload() {
      this.quoteChosen = true;
    },
    // chatUpload: function () {
    //   this.chat = true;
    // },
  },
  computed: {
    /**
     * Function to adjust the theme of the section
     * @public This is a public method
     * @param {none}
     */
    homeTheme: function () {
      return this.$store.state.homeTheme;
    },
    homeThemeIndex: function () {
      return this.$store.state.homeThemeIndex;
    },
  },
};
</script>

<style scoped>
 
.createPost {
  display: flex;
  align-items: center;
  background-color: rgb(123, 123, 219);
  border-radius: 3px;
  box-sizing: border-box;
  /* display: flex; */
  width: 40%;
  /* margin: 100px;
  left: 200px; */
  min-height: 100px;
  position: absolute;
  /* flex-grow: 2;
  flex-shrink: 2; */
}
ul {
  position: absolute;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  flex-grow: 2;
  flex-shrink: 2;
}
li {
  position: relative;
  padding: 20px;
  list-style: none;
  flex-grow: 2;
  flex-shrink: 2;
  float: right;

 
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
  flex-grow: 4;
  flex-shrink: 4;
 
}
p {
  margin: 0;
  padding-top: 5px;
  flex-grow: 2;
  flex-shrink: 2;
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

.iconAnimation:hover {
  transform: scaleY(1.1);
}
</style>
