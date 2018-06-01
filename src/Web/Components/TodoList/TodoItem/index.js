import React from 'react';

function TodoItem ({ text, isCompleted, onToggle }, index) {
  return (
    <React.Fragment>
      <input
        className="todo-list__item-completion"
        type="checkbox"
        onChange={onToggle}
        checked={isCompleted}
      />
      <span>{text}</span>
    </React.Fragment>
  )
}

export default TodoItem;
