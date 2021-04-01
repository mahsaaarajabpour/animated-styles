import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import '@fortawesome/fontawesome-free/css/all.css'
import {routes} from './routes'

Vue.config.productionTip = true


Vue.use(VueRouter)
const router=new VueRouter({

  routes,
  mode:'history',

})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
