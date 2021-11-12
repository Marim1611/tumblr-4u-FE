import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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
