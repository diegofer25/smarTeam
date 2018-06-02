export default {

  loginUser: ({ commit }, value) => {
    commit('loginUser', value)
  },

  logOff: ({ commit }) => {
    commit('logOff')
  },

  setTheme: ({ commit }, value) => {
    commit('setTheme', value)
  },

  setDataChart: ({ commit }, value) => {
    commit('setDataChart', value)
  },

  setMini: ({ commit }, value) => {
    commit('setMini', value)
  },

  setForm: ({ commit }, value) => {
    commit('setForm', value)
  }
}
