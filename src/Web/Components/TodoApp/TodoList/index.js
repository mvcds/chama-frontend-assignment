import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import TodoItem from './TodoItem'

import './todoList.css';

function asItem (todo, index) {
  return (
    <Draggable
      key={todo.id}
      draggableId={todo.id}
      index={index}
    >
      {(provided, snapshot) => (
        <li
          className="todo-list__item"
          ref={provided.innerRef}
          {...provided.draggableProps}

        >
          <TodoItem
            {...this}
            todo={todo}
            handle={provided.dragHandleProps}
          />
        </li>
      )}
    </Draggable>
  )
}

function TodoList ({ todos, onDragEnd, ...item }) {
  if (!todos) return null;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todos">
        {(provided, snapshot) => (
          <ul
            className="todo-list"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {todos.map(asItem, item)}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default TodoList;
