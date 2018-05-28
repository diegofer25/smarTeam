export default {

  hasUser (state) {
    return state.hasUser
  },

  user (state) {
    return state.user
  },

  userTheme (state) {
    return state.configs.theme
  },

  dataChart (state) {
    return state.dataChart
  },

  chartOptions (state) {
    return state.chartOptions
  },

  tableInfo (state) {
    return state.table
  }
}
