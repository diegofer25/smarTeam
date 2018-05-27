export default {
  loginUser: (state, value) => {
    localStorage.setItem('user', JSON.stringify(value))
    state.user.id = value.uid
    state.user.name = value.displayName
    state.user.email = value.email
    state.user.photo = value.photo
  },

  logOff: (state) => {
    localStorage.removeItem('user')
    state.user.id = ''
    state.user.name = ''
    state.user.email = ''
    state.user.photo = ''
  },

  setTheme: (state, value) => {
    window.localStorage.setItem('theme', value)
    state.configs.theme = value
  }
}
