import React from 'react';

import './todoList.css';

function TodoItem (todo, index) {
  return (
    <li key={todo.id} className="todo-list__item">
      <input
        className="todo-list__item-completion"
        type="checkbox"
        onChange={this.onToggle.bind(todo)}
        checked={todo.isCompleted}
      />
      <span>
        {todo.text}
      </span>
    </li>
  )
}

function TodoList ({ todos, onToggle }) {
  return (
    <ul className="todo-list">
      {todos.map(TodoItem, { onToggle })}
    </ul>
  )
}

export default TodoList;
