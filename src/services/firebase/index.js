import firebase from 'firebase'
import config from './config'

export default {
  firebaseDb: firebase.initializeApp(config).database(),
  app: firebase
}
