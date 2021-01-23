import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './services/routes'
import viaCep from './services/viacep/'
import simpleVueRegexDirective from 'simple-vue-regex-directive'

Vue.config.productionTip = false
Vue.directive('regex', simpleVueRegexDirective({
  color:'#eb4034'
}))

new Vue({
  router,
  store,
  viaCep,
  render: h => h(App),
}).$mount('#app')
