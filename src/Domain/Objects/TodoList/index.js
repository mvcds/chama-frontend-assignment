import Todo from '../../Entities/Todo';

const ASCENDENT = 'asc'
const DESCENDENT = 'desc'
const DESTROY = { isDeleted: true }

const DEFAULTS = {
  todos: {},
  sort: ASCENDENT
}

function isCompleted (todo) {
  return isActive(todo) && todo.isCompleted;
}

function isActive (todo) {
  return !todo.isDeleted;
}

function clone () {
  const { __rawTodos: todos, sort } = this;

  return new TodoList({ todos, sort });
}

function AscSort (a, b) {
  return a.priority - b.priority;
}

function DescSort (a, b) {
  return AscSort(b, a);
}

function asJson (json, [ id, todo ]) {
  return {
    ...json,
    [id]: todo
  }
}

function convertActiveTodos (todos, [ id, todo ]) {
  if (todo.isDeleted) return todos;

  return {
    ...todos,
    [id]: new Todo({ ...todo, id })
  }
}

function swapTodos (active, source, destination) {
  const original = active[source];

  active[source] = active[destination];
  active[destination] = original;
}

function fixPriority(todo, priority, { length }) {
  const newPriority = this.sort === ASCENDENT ? (priority + 1) : (length - priority);

  todo.priority = newPriority;
}

function moveNaturally (source, destination) {
  const { active } = this;

  for (let index = source; index < destination; index++) {
    swapTodos(active, index, index + 1);
  }

  active.forEach(fixPriority, this)

  return clone.call(this);
}

function moveInverse (source, destination) {
  const { active } = this;

  for (let index = source; index > destination; index--) {
    swapTodos(active, index, index - 1);
  }

  active.forEach(fixPriority, this)

  return clone.call(this);
}

class TodoList {
  constructor (raw) {
    const { todos, sort } = Object.assign({}, DEFAULTS, raw)

    this.__rawTodos = todos;
    this.sort = sort;
  }

  get todos () {
    if (this.__todos) return this.__todos;

    const sorter = this.sort === ASCENDENT ? AscSort : DescSort;

    this.__todos = Object.values(this.__rawTodos)
      .filter(isActive)
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

  addTodo (todo) {
    const doppelganger = clone.call(this);

    doppelganger.__rawTodos[todo.id] = todo;

    return doppelganger;
  }

  editTodo (todo, data) {
    const oldTodo = this.__rawTodos[todo.id];

    if (!oldTodo) return this;

    const doppelganger = clone.call(this);

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

    doppelganger.sort = doppelganger.sort === ASCENDENT ? DESCENDENT : ASCENDENT;
    doppelganger.__todos = undefined;

    return doppelganger;
  }

  clearCompleted () {
    const doppelganger = clone.call(this);

    for (const todo of doppelganger.completed) {
      Object.assign(todo, DESTROY);
    }

    doppelganger.active.forEach(fixPriority, doppelganger);

    return doppelganger;
  }

  toJson () {
    return Object.entries(this.__rawTodos)
      .reduce(asJson, {});
  }

  readTodos (rawTodos) {
    const todos = Object.entries(rawTodos || {})
      .reduce(convertActiveTodos, {})

    return new TodoList({ ...this, todos });
  }

  moveTodos (source, destination) {
    if (source === destination) return this;

    const doppelganger = clone.call(this);

    const isNatural = source < destination;

    const move = isNatural ? moveNaturally : moveInverse;

    return move.call(doppelganger, source, destination);
  }

  createTodo ({ text }) {
    const priority = this.active.length + 1;

    return new Todo({ text, priority });
  }
}

export default TodoList;
