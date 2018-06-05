import firestore from './../../services/firebase/database/'

export default {

  updateMembers: (state, userId) => {
    state.members = firestore.functions.getMembers(userId)
    return new Promise(() => 'Done')
  }

}
