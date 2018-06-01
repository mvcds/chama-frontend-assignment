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

    this.todos[index] = oldTodo.clone({ isCompleted })
  }
}

export default TodoList;
