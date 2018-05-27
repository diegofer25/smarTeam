export default {
  loginUser: (state, value) => {
    window.localStorage.setItem('user', JSON.stringify(value))
    state.user.id = value.uid
    state.user.name = value.displayName
    state.user.email = value.email
    state.user.photo = value.photo
  },
  setTheme: (state, value) => {
    window.localStorage.setItem('theme', value)
    state.user.configs.theme = value
  }
}
