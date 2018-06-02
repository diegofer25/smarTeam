import { userDb } from './../getters'
import store from './../../../../store/'
const user = store.getters.user

export default (value) => {
  return verifyMember(value)
}

function verifyMember (member) {
  return userDb.collection('users').doc(user.id).collection('members')
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
  return userDb.collection('users').doc(user.id).collection('members')
    .doc(member.email).set(member)
    .then((teste) => {
      const firstName = member.name.split(' ')[0]
      return {
        status: true,
        message: firstName + ' cadastrado com sucesso'
      }
    })
    .catch(function (error) {
      return {
        status: false,
        message: error
      }
    })
}
