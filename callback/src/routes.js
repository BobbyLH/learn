import Vue from 'vue'
import Router from 'vue-router'
import indexPage from './components/header.vue'
import homePage from './views/home.vue'
import aboutPage from './views/about.vue'
import animationPage from './views/animation.vue'
import inheritPage from './views/inherit.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: homePage
    },
    {
      path: '/about',
      component: aboutPage
    },
    {
      path: '/animation',
      component: animationPage
    },
    {
      path: '/inherit',
      component: inheritPage
    }
  ]
})
