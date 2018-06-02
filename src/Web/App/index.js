import React from 'react';

import TodoApp from './TodoApp';

import './app.css';

function App () {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">todos</h1>
      </header>
      <TodoApp />
    </div>
  );
}

export default App;
