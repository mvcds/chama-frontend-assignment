import React from 'react';
import { Provider } from 'react-redux';

import Store from '../../Infra/ReduxStore';

import App from './app.redux';

function AppStore () {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  )
}

export default AppStore;
