export default {
  hasUser (state) {
    return state.hasUser
  },
  user (state) {
    return state.user
  },
  userTheme (state) {
    return state.user.configs.theme
  }
}
