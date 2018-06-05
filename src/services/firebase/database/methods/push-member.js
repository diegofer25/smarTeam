export default (db, value) => {
  return verifyMember(db, value)
}

function verifyMember (db, member, userId) {
  return db.collection('teams').doc().collection('members')
    .where('email', '==', member.email).get()
    .then(results => {
      if (results.docs.length === 0) {
        return setMember(db, member)
      } else {
        return {
          status: false,
          message: 'Este membro já foi cadastrado'
        }
      }
    })
    .catch(() => {
      return {
        status: false,
        message: 'Falha na comunicação com o servidor'
      }
    })
}

function setMember (db, member) {
  return db.collection('teams').doc().collection('members')
    .doc(member.email).set(member)
    .then((teste) => {
      const firstName = member.name.split(' ')[0]
      return setEmptyTasks(db, member.email, firstName)
    })
    .catch(() => {
      return {
        status: false,
        message: 'Falha na comunicação com o servidor'
      }
    })
}

function setEmptyTasks (db, email, name, team) {
  return db.collection('teams').doc().collection('members')
    .doc(email).collection('tasks').doc('tasks')
    .set({
      tasks: []
    })
    .then((result) => {
      return {
        status: true,
        message: name + ' cadastrado com sucesso'
      }
    }).catch(() => {
      return {
        status: false,
        message: 'Falha na comunicação com o servidor'
      }
    })
}
