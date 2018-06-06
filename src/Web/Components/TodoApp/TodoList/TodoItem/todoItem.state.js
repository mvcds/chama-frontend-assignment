import React, { Component } from 'react';

import TodoItem from './index'

const ESCAPE_KEY = 27;

function resetState () {
  const { text } = this.props.todo;

  this.setState({
    isEditing: false,
    text
  });
}

function handleKeyDown (event) {
  if (event.keyCode !== ESCAPE_KEY) return;

  resetState.call(this);
}

function handleChange (event) {
  this.setState({ text: event.target.value });
}

function handleToggle (todo, event) {
  this.props.onToggle(todo, event.target.checked);
}

function handleEdition (isEditing) {
  this.setState({ isEditing })
}

function handleUpdate (todo) {
  const { isEditing, ...changes } = this.state;

  this.props.onEdit(todo, changes);

  resetState.call(this);
}

class TodoItemState extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isEditing: false,
      text: props.todo.text
    }

    this.methods = {
      onToggle: handleToggle.bind(this, props.todo),
      onKeyDown: handleKeyDown.bind(this),
      onChangeText: handleChange.bind(this),
      onUpdate: handleUpdate.bind(this, props.todo),
      onOpenEditing: handleEdition.bind(this, true),
      onCloseEditing: handleEdition.bind(this, false)
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
