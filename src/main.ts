import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueAnalytics, {
  id: 'UA-XXX-X'
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
