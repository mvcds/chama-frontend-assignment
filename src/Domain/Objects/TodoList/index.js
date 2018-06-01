import Todo from '../../Entities/Todo';

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

  addTodo (text) {
    const todo = new Todo({ text })

    this.todos.push(todo);
  }

  changeCompleteness (todo, isCompleted) {
    const index = this.todos.findIndex(todo.isSame)

    const oldTodo = this.todos[index]

    const data = Object.assign({}, oldTodo, { isCompleted })

    this.todos[index] = new Todo(data)
  }
}

export default TodoList;
