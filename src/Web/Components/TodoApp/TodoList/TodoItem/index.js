import React from 'react';

import Calendar from '../../../Calendar'
import FormattedDate from '../../../FormattedDate'

import './todoItem.css';

function DueDate (props) {
  const {
    isEditingDueDate, dueDate,
    onFinishEditingDueDate, onChangDueDate, onSaveDueDate
  } = props;

  if (!isEditingDueDate) return null;

  return (
    <Calendar
      title="Due Date"
      emptyDateMessage="Select a due date below"
      onClose={onFinishEditingDueDate}
      onChange={onChangDueDate}
      date={dueDate}
      onSave={onSaveDueDate}
    />
  )
}

function StaticTodo ({ todo, onToggle, onStartEditingText, onStartEditingDueDate, ...dueDate }) {
  return (
    <React.Fragment>
      <input
        className="todo-item__completion"
        type="checkbox"
        onChange={onToggle}
        checked={todo.isCompleted}
      />
      <span
        className="todo-item__text"
        onDoubleClick={onStartEditingText}
      >
        {todo.text}
      </span>
      <button
        className="todo-item__due-date"
        onClick={onStartEditingDueDate}
      >
        <FormattedDate
          emptyDateMessage="No due date"
          date={todo.dueDate}
        />
      </button>
      <DueDate {...dueDate} dueDate={todo.dueDate} />
    </React.Fragment>
  )
}

function EditableTodo ({ text, onKeyDown, onChangeText, onFinishEditingText }) {
  return (
    <input
      className="todo-item__input"
      placeholder="Empties get erased"
      value={text}
      onKeyDown={onKeyDown}
      onChange={onChangeText}
      onBlur={onFinishEditingText}
      autoFocus
    />
  )
}

function TodoItem ({ isEditingText, ...rest }) {
  const Todo = isEditingText ? EditableTodo : StaticTodo

  return <Todo {...rest} />
}

export default TodoItem;
