export default (db, email, value) => {
  return db.collection('teams').doc().collection('members').doc(email)
    .update(value).then(function () {
      return true
    })
    .catch(function () {
      return false
    })
}
