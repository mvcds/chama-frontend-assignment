import React from 'react';

import './newTodo.css';

function NewTodo ({ text, onKeyDown, onChange }) {
  return (
    <React.Fragment>
      <input
        className="new-todo__text"
        placeholder="What needs to be done?"
        value={text}
        onKeyDown={onKeyDown}
        onChange={onChange}
        autoFocus
      />
    </React.Fragment>
  )
}

export default NewTodo;
