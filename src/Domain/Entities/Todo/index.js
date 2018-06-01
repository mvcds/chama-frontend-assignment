const DEFAULTS = {
  isCompleted: false
}

function isSame ({ id }) {
  return this.id === id
}

class Todo {
  constructor (data) {
    const id = new Date().getTime()

    Object.assign(this, DEFAULTS, data, { id });

    this.isSame = isSame.bind(this)
  }
}

export default Todo;
