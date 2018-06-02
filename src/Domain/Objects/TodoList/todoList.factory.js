import { Factory } from 'rosie';

import Todo from '../../Entities/Todo/todo.factory';

import TodoList from './index';

const factory = new Factory()
  .attr('todos', [])
  .attr('sort', 'desc');

function create (data) {
  const fixture = factory.build(data);

  return new TodoList(fixture);
}

function createList (quantity) {
  const todos = new Array(quantity).fill()
    .map(this);

  return create({ todos });
}

export default {
  Empty: create.bind(null, { todos: [] }),
  WithNonDoneTodos: createList.bind(Todo.NonCompleted),
  WithAllDoneTodos: createList.bind(Todo.Completed),
  WithRandomizedTodos: createList.bind(Todo.Random)
}
