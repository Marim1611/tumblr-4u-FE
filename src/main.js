import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import Vuetify from "./plugins/vuetify";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(VueMaterial);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store: store,
  Vuetify: Vuetify,
  render: (h) => h(App),
}).$mount("#app");
