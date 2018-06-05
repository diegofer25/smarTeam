import updateMember from './update-member'

export default (db, email, taskStatus, taskIndex) => {
  return deleteTask(db, email, taskStatus, taskIndex)
}

function deleteTask (db, email, taskStatus, taskIndex) {
  return db.collection('teams').doc().collection('members')
    .doc(email).get()
    .then((result) => {
      const memberTasks = result.data().tasks
      memberTasks[taskStatus].splice(taskIndex, 1)
      return updateMember(email, {
        tasks: memberTasks
      })
    })
}
