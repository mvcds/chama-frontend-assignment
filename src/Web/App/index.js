import React from 'react';

import './app.css';

function ToogleAllTodos ({ todoList, onToggleAll }) {
  if (!todoList.length) return null;

  return (
    <input
      className="app__toogle-all"
      type="checkbox"
      onChange={onToggleAll}
      checked={todoList.isCompleted}
    />
  )
}

function App ({ todo, todoList, onKeyDown, onChange, onToggleAll }) {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">todos</h1>
        <div className="app__inputs">
          <input
            className="app__new-todo"
            placeholder="What needs to be done?"
            value={todo}
            onKeyDown={onKeyDown}
            onChange={onChange}
            autoFocus
          />
          <ToogleAllTodos
            todoList={todoList}
            onToggleAll={onToggleAll}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
