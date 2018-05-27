export default {
  loginUser: (state, value) => {
    state.hasUser = true
    state.user.name = value.displayName
    state.user.email = value.email
    state.user.photo = value.photo ? value.photo : './../../assets/user-profile.png'
  },
  setTheme: (state, value) => {
    state.user.configs.theme = value
  }
}
