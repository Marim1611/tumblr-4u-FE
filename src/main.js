import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { store } from './store/store';
import vuetify from './plugins/vuetify'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(router)

new Vue({
  el: '#app',
  store: store,
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
