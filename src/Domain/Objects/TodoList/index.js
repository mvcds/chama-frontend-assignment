function isCompleted (todo) {
  return todo.isComplete;
}

class TodoList {
  constructor (data) {
    Object.assign(this, data);
  }

  get length () {
    return this.todos.length;
  }

  get isCompleted () {
    return this.todos.every(isCompleted);
  }
}

export default TodoList;
