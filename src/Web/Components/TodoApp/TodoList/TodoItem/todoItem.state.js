import React, { Component } from 'react';

import TodoItem from './index'

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

function resetEditedText () {
  const { text } = this.props.todo

  this.setState({
    isEditingText: false,
    text
  })
}

function toogle (todo, event) {
  this.props.onToggle(todo, event.target.checked);
}

function closeTextEdition () {
  this.setState({ isEditingText: false })
}

function readKey (event) {
  if (event.keyCode === ESCAPE_KEY) return resetEditedText.call(this);

  if (event.keyCode !== ENTER_KEY) return;

  event.preventDefault();

  finishEditingText.call(this);
}

function changeText (event) {
  this.setState({ text: event.target.value });
}

function startEditingText () {
  this.setState({ isEditingText: true })
}

function finishEditingText () {
  const text = this.state.text.trim();

  const { todo } = this.props

  if (!text) {
    this.props.onDelete(todo);
  } else if (text !== todo.text) {
    this.props.onEdit(todo, text);
  }

  closeTextEdition.call(this);
}

function changeDueDate (date) {
  this.setState({ date });
}

function startEditingDueDate () {
  this.setState({ isEditingDueDate: true })
}

function finishEditingDueDate () {
  this.setState({ isEditingDueDate: false })
}

function saveDueDate (todo, date) {
  this.props.onSaveDueDate(todo, date);
}

class TodoItemState extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isEditingText: false,
      isEditingDueDate: false,
      text: props.todo.text,
      dueDate: props.todo.dueDate
    }

    this.methods = {
      onToggle: toogle.bind(this, props.todo),
      onKeyDown: readKey.bind(this),
      onChangeText: changeText.bind(this),
      onStartEditingText: startEditingText.bind(this),
      onChangDueDate: changeDueDate.bind(this),
      onFinishEditingText: finishEditingText.bind(this),
      onStartEditingDueDate: startEditingDueDate.bind(this),
      onFinishEditingDueDate: finishEditingDueDate.bind(this),
      onSaveDueDate: saveDueDate.bind(this, props.todo)
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
