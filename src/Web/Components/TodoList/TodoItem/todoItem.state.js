import React, { Component } from 'react';

import TodoItem from './index'

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

function resetEditedTodo () {
  const { text } = this.props.todo

  this.setState({
    isEditing: false,
    editedTodo: text
  })
}

function closeForEdition () {
  this.setState({ isEditing: false })
}

function mutate () {
  const text = this.state.editedTodo.trim();

  const { todo } = this.props

  if (!!text && text !== todo.text) this.props.onEdit(todo, text);

  closeForEdition.call(this);
}

function handleKeyDown (event) {
  if (event.keyCode === ESCAPE_KEY) return resetEditedTodo.call(this);

  if (event.keyCode !== ENTER_KEY) return;

  event.preventDefault();

  mutate.call(this);
}

function handleChange (event) {
  this.setState({ editedTodo: event.target.value });
}

function handleToggle (todo, event) {
  this.props.onToggle(todo, event.target.checked);
}

function openForEdition () {
  this.setState({ isEditing: true })
}

class TodoItemState extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isEditing: false,
      editedTodo: props.todo.text
    }

    this.methods = {
      onToggle: handleToggle.bind(this, props.todo),
      onStartEditing: openForEdition.bind(this),
      onKeyDown: handleKeyDown.bind(this),
      onChange: handleChange.bind(this),
      onExitEditing: mutate.bind(this)
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
