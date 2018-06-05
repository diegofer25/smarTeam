import updateMember from './update-member'

export default (db, email, task, status) => {
  return addTask(db, email, task, status)
}

function addTask (db, email, task, status) {
  return db.collection('teams').doc().collection('members')
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
