import Vue from 'vue'
import Vuex from 'vuex'

import application from './application'
import business from './business'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    application,
    business
  }
})

export default store
