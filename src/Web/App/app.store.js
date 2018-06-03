import React from 'react';
import { Provider } from 'react-redux';

import App from './app.redux';
import store from './store';

function AppStore () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppStore;
