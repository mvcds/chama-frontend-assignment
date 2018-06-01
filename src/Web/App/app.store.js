import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../Reducers'

import App from './app.redux'

const store = createStore(rootReducer);

function AppStore () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppStore;
