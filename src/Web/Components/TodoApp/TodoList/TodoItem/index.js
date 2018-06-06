import React from 'react';

import EditableTodo from './EditableTodo.js';

function TodoItem ({ todo, isEditing, onToggle, onOpenEditing, ...edition }) {
  return (
    <React.Fragment>
      <input
        className="todo-list__item-completion"
        type="checkbox"
        onChange={onToggle}
        checked={todo.isCompleted}
      />
      <span className="todo-list__item-text">
        {todo.text}
      </span>
      <button onClick={onOpenEditing} className="todo-list__item-button">
        Edit
      </button>
      {isEditing && <EditableTodo {...edition} />}
    </React.Fragment>
  )
}

export default TodoItem;
