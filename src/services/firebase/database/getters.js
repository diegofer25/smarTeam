import firebase from 'firebase'
import config from './../config'

const database = firebase.initializeApp(config).firestore()
const settings = {timestampsInSnapshots: true}
database.settings(settings)

export const userDb = database
