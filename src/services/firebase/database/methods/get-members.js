export default (db, userId) => {
  return db.collection('teams').doc(userId).collection('members')
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
