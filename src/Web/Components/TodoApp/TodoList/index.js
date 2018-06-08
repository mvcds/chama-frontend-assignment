import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import TodoItem from './TodoItem'

import './todoList.css';

function asItem (todo, index) {
  const { item, onHover } = this

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
            {...item}
            todo={todo}
            handle={provided.dragHandleProps}
            onHover={onHover}
          />
        </li>
      )}
    </Draggable>
  )
}

class TodoList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isDraging: false
    }

    this.onHover = this.onHover.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragStart () {
    for (const ref in this.refs) {
      this.refs[ref].pause();
    }

    this.setState({ isDraging: true });
  }

  onDragEnd () {
    this.setState({ isDraging: false });
    this.props.onDragEnd(...arguments);
  }

  onHover (status) {
    if (this.state.isDraging) return;

    for (const ref in this.refs) {
      this.refs[ref].currentTime = 0;
    }

    const audio = this.refs[status];

    audio && audio.play()
  }

  render () {
    const { todos, ...item } = this.props

    if (!todos) return null;

    const { onDragStart, onDragEnd, onHover } = this

    return (
      <DragDropContext
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <Droppable droppableId="todos">
          {(provided, snapshot) => (
            <ul
              className="todo-list"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {todos.map(asItem, { item, onHover })}
            </ul>
          )}
        </Droppable>
        <audio preload="auto" ref="near">
          <source src="./beep.mp3"></source>
        </audio>
        <audio preload="auto" ref="expired">
          <source src="./horse.ogg"></source>
        </audio>
      </DragDropContext>
    )
  }
}

export default TodoList;
