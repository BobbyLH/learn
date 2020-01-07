import Vue from 'vue'
import Router from 'vue-router'
import homePage from './views/home'
import dcfPage from './views/discounted-cashflow'
import pePage from './views/price-earning'
import srPage from './views/sharp-ratio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: homePage
    },
    {
      path: '/discounted-cashflow',
      component: dcfPage
    },
    {
      path: '/price-earning',
      component: pePage
    },
    {
      path: '/sharp-ratio',
      component: srPage
    }
  ]
})
