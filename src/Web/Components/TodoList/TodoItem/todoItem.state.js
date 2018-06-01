import React, { Component } from 'react';

import TodoItem from './index'

function handleToggle (todo, event) {
  this.props.onToggle(todo, event.target.checked);
}

class TodoItemState extends Component {
  constructor (props) {
    super(props);

    this.methods = {
      onToggle: handleToggle.bind(this, props.todo)
    }
  }

  render () {
    return (
      <TodoItem
        {...this.props}
        {...this.methods}
      />
    )
  }
}

export default TodoItemState;
