import Vue from 'vue'
import Router from 'vue-router'
import VueStar from 'vue-star'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'

Vue.use(Router)
Vue.component('VueStar', VueStar)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: FirstPage
    },
    {
      path: '/#/secondPage',
      name: 'Second',
      component: SecondPage
    }
  ]
})
