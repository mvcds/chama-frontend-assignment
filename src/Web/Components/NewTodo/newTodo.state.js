import React, { Component } from 'react';

import NewTodo from './index'

const ENTER_KEY = 13;

function handleKeyDown (event) {
  if (event.keyCode !== ENTER_KEY) return;

  event.preventDefault();

  const text = this.state.text.trim();

  if (!text) return;

  this.props.addTodo(text);
  this.setState({ text: '' });
}

function handleChange (event) {
  this.setState({ text: event.target.value });
}

class NewTodoState extends Component {
  constructor (props) {
    super(props);

    this.state = {
      text: ''
    }

    this.methods = {
      onKeyDown: handleKeyDown.bind(this),
      onChange: handleChange.bind(this)
    }
  }

  render () {
    return (
      <NewTodo
        {...this.props}
        {...this.state}
        {...this.methods}
      />
    )
  }
}

export default NewTodoState;
