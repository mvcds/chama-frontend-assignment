import React from 'react';

import ToggleAllTodos from './ToggleAllTodos';
import NewTodo from './NewTodo';
import TodoList from './TodoList';
import TodoListFooter from './TodoListFooter';

function TodoApp ({ shouldAuthenticate }) {
  if (shouldAuthenticate) return false;

  return (
    <React.Fragment>
      <main>
        <div className="app__inputs">
          <ToggleAllTodos />
          <NewTodo />
        </div>
        <TodoList />
        <TodoListFooter />
      </main>
      <footer className="app__footer">
        Create a TODO and double click on it to start its edition
      </footer>
    </React.Fragment>
  )
}

export default TodoApp;
