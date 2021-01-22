import Vue from 'vue'
import App from './App.vue'
import router from './services/routes'
import store from './store'
import viaCep from './services/viacep/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  viaCep,
  render: h => h(App),
}).$mount('#app')
