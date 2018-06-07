import React from 'react';
import bem from 'bem-classname'

import Calendar from '../../../Calendar'
import FormattedDate from '../../../FormattedDate'

import './todoItem.css';

const baseClass = bem.bind(null, 'todo-item')

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
        className={baseClass('completion')}
        type="checkbox"
        onChange={onToggle}
        checked={todo.isCompleted}
      />
      <span
        className={baseClass('text')}
        onDoubleClick={onStartEditingText}
      >
        {todo.text}
      </span>
      <button
        className={baseClass('due-date')}
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
      className={baseClass('input')}
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

  return (
    <Todo {...rest} />
  )
}

export default TodoItem;
