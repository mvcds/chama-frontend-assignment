import { compose, createStore } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';

import Firebase from '../Firebase';

import rootReducer from './reducers';

const firebaseConfig = {
  userProfile: 'users'
};

const createStoreWithFirebase = compose(
  reactReduxFirebase(Firebase, firebaseConfig)
)(createStore);

export default createStoreWithFirebase(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
