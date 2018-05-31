import React from 'react';

import TodoList from '../Components/TodoList'

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

function App ({ todo, todoList, onKeyDown, onChange, onToggleAll, onToggle }) {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">todos</h1>
      </header>
      <main>
        <div className="app__inputs">
          <ToogleAllTodos
            todoList={todoList}
            onToggleAll={onToggleAll}
          />
          <input
            className="app__new-todo"
            placeholder="What needs to be done?"
            value={todo}
            onKeyDown={onKeyDown}
            onChange={onChange}
            autoFocus
          />
        </div>
        <TodoList todos={todoList.todos} onToggle={onToggle} />
      </main>
    </div>
  );
}

export default App;
