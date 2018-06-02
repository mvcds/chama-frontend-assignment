import TodoList from '../../Domain/Objects/TodoList/todoList.factory';

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
  }
}

const list = TodoList.WithNonDoneTodos(5)

function todoList (state = list, { type, payload }) {
  const reducer = REDUCERS[type]

  return reducer ? reducer(state, payload) : state
}

export default todoList;
