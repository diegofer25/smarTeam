const userData = JSON.parse(localStorage.getItem('user'))

export default {
  user: {
    id: userData ? userData.uid : '',
    name: userData ? userData.displayName : '',
    email: userData ? userData.email : '',
    photo: userData ? userData.photo : ''
  },
  configs: {
    theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'primary'
  }
}
