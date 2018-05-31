class Todo {
  constructor (data) {
    const id = new Date().getTime()

    Object.assign(this, data, { id });
  }
}

export default Todo;
