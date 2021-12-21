<template>
  <!-- 
    skip button
    whow interests selected in another page for few seconds
    make buttons above anything and scroll horizontally
    -->

  <div class="mainDiv">
    <div class="selectedItemsDone">
      <div class="btns">
        <router-link to="/home">
          <button class="skipButton">Skip</button>
        </router-link>

        <router-link
          to="/home"
          v-bind:disabled="this.counter == 0"
          tag="button"
        >
          <button
            v-bind:class="{
              nextClass: this.counter >= 5,
              selectClass: this.counter < 5,
            }"
            v-bind:disabled="this.counter == 0"
            v-on:click="doneSelection"
          >
            <span class="selectionInfo" v-if="this.counter < 5">
              Select
              <span class="counterInfo" v-if="this.counter < 5">
                {{ 5 - this.counter }}
              </span>
            </span>
            <progress
              :value="counter"
              :max="6"
              v-if="this.counter < 5"
            ></progress>

            <span v-else> Next </span>
          </button>
        </router-link>
      </div>

      <div class="itemsDiv">
        <li v-for="(item, index) in selectedItems" v-bind:key="item.id">
          <div
            class="itemsBox"
            v-on:click="itemRemoveSelection(item)"
            v-bind:style="{
              backgroundColor: coloredItems[index],
            }"
          >
            <p>{{ item }}</p>
          </div>
        </li>

        <li v-for="item in 5" v-bind:key="item">
          <div class="itemsBox" v-if="selectedItems[item - 1] == null" />
        </li>
      </div>

      <md-divider></md-divider>
    </div>

    <div class="selectInterests">
      <div class="cardsView">
        <div class="descriptionInterests">
          <h1>What're you into?</h1>
          <p>Tell us what you like and we'll get you the good stuff.</p>
        </div>
        <li v-for="card in cards" v-bind:key="card.id">
          <div
            class="cardsStyle"
            v-on:click="cardSelected(card)"
            v-bind:style="cardImage(card.background)"
          >
            <p>{{ card.title }}</p>
            <b-icon
              icon="check2"
              v-if="card.selected"
              class="checkIcon"
            ></b-icon>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Browser from "../../mocks/browser";

