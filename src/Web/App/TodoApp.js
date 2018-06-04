import React from 'react';

import ToggleAllTodos from '../Components/ToggleAllTodos';
import NewTodo from '../Components/NewTodo';
import TodoList from '../Components/TodoList';
import TodoListFooter from '../Components/TodoListFooter';

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
