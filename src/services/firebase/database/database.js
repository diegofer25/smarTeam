import firebase from 'firebase/app'
import 'firebase/firestore'
import config from './config'

const database = firebase.initializeApp(config).firestore()
const settings = {
  timestampsInSnapshots: true
}
database.settings(settings)

export const db = database
