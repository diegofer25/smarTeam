import { userDb } from './../getters'
import updateMember from './update-member'
const user = JSON.parse(localStorage.getItem('user'))

export default (email, taskStatus, taskIndex) => {
  return deleteTask(email, taskStatus, taskIndex)
}

function deleteTask (email, taskStatus, taskIndex) {
  return userDb.collection('teams').doc(user.uid).collection('members')
    .doc(email).get()
    .then((result) => {
      const memberTasks = result.data().tasks
      memberTasks[taskStatus].splice(taskIndex, 1)
      return updateMember(email, {
        tasks: memberTasks
      })
    }).catch((err) => {
      console.log(err)
    })
}
