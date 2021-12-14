import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


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

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
}).$mount('#app')
