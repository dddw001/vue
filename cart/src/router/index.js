import Vue from 'vue'
import Router from 'vue-router'
import Cart from '../components/Cart.vue'
import Address from '../components/Address.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Cart
    },
    {
      path:'/address',
      component:Address
    }
  ]
})
