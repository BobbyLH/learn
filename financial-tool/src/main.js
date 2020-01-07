import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import './assets/style/reset.scss'

Vue.config.debug = true // 开启错误提示

new Vue({
  router,
  el: '#myApp',
  render: h => h(App)
})
