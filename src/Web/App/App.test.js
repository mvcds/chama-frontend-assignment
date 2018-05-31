import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from '../../Domain/Objects/TodoList/todoList.factory';

import App from './index';

const props = {
  todoList: TodoList.Empty()
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
