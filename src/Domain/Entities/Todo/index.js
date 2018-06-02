const DEFAULTS = {
  isCompleted: false,
  isDeleted: false
}

class Todo {
  constructor (data) {
    const id = data.id || new Date().getTime().toString();

    Object.assign(this, DEFAULTS, data, { id });
  }
}

export default Todo;
