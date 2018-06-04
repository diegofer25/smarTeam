import { userDb } from './../getters'
const user = JSON.parse(localStorage.getItem('user'))

export default (email) => {
  return userDb.collection('teams').doc(user.uid).collection('members')
    .doc(email).collection('tasks').doc('tasks').get()
    .then((result) => {
      return {
        status: true,
        tasks: result.data().tasks
      }
    }).catch((err) => {
      return {
        status: false,
        error: err
      }
    })
}
