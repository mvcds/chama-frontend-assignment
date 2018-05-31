import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from '../Domain/Objects/TodoList';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const list = new TodoList();

ReactDOM.render(<App todoList={list} />, document.getElementById('root'));
registerServiceWorker();
