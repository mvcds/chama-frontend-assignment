import React from 'react';

import AuthGateway from '../Components/AuthGateway';

import TodoApp from './TodoApp';

import './app.css';

function App ({ isLoggedIn }) {
  const Main = isLoggedIn ? TodoApp : AuthGateway

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">todos</h1>
      </header>
      <Main />
    </div>
  );
}

export default App;
