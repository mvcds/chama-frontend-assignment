import React from 'react';

import './app.css';

function App ({ todo, onKeyDown, onChange }) {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">todos</h1>
        <input
          className="app__new-todo"
          placeholder="What needs to be done?"
          value={todo}
          onKeyDown={onKeyDown}
          onChange={onChange}
          autoFocus
        />
      </header>
    </div>
  );
}

export default App;