export default {
  data() {
    return {
      counter: 0,
      selectedItems: [],
      coloredItems: [],

      cards: [
        {
          title: "Comics",
          background: "img1.jpg",
          selected: false,
        },
        {
          title: "Anime",
          background: "img2.png",
          selected: false,
        },
        {
          title: "History",
          background: "img3.gif",
          selected: false,
        },
        {
          title: "News",
          background: "img4.gif",
          selected: false,
        },
        {
          title: "Writers",
          background: "img5.jpg",
          selected: false,
        },
        {
          title: "Illustration",
          background: "img6.jpg",
          selected: false,
        },
        {
          title: "Actors",
          background: "actors.gif",
          selected: false,
        },
        {
          title: "Pets",
          background: "pets.jpg",
          selected: false,
        },
        {
          title: "Student",
          background: "student.jpg",
          selected: false,
        },
        {
          title: "Education",
          background: "education.jpg",
          selected: false,
        },
        {
          title: "Movies",
          background: "movies.gif",
          selected: false,
        },
        {
          title: "Museums",
          background: "museums.jpg",
          selected: false,
        },
        {
          title: "Television",
          background: "tv.gif",
          selected: false,
        },
        {
          title: "Cute",
          background: "cute.gif",
          selected: false,
        },
        {
          title: "Parenting",
          background: "parenting.jpg",
          selected: false,
        },
        {
          title: "Curators",
          background: "curators.jpg",
          selected: false,
        },
        {
          title: "Developers & Startups",
          background: "dev.png",
          selected: false,
        },
        {
          title: "Technology",
          background: "tech.jpg",
          selected: false,
        },
        {
          title: "Quotes",
          background: "quotes.jpg",
          selected: false,
        },
        {
          title: "Food",
          background: "food.jpg",
          selected: false,
        },
        {
          title: "Nonprofits",
          background: "nonprofits.jpg",
          selected: false,
        },
        {
          title: "Culture",
          background: "culture.jpg",
          selected: false,
        },
        {
          title: "Sports",
          background: "sports.jpg",
          selected: false,
        },
        {
          title: "Books & libraries",
          background: "books.jpg",
          selected: false,
        },
        {
          title: "Fashion",
          background: "fashion.jpg",
          selected: false,
        },
        {
          title: "Photograhy",
          background: "photography.jpg",
          selected: false,
        },
        {
          title: "Politics",
          background: "politics.jpg",
          selected: false,
        },
        {
          title: "Home & Lifestyle",
          background: "home.jpg",
          selected: false,
        },
        {
          title: "Nature",
          background: "nature.jpg",
          selected: false,
        },
        {
          title: "Gaming",
          background: "gaming.jpg",
          selected: false,
        },
        {
          title: "Design",
          background: "img7.gif",
          selected: false,
        },
        {
          title: "Health & Fitness",
          background: "health.gif",
          selected: false,
        },
        {
          title: "Autos",
          background: "autos.jpg",
          selected: false,
        },
        {
          title: "Funny",
          background: "funny.gif",
          selected: false,
        },
        {
          title: "Music",
          background: "music.gif",
          selected: false,
        },
        {
          title: "Web series",
          background: "web.jpg",
          selected: false,
        },
        {
          title: "Handmade",
          background: "handmade.jpg",
          selected: false,
        },

        {
          title: "Art",
          background: "art.jpg",
          selected: false,
        },
        {
          title: "Musicians",
          background: "musician.gif",
          selected: false,
        },
        {
          title: "Travel",
          background: "travel.gif",
          selected: false,
        },
        {
          title: "Architecture",
          background: "arch.jpg",
          selected: false,
        },
        {
          title: "Menswear",
          background: "men.jpg",
          selected: false,
        },
        {
          title: "Science",
          background: "science.gif",
          selected: false,
        },
        {
          title: "Business",
          background: "business.gif",
          selected: false,
        },
        {
          title: "Beauty",
          background: "beauty.jpg",
          selected: false,
        },
        {
          title: "Celebrities",
          background: "celeb.gif",
          selected: false,
        },
      ],

      counterCards: 6,
      randomColors: ["#66A8cf", "#af8cc6", "#db6f57", "#f1a24f", "#6ac296"],
    };
  },
  computed: {},

  created() {
    this.shuffle();
  },

  methods: {
    cardImage(bg) {
      return {
        backgroundImage: ` radial-gradient(ellipse at center,transparent 0,rgba(0,0,0,.36) 100%),url(${require("../../assets/images/InterestsImgs/" +
          bg)})`,
      };
    },
    shuffle() {
      // for the cards to be randomized
      this.cards.sort(() => Math.random() - 0.5);
    },
    randomColor() {
      return this.randomColors[
        Math.floor(Math.random() * this.randomColors.length)
      ];
    },
    cardSelected(card) {
      card.selected = !card.selected;
      if (card.selected) {
        this.selectedItems.push(card.title);
        this.coloredItems.push(this.randomColor());
        this.counter++;
      } else {
        const index = this.selectedItems.indexOf(card.title);
        if (index > -1) {
          this.selectedItems.splice(index, 1);
          this.coloredItems.splice(index, 1);
          this.counter--;
        }
      }
    },

    itemRemoveSelection(item) {
      const index = this.selectedItems.indexOf(item);
      if (index > -1) {
        this.selectedItems.splice(index, 1);
        this.coloredItems.splice(index, 1);

        this.counter--;
      }
      var indexCard = this.cards.filter(function (elem) {
        if (elem.title === item) return 1;
      });

      if (indexCard.length > 0) {
        var target = this.cards.indexOf(indexCard[0]);
        this.cards[target].selected = false;
      }
    },

    async doneSelection() {
      try {
        await axios
          .post(Browser().baseURL + "/interests", {
            interests: this.selectedItems,
          })
          .then((res) => {
            console.log(res.data);
          });
      } catch (e) {
        console.log("^^^^^^^^^^^^^^^^^^");
        console.error(e);
      }
    },
  },
};
</script>

