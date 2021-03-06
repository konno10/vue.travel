import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify' // これを追加

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  vuetify,
}).$mount('#app')
