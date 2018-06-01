import TodoList from '../../Domain/Objects/TodoList';

const REDUCERS = {
  TOGGLE_TODO: function (state, { todo, isCompleted }) {
    const clone = state.clone();

    clone.changeCompleteness(todo, isCompleted);

    return clone;
  },
  TOGGLE_ALL: function (state, { isCompleted }) {
    const clone = state.clone();

    clone.toggleAll(isCompleted);

    return clone;
  },
  CREATE_TODO: function (state, { text }) {
    const clone = state.clone();

    clone.addTodo(text);

    return clone;
  }
}

const list = new TodoList()

function todoList (state = list, { type, payload }) {
  const reducer = REDUCERS[type]

  return reducer ? reducer(state, payload) : state
}

export default todoList;
