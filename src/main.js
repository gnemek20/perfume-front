import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import DefaultUI from '@/styles/default.scss'
Vue.use(DefaultUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
