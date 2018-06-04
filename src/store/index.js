import Vue from 'vue'
import Vuex from 'vuex'

import application from './application'
import busines from './busines'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    application,
    busines
  }
})

export default store
