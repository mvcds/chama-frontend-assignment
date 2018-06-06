import React from 'react';

import TodoItem from './TodoItem'

import './todoList.css';

function asItem (todo, index) {
  return (
    <li key={todo.id} className="todo-list__item">
      <TodoItem {...this} todo={todo} />
    </li>
  )
}

function TodoList ({ todos, ...items }) {
  if (!todos) return null;

  return (
    <ul className="todo-list">
      {todos.map(asItem, items)}
    </ul>
  )
}

export default TodoList;
