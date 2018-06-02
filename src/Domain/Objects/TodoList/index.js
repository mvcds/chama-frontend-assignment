import Todo from '../../Entities/Todo';

const DEFAULTS = {
  todos: []
}

function isCompleted (todo) {
  return todo.isCompleted;
}

function addToMapping (map, todo) {
  return map.set(todo.id, todo);
}

function clone () {
  const todos = Array.from(this.__todos.values());

  return new TodoList({ ...this, todos });
}

class TodoList {
  constructor (data) {
    const { todos, ...rest } = Object.assign({}, DEFAULTS, data)

    Object.assign(this, rest);

    this.__todos = todos.reduce(addToMapping, new Map());
  }

  get todos () {
    return Array.from(this.__todos.values());
  }

  get isCompleted () {
    return this.todos.every(isCompleted);
  }

  addTodo (text) {
    const doppelganger = clone.apply(this);

    const todo = new Todo({ text });

    doppelganger.__todos.set(todo.id, todo);

    return doppelganger;
  }

  editTodo (todo, data) {
    const canEdit = this.__todos.has(todo.id);

    if (!canEdit) return this;

    const doppelganger = clone.apply(this);

    const oldTodo = doppelganger.__todos.get(todo.id);

    Object.assign(oldTodo, data);

    return doppelganger;
  }

  toggleAll (isCompleted) {
    const doppelganger = clone.apply(this);

    for (const [, todo] of doppelganger.__todos) {
      Object.assign(todo, { isCompleted });
    }

    return doppelganger;
  }
}

export default TodoList;
