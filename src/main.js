import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
Vue.config.productionTip = false
Vue.use(vuesax) 
new Vue({
  
  render: h => h(App)
}).$mount('#app')
