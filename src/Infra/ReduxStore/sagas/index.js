import { all } from 'redux-saga/effects';

import addTodo from './addTodo';
import editTodo from './editTodo';

function* sagas() {
  yield all([
    addTodo(),
    editTodo('EDIT_TODO', 'text'),
    editTodo('TOGGLE_TODO', 'isCompleted'),
    editTodo('DELETE_TODO', 'isDeleted', true)
  ]);
}

export default sagas
