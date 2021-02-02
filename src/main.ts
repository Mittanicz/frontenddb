import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)
const DEFAULT_TITLE = 'Frontend database';
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
