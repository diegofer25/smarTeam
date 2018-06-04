import { userDb } from './../getters'
const user = JSON.parse(localStorage.getItem('user'))

export default (value) => {
  return verifyMember(value)
}

function verifyMember (member) {
  return userDb.collection('teams').doc(user.uid).collection('members')
    .where('email', '==', member.email).get()
    .then(results => {
      if (results.docs.length === 0) {
        return setMember(member)
      } else {
        return {
          status: false,
          message: 'Este membro já foi cadastrado'
        }
      }
    })
    .catch(error => {
      return {
        status: false,
        message: error
      }
    })
}

function setMember (member) {
  return userDb.collection('teams').doc(user.id).collection('members')
    .doc(member.email).set(member)
    .then((teste) => {
      const firstName = member.name.split(' ')[0]
      return setEmptyTasks(member.email, firstName)
    })
    .catch(function (error) {
      return {
        status: false,
        message: error
      }
    })
}

function setEmptyTasks (email, name) {
  return userDb.collection('teams').doc(user.id).collection('members')
    .doc(email).collection('tasks').doc('tasks')
    .set({
      tasks: []
    })
    .then((result) => {
      console.log(result)
      return {
        status: true,
        message: name + ' cadastrado com sucesso'
      }
    }).catch((error) => {
      return {
        status: false,
        message: error
      }
    })
}
