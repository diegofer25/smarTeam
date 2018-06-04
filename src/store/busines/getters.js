import { db } from './../../services/firebase/'

export default {

  teamMembers () {
    return db.functions.getMembers()
  }

}
