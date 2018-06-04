import { userDb } from './../getters'
const user = JSON.parse(localStorage.getItem('user'))

export default () => {
  return userDb.collection('teams').doc(user.uid).collection('members')
    .get().then((response) => {
      return {
        status: true,
        members: response
      }
    })
    .catch(err => {
      return {
        status: false,
        error: err
      }
    })
}
