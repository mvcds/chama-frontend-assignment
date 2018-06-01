import React, { Component } from 'react';

import App from './index'

const ENTER_KEY = 13;

function handleKeyDown (event) {
  if (event.keyCode !== ENTER_KEY) return;

  event.preventDefault();

  const todo = this.state.todo.trim();

  if (!todo) return;

  this.props.addTodo(todo);
  this.setState({ todo: '' });
}

function handleChange (event) {
  this.setState({ todo: event.target.value });
}

class AppState extends Component {
  constructor (props) {
    super(props);

    this.state = {
      todo: ''
    }

    this.methods = {
      onKeyDown: handleKeyDown.bind(this),
      onChange: handleChange.bind(this)
    }
  }

  render () {
    return (
      <App
        {...this.props}
        {...this.state}
        {...this.methods}
      />
    )
  }
}

export default AppState;
