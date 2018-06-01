import React, { Component } from 'react';

import TodoItem from './index'

function handleToggle (event) {
  const isCompleted = event.target.checked;

  this.setState({ isCompleted });
  this.props.onToggle(this.props.todo, isCompleted);
}

class TodoItemState extends Component {
  constructor (props) {
    super(props);

    this.state = {
      text: props.todo.text,
      isCompleted: props.todo.isCompleted
    }

    this.methods = {
      onToggle: handleToggle.bind(this)
    }
  }

  render () {
    return (
      <TodoItem
        {...this.props}
        {...this.state}
        {...this.methods}
      />
    )
  }
}

export default TodoItemState;
