import React from 'react';

import ToggleAllTodos from '../Components/ToggleAllTodos';
import TodoList from '../Components/TodoList';

import './app.css';

function App ({ todo, onKeyDown, onChange }) {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">todos</h1>
      </header>
      <main>
        <div className="app__inputs">
          <ToggleAllTodos />
          <input
            className="app__new-todo"
            placeholder="What needs to be done?"
            value={todo}
            onKeyDown={onKeyDown}
            onChange={onChange}
            autoFocus
          />
        </div>
        <TodoList />
      </main>
      <footer className="app__footer">
        Create a TODO and double click on it to start its edition
      </footer>
    </div>
  );
}

export default App;
