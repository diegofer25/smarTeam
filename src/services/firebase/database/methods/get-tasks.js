export default (db, request) => {
  return db.collection('teams').doc(request.userId).collection('members')
    .doc(request.email).collection('tasks').doc('tasks').get()
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
