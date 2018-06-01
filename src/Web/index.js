import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from '../Domain/Objects/TodoList/todoList.factory';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const list = TodoList.WithNonDoneTodos(1)

ReactDOM.render(<App todoList={list} />, document.getElementById('root'));
registerServiceWorker();
