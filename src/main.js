import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons, IconsPlugin  } from 'bootstrap-vue'
import { store } from './store/store';
import vuetify from './plugins/vuetify'
 

 

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false
Vue.use(router)

new Vue({
  el: '#app',
  store: store,
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
