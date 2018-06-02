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
    const table = state.table
    table.tableData = table.tableData.map(function (item) {
      item.total = (item.doed + item.todo + item.doing)
      return item
    })
    return table
  },

  isMini (state) {
    return state.isMini
  },

  form (state) {
    return state.form
  }
}
