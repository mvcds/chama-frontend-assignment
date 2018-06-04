import React from 'react';

import TodoApp from '../Components/TodoApp';
import AuthGateway from '../Components/AuthGateway';

import './app.css';

function Main ({ shouldAuthenticate }) {
  return (
    <React.Fragment>
      <TodoApp shouldAuthenticate={shouldAuthenticate} />
      <AuthGateway />
    </React.Fragment>
  )
}

function Loader () {
  return (
    <div>Loading App...</div>
  )
}

function App ({ isLoaded, shouldAuthenticate }) {
  const Content = isLoaded ? Main : Loader

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">todos</h1>
      </header>
      <Content shouldAuthenticate={shouldAuthenticate} />
    </div>
  );
}

export default App;
