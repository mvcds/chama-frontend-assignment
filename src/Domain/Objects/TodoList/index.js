import Todo from '../../Entities/Todo';

const ASCENDENT = 'asc'
const DESCENDENT = 'desc'

const DEFAULTS = {
  todos: [],
  sort: DESCENDENT
}

function isCompleted (todo) {
  return todo.isCompleted;
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
  const todos = Array.from(this.__todos.values());

  return new TodoList({ ...this, todos });
}

function AscSort (a, b) {
  return a.priority - b.priority;
}

function DescSort (a, b) {
  return AscSort(b, a);
}

class TodoList {
  constructor (data) {
    const { todos, ...rest } = Object.assign({}, DEFAULTS, data)

    Object.assign(this, rest);

    this.__todos = todos.reduce(addToMapping, new Map());
  }

  get todos () {
    const sorter = this.sort === ASCENDENT ? AscSort : DescSort;

    return Array.from(this.__todos.values())
      .reduce(setPriority, [])
      .sort(sorter);
  }

  get completed () {
    return this.todos.filter(isCompleted);
  }

  get isCompleted () {
    return this.todos.every(isCompleted);
  }

  addTodo (text) {
    const doppelganger = clone.apply(this);

    const todo = new Todo({ text });

    doppelganger.__todos.set(todo.id, todo);

    return doppelganger;
  }

  editTodo (todo, data) {
    const canEdit = this.__todos.has(todo.id);

    if (!canEdit) return this;

    const doppelganger = clone.apply(this);

    const oldTodo = doppelganger.__todos.get(todo.id);

    Object.assign(oldTodo, data);

    return doppelganger;
  }

  deleteTodo (todo) {
    return this.editTodo(todo, { isDeleted: true });
  }

  toggleAll (isCompleted) {
    const doppelganger = clone.apply(this);
    const data = { isCompleted };

    for (const [, todo] of doppelganger.__todos) {
      Object.assign(todo, data);
    }

    return doppelganger;
  }

  toggleSorter () {
    const doppelganger = clone.apply(this);

    doppelganger.sort = doppelganger.sort === ASCENDENT ? 'desc' : ASCENDENT;

    return doppelganger;
  }

  clearCompleted () {
    const doppelganger = clone.apply(this);
    const data = { isDeleted: true };

    for (const todo of doppelganger.completed) {
      Object.assign(todo, data);
    }

    return doppelganger;
  }
}

export default TodoList;
