import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Ignorer l'élément personnalisé model-viewer pour Vue 2
Vue.config.ignoredElements = [
  'model-viewer'
]

new Vue({
  router,
  render: h => h(App)
}).$mount('#app') 