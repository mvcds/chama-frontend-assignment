import Todo from '../../Entities/Todo';

const ASCENDENT = 'asc'
const DESCENDENT = 'desc'
const DESTROY = { isDeleted: true }

const DEFAULTS = {
  todos: [],
  sort: DESCENDENT
}

function isCompleted (todo) {
  return isActive(todo) && todo.isCompleted;
}

function isActive (todo) {
  return !todo.isDeleted;
}

function setPriority (list, todo) {
  if (todo.isDeleted) return list;

  const last = list[list.length - 1];

  todo.priority = (last ? last.priority : 0) + 1;

  return [ ...list, todo ];
}

function addToMapping (map, todo) {
  return map.set(todo.id, todo);
}

function clone () {
  const todos = Array.from(this.__rawTodos.values());

  return new TodoList({ ...this, todos });
}

function AscSort (a, b) {
  return a.priority - b.priority;
}

function DescSort (a, b) {
  return AscSort(b, a);
}

class TodoList {
  constructor (raw) {
    const data = Object.assign({}, DEFAULTS, raw)

    const {
      todos, completed, active, isCompleted,
      __rawTodos, __todos,
      ...rest
    } = data

    Object.assign(this, rest);

    this.__rawTodos = todos.reduce(addToMapping, new Map());
  }

  get todos () {
    if (this.__todos) return this.__todos;

    const sorter = this.sort === ASCENDENT ? AscSort : DescSort;

    this.__todos = Array.from(this.__rawTodos.values())
      .reduce(setPriority, [])
      .sort(sorter);

    return this.__todos;
  }

  get completed () {
    return this.todos.filter(isCompleted);
  }

  get active () {
    return this.todos.filter(isActive);
  }

  get isCompleted () {
    return this.todos.every(isCompleted);
  }

  addTodo (text) {
    const doppelganger = clone.call(this);

    const todo = new Todo({ text });

    doppelganger.__rawTodos.set(todo.id, todo);

    return doppelganger;
  }

  editTodo (todo, data) {
    const canEdit = this.__rawTodos.has(todo.id);

    if (!canEdit) return this;

    const doppelganger = clone.call(this);

    const oldTodo = doppelganger.__rawTodos.get(todo.id);

    Object.assign(oldTodo, data);

    return doppelganger;
  }

  deleteTodo (todo) {
    return this.editTodo(todo, DESTROY);
  }

  toggleAll (isCompleted) {
    const doppelganger = clone.call(this);
    const data = { isCompleted };

    for (const todo of doppelganger.active) {
      Object.assign(todo, data);
    }

    return doppelganger;
  }

  toggleSorter () {
    const doppelganger = clone.call(this);

    doppelganger.sort = doppelganger.sort === ASCENDENT ? 'desc' : ASCENDENT;

    return doppelganger;
  }

  clearCompleted () {
    const doppelganger = clone.call(this);

    for (const todo of doppelganger.completed) {
      Object.assign(todo, DESTROY);
    }

    doppelganger.__todos = undefined;

    return doppelganger;
  }
}

export default TodoList;
