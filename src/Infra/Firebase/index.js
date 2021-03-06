import firebase from 'firebase';

//in a real app its configs would be on a .env or in the environment instead
import config from './config.json';

const app = firebase.initializeApp(config);

export default app.firebase_;

export const signInOptions = [
  firebase.auth.GoogleAuthProvider.PROVIDER_ID
]
