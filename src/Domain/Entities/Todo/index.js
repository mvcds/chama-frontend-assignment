const DEFAULTS = {
  isCompleted: false
}

class Todo {
  constructor (data) {
    const id = data.id || new Date().getTime().toString();

    Object.assign(this, DEFAULTS, data, { id });
  }

  clone (data = {}) {
    const { id } = this

    const cloned = Object.assign({}, this, data, { id })

    return new Todo(cloned)
  }
}

export default Todo;
