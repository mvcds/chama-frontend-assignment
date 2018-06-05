import { combineReducers } from 'redux';

import todoList from './todoList';
import firebase from './firebase';
import firewatcher from './firewatcher';

export default combineReducers({
  todoList,
  firebase,
  firewatcher
})
