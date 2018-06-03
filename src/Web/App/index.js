import React from 'react';

import AuthGateway from '../Components/AuthGateway';

import TodoApp from './TodoApp';

import './app.css';

function App ({ isLoggedIn }) {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">todos</h1>
      </header>
      <AuthGateway />
      {isLoggedIn && <TodoApp />}
    </div>
  );
}

export default App;
