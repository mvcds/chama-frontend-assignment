const DEFAULTS = {
  isCompleted: false,
  isDeleted: false
}

class Todo {
  constructor (data) {
    Object.assign(this, DEFAULTS, data);
  }
}

export default Todo;
