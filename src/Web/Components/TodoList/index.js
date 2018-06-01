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

function TodoList ({ todos, onToggle, onEdit }) {
  return (
    <ul className="todo-list">
      {todos.map(asItem, { onToggle, onEdit })}
    </ul>
  )
}

export default TodoList;