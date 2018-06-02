import Todo from '../../Entities/Todo';

const DEFAULTS = {
  todos: []
}

function isCompleted (todo) {
  return todo.isCompleted;
}

function toogleAll (todo) {
  const clone = todo.clone();

  clone.isCompleted = this;

  return clone;
}

function addToMapping (map, todo) {
  return map.set(todo.id, todo);
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
    const todo = new Todo({ text });

    this.__todos.set(todo.id, todo);
  }

  editTodo (todo, data) {
    const oldTodo = this.__todos.get(todo.id);

    if (!oldTodo) return;

    this.__todos.set(todo.id, todo.clone(data));
  }

  clone () {
    const { todos } = this

    return new TodoList({ ...this, todos })
  }

  toggleAll (isCompleted) {
    for (const [id, todo] of this.__todos) {
      this.__todos.set(id, todo.clone({ isCompleted }));
    }
  }
}

export default TodoList;
