import firebase from 'firebase';

//in a real app its configs would be on a .env or in the environment instead
import config from './config.json';
import Firebase from './Firebase';

const app = firebase.initializeApp(config);

const { auth } = app.firebase_

export default new Firebase({
  auth: auth()
});

export const signInOptions = [
  firebase.auth.GoogleAuthProvider.PROVIDER_ID
]
