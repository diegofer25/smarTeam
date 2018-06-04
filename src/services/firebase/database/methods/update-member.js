import { userDb } from './../getters'
const user = JSON.parse(localStorage.getItem('user'))

export default (email, value) => {
  return userDb.collection('teams').doc(user.uid).collection('members').doc(email)
    .update(value).then(function () {
      return true
    })
    .catch(function () {
      return false
    })
}
