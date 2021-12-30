import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons, IconsPlugin  } from 'bootstrap-vue'
import { store } from './store/store';
import vuetify from './plugins/vuetify' 
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import Browser from "./mocks/browser";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueClipboard from 'vue-clipboard2' //for copy
Vue.use(VueMaterial);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;
Vue.use(IconsPlugin) 
import VueSocketIO from "vue-socket.io" 
import SocketIO from "socket.io-client" //http://tumblr4u.eastus.cloudapp.azure.com:5000/ 
Vue.use(new VueSocketIO({   
  debug: false,   
  connection: SocketIO(Browser().baseURL , {  
  autoConnect:true }), 
  secure:true }));

  import GAuth from 'vue-google-oauth2'
  const gauthOption = {
    clientId: '633147263244-4vsiu15cslkogibbgih279fp98eq11d7.apps.googleusercontent.com',
    scope: 'profile email',
    prompt: 'select_account'
  }
  Vue.use(GAuth, gauthOption)
Vue.use(router)
Vue.use(VueClipboard)  //for copy
import Chat from 'vue-beautiful-chat'
Vue.use(Chat)

new Vue({
  el: "#app",
  store: store,
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
 
