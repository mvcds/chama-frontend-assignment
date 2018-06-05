import { compose, createStore, applyMiddleware } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import createSagaMiddleware from 'redux-saga';

import Firebase from '../Firebase';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware()

const firebaseConfig = {
  userProfile: 'users'
};

const createStoreWithFirebase = compose(
  reactReduxFirebase(Firebase, firebaseConfig)
)(createStore);

const store = createStoreWithFirebase(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas)

export default store;
