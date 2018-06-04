import React from 'react';

import './toggleAllTodos.css';

function ToggleAllTodos ({ hasTodos, onToggleAll, isCompleted }) {
  if (!hasTodos) return null;

  return (
    <input
      className="toogle-all"
      type="checkbox"
      onChange={onToggleAll}
      checked={isCompleted}
    />
  )
}

export default ToggleAllTodos;
