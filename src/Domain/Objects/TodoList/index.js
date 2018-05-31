const DEFAULTS = {
  todos: []
}

function isCompleted (todo) {
  return todo.isCompleted;
}

class TodoList {
  constructor (data) {
    Object.assign(this, DEFAULTS, data);
  }

  get length () {
    return this.todos.length;
  }

  get isCompleted () {
    return this.todos.every(isCompleted);
  }
}

export default TodoList;
