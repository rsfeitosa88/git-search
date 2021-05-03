import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store/store'
import Axios from 'axios'

Vue.use(Axios)

Vue.config.productionTip = false

new Vue({
  router, store,
  render: h => h(App),
}).$mount('#app')
