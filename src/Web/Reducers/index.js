import { combineReducers } from 'redux';

import todoList from './todoList';
import firebase from './firebase';

export default combineReducers({
  todoList,
  firebase
})
