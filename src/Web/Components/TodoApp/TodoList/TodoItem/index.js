import React from 'react';

function StaticTodo ({ todo, onToggle, onStartEditing }) {
  return (
    <React.Fragment>
      <input
        className="todo-list__item-completion"
        type="checkbox"
        onChange={onToggle}
        checked={todo.isCompleted}
      />
      <span
        className="todo-list__item-text"
        onDoubleClick={onStartEditing}
      >
        {todo.text}
      </span>
      <span className="todo-list__item-priority">
        {todo.priority}
      </span>
    </React.Fragment>
  )
}

function EditableTodo ({ editedTodo, onKeyDown, onChange, onExitEditing }) {
  return (
    <input
      className="todo-list__input"
      placeholder="Empties get erased"
      value={editedTodo}
      onKeyDown={onKeyDown}
      onChange={onChange}
      onBlur={onExitEditing}
      autoFocus
    />
  )
}

function TodoItem ({ isEditing, ...rest }) {
  const Todo = isEditing ? EditableTodo : StaticTodo

  return <Todo {...rest} />
}

export default TodoItem;
