import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const EMPTY_TODO_LIST = {
  length: 0,
  isCompleted: false
}

ReactDOM.render(<App todoList={EMPTY_TODO_LIST} />, document.getElementById('root'));
registerServiceWorker();
