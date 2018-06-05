import { all } from 'redux-saga/effects';

import addTodo from './addTodo';

function* sagas() {
  yield all([
    addTodo()
  ]);
}

export default sagas
