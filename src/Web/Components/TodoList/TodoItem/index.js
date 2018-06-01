import React from 'react';

function TodoItem ({ todo, onToggle }, index) {
  return (
    <React.Fragment>
      <input
        className="todo-list__item-completion"
        type="checkbox"
        onChange={onToggle}
        checked={todo.isCompleted}
      />
      <span>{todo.text}</span>
    </React.Fragment>
  )
}

export default TodoItem;
