import React from 'react';

import './todoListFooter.css';

function Sorter ({ total, isAsc, onToggle }) {
  if (total < 2) return null

  return (
    <button onClick={onToggle}>
      Set {isAsc ? 'highest' : 'lowest'} priority first
    </button>
  )
}

function TodoListFooter ({ completed, total, onClear, ...rest }) {
  if (!total) return null;

  return (
    <div className="todo-list-footer">
      <span className="todo-list-footer__numbers">
        {completed}/{total}
      </span>
      <span className="todo-list-footer__config">
        <Sorter total={total} {...rest} />
      </span>
      <span className="todo-list-footer__clear-button">
        {completed > 0 && <button onClick={onClear}>Clear Completed</button>}
      </span>
    </div>
  )
}

export default TodoListFooter;
