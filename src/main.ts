import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIcons, faTh, faCubes } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faJs, faConnectdevelop, faCss3Alt } from '@fortawesome/free-brands-svg-icons'

library.add(faJs, faHtml5, faIcons, faCss3Alt, faTh, faCubes, faConnectdevelop)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
