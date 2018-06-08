import { all } from 'redux-saga/effects';

import addTodo from './addTodo';
import fetchTodoList from './fetchTodoList';
import editTodo from './editTodo';
import setDueDate from './setDueDate';
import editList from './editList.js';

function* sagas() {
  yield all([
    addTodo(),
    fetchTodoList(),
    editTodo('EDIT_TODO', 'text'),
    editTodo('TOGGLE_TODO', 'isCompleted'),
    editTodo('DELETE_TODO', 'isDeleted', true),
    setDueDate(),
    editList('MOVE_TODO'),
    editList('TOGGLE_ALL'),
    editList('CLEAR_COMPLETED_TODOS')
  ]);
}

export default sagas
