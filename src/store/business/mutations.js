import firestore from './../../services/firebase/database/'

export default {

  updateMembers: (state, userId) => {
    state.members = firestore.functions.getMembers(userId)
    console.log(state.members)
    return new Promise(() => 'Done')
  }

}
