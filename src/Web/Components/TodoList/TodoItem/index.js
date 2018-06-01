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
      <span onDoubleClick={onStartEditing}>
        {todo.text}
      </span>
    </React.Fragment>
  )
}

function EditableTodo ({ editedTodo, onKeyDown, onChange, onExitEditing }) {
  return (
    <input
      className="todo-list__input"
      placeholder="What needs to be done?"
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
