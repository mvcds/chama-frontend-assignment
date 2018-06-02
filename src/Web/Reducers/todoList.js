import TodoList from '../../Domain/Objects/TodoList/todoList.factory';

const DEFAULT = TodoList.WithNonDoneTodos(5);

const REDUCERS = {
  TOGGLE_TODO: function (state, { todo, isCompleted }) {
    return state.editTodo(todo, { isCompleted });
  },
  TOGGLE_ALL: function (state, { isCompleted }) {
    return state.toggleAll(isCompleted);
  },
  ADD_TODO: function (state, { text }) {
    return state.addTodo(text);
  },
  EDIT_TODO: function (state, { todo, text }) {
    return state.editTodo(todo, { text });
  },
  DELETE_TODO: function (state, { todo }) {
    return state.deleteTodo(todo);
  },
  TOGGLE_SORTER: function (state) {
    return state.toggleSorter();
  },
  CLEAR_COMPLETED_TODOS: function (state) {
    return state.clearCompleted();
  }
}

function todoList (state = DEFAULT, { type, payload }) {
  const reducer = REDUCERS[type]

  return reducer ? reducer(state, payload) : state;
}

export default todoList;
