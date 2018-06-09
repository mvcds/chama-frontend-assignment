import { all } from 'redux-saga/effects';

import todos from './todos';

function* sagas() {
  yield all([
    todos()
  ]);
}

export default sagas