<style scoped>
* {
  font-family: Gibson, Helvetica Neue, HelveticaNeue, Helvetica, Arial,
    sans-serif;
}
.mainDiv {
  background: #001935;
  height: 100vh;
  min-width: 100vw;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.selectedItemsDone {
  position: fixed;
  z-index: 100;
  background: #001935;
}

.selectInterests {
  margin: auto;
  padding: auto;
  background: #001935;
  margin-top: 115px;
  margin-bottom: 10px;
}

.descriptionInterests {
  grid-column: 1 / 3;
  grid-row: 1/3;
  background: #7c5cff;
  color: white;
  width: 430px;
  height: 430px;
  display: flex;
  flex-direction: column;
  /* justify-content: safe; */
  align-items: center;
  text-align: center;
  padding-top: 20vh;
  padding-left: 2vw;
  border-radius: 5px;
}
.descriptionInterests h1 {
  font-size: 48px;
  font-weight: 700;
  max-width: 300px;
  margin-top: 10px;
}
.descriptionInterests p {
  opacity: 0.5;
  font-size: 20px;
  font-weight: 400;
  max-width: 200px;
  height: fit-content;
}

ul {
  list-style-type: none;
}

.cardsStyle:hover {
  transform: scale(0.97);
}

.cardsView {
  display: grid;
  grid-template-columns: max-content max-content max-content max-content max-content;
  grid-gap: 10px;
  padding-left: 0px;
  margin: auto;
}
.cardsStyle {
  color: white;
  background-size: cover;
  background-position: center;
  width: 210px;
  height: 210px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.cardsStyle p {
  display: inline-block;
}
.btns {
  display: flex;
  float: right;
  padding-right: 20px;
  z-index: 200;
  transition: all 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  background-color: #001935;
}
.btns button:hover {
  transform: scale(1.03);
}
.nextClass {
  background: #00b8ff;
  transition: all 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;
  width: 120px;
  height: 44px;
  margin-right: 15px;
  top: 15px;
  position: relative;
  opacity: 0.8;
  color: white;
}

.selectClass {
  background-color: #405368;
  transition: all 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  border-radius: 3px;
  overflow: hidden;
  cursor: mouse;
  width: 120px;
  height: 44px;
  margin-right: 15px;
  top: 15px;
  position: relative;
  color: black;
}

.skipButton {
  background-color: #001935;
  border: 1px solid rgba(0, 184, 255, 0.5);
  color: rgba(0, 184, 255, 0.5);
  transition: all 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;
  width: 120px;
  height: 44px;
  margin-right: 15px;
  top: 15px;
  position: relative;
  font-size: 14px;
  font-weight: 700;
}

span {
  font-weight: 900;
  font-size: 14px;
}

progress {
  height: 3.2em;
  position: absolute;
  top: -0.1em;
  left: -0.1em;
  background-color: #405368;
  opacity: 0.8;
}

progress::-webkit-progress-bar {
  background-color: #405368;
}
progress::-webkit-progress-value {
  background-color: #00b8ff;
}

.itemsDiv {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.itemsBox p {
  color: white;
  font-weight: 600;
  font-size: 14px;
  /* padding: 0; */
  /* margin: 0; */
  padding: 11px 0 0 0px;
  margin: 0 7px 0 7px;
  /* padding: auto; */
  display: inline-block;
  width: fit-content;
}

.itemsBox p:hover {
  text-decoration: line-through;
  color: white;
  transform: scale(1.03);
}

.itemsBox:hover {
  /* text-decoration: line-through; */
  /* color: white; */
  transform: scale(1.03);
}

.itemsBox {
  cursor: pointer;
  border: 1px dashed #86909e;
  border-radius: 40px;
  margin-left: 15px;
  margin-top: 16px;
  min-width: 110px;
  height: 44px;
}

.checkIcon {
  margin: auto;
  height: 70px;
  width: 70px;
}

p {
  padding: 8px 0 0 10px;
  font-weight: 700;
}

.md-divider.md-theme-default {
  margin-top: 15px;
  width: 100vw;
  background-color: rgb(117, 112, 112);
}

li {
  list-style: none;
}

@media only screen and (max-width: 1200px) {
  .cardsView {
    grid-template-columns: max-content max-content max-content max-content;
  }
}

@media only screen and (max-width: 990px) {
  .cardsView {
    grid-template-columns: max-content max-content max-content;
  }
}

@media only screen and (max-width: 765px) {
  .cardsView {
    grid-template-columns: max-content max-content max-content;
  }
  .descriptionInterests {
    grid-column: 1 / 4;
    grid-row: 1/4;
    width: 515px;
    height: 280px;
    justify-content: center;
  }

  .descriptionInterests h1 {
    margin-top: 0;
  }

  .descriptionInterests p {
    padding-bottom: 130px;
  }
  .cardsStyle {
    width: 164px;
  }

  .selectedItemsDone {
    display: none;
  }

  .selectInterests {
    margin-top: 20px;
  }
}

@media screen and (max-width: 700px) {
  .cardsView {
    grid-template-columns: max-content max-content;
  }

  .descriptionInterests {
    grid-column: 1/3;
    grid-row: 1/3;
    width: 340px;
    height: 270px;
  }

  .cardsStyle {
    width: 164px;
  }
}
</style>
