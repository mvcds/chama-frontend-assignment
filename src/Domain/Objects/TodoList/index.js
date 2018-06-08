import Todo from '../../Entities/Todo';

const ASCENDENT = 'asc'
const DESCENDENT = 'desc'
const DESTROY = { isDeleted: true }

const DEFAULTS = {
  todos: [],
  sort: ASCENDENT
}

function isCompleted (todo) {
  return isActive(todo) && todo.isCompleted;
}

function isActive (todo) {
  return !todo.isDeleted;
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

function asJson (json, [ key, value ]) {
  return {
    ...json,
    [key]: value
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

  toJson () {
    return Array.from(this.__rawTodos.entries())
      .reduce(asJson, {});
  }

  readTodos (rawTodos) {
    const todos = Object.entries(rawTodos)
      .map(([ id, todo ]) => new Todo({ ...todo, id }));

    return new TodoList({ todos });
  }

  moveTodos (source, destination) {
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
