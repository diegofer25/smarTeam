export default (db, request) => {
  return verifyMember(db, request)
}

function verifyMember (db, request) {
  console.log(request)
  return db.collection('teams').doc(request.userId).collection('members')
    .where('email', '==', request.form.email).get()
    .then(results => {
      if (results.docs.length === 0) {
        return setMember(db, request)
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

function setMember (db, request) {
  return db.collection('teams').doc(request.userId).collection('members')
    .doc(request.form.email).set(request.form)
    .then((teste) => {
      console.log(teste)
      const firstName = request.form.name.split(' ')[0]
      return setEmptyTasks(db, request, firstName)
    })
    .catch(() => {
      return {
        status: false,
        message: 'Falha na comunicação com o servidor'
      }
    })
}

function setEmptyTasks (db, request, name) {
  return db.collection('teams').doc(request.userId).collection('members')
    .doc(request.form.email).collection('tasks').doc('tasks')
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
