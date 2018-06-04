import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const Router = new VueRouter({
  /*
   * NOTE! Change Vue Router mode from quasar.conf.js -> build -> vueRouterMode
   *
   * When going with "history" mode, please also make sure "build.publicPath"
   * is set to something other than an empty string.
   * Example: '/' instead of ''
   */

  // Leave as is and change from quasar.conf.js instead!
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

Router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (JSON.parse(localStorage.getItem('user'))) {
      next()
    } else if (to.path === '/-1') {
      next('/')
    } else {
      next('/error')
    }
  } else if ((to.path === '/' || to.path === '/cadastro') && JSON.parse(localStorage.getItem('user'))) {
    next('/home')
  } else if (to.path === '/-1') {
    next('/')
  } else {
    next()
  }
})

export default Router
