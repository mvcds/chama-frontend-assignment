import Todo from '../../Entities/Todo';

const DEFAULTS = {
  todos: []
}

function isCompleted (todo) {
  return todo.isCompleted;
}

function cloneTodo (todo) {
  return todo.clone()
}

function toogleAll (todo) {
  const clone = todo.clone();

  clone.isCompleted = this;

  return clone;
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

  clone () {
    const { todos } = this

    return new TodoList({
      ...this,
      todos: todos.map(cloneTodo)
    })
  }

  toggleAll (isCompleted) {
    const todos = this.todos.map(toogleAll, isCompleted);

    this.todos = todos;
  }
}

export default TodoList;
