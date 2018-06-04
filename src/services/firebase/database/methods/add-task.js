import { userDb } from './../getters'
import updateMember from './update-member'
const user = JSON.parse(localStorage.getItem('user'))

export default (email, task, status) => {
  return addTask(email, task, status)
}

function addTask (email, task, status) {
  return userDb.collection('teams').doc(user.uid).collection('members')
    .doc(email).get()
    .then(result => {
      const memberTasks = result.data().tasks
      memberTasks[status].push(task)
      return updateMember(email, {
        tasks: memberTasks
      })
    })
    .catch((error) => {
      return !error
    })
}
