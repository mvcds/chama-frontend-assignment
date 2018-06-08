import React, { Component } from 'react';

import ToggleAllTodos from './ToggleAllTodos';
import NewTodo from './NewTodo';
import TodoList from './TodoList';
import TodoListFooter from './TodoListFooter';

import './todoApp.css';

class TodoApp extends Component {
  componentDidMount () {
    this.props.onIgnite()
  }

  componentWillUnmount () {
    this.props.onExtinguish()
  }

  render () {
    if (this.props.shouldAuthenticate) return null;

    return (
      <React.Fragment>
        <main className="todo-app">
          <div className="todo-app__inputs">
            <ToggleAllTodos />
            <NewTodo />
          </div>
          <TodoList />
          <TodoListFooter />
        </main>
        <footer className="todo-app__footer">
          Create a TODO and double click on it to start its edition
        </footer>
      </React.Fragment>
    )
  }
}

export default TodoApp;
