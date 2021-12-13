import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons, IconsPlugin  } from 'bootstrap-vue'
import { store } from './store/store';
import vuetify from './plugins/vuetify' 
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueClipboard from 'vue-clipboard2' //for copy
Vue.use(VueMaterial);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;
Vue.use(IconsPlugin) 
Vue.use(router)
Vue.use(VueClipboard)  //for copy
 

// NEW
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}
// else if (process.env.NODE_ENV === 'production') {
  //TODO:change to real server
//   const { worker } = 'http://tumblr4u.eastus.cloudapp.azure.com:5000'
//   worker.start()
// }

new Vue({
  el: "#app",
  store: store,
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
 
