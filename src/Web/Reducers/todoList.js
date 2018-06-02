import TodoList from '../../Domain/Objects/TodoList/todoList.factory';

const DEFAULT = TodoList.WithNonDoneTodos(5);

const REDUCERS = {
  TOGGLE_TODO: (state, { todo, isCompleted }) => state.editTodo(todo, { isCompleted }),
  TOGGLE_ALL: (state, { isCompleted }) => state.toggleAll(isCompleted),
  ADD_TODO: (state, { text }) => state.addTodo(text),
  EDIT_TODO: (state, { todo, text }) => state.editTodo(todo, { text }),
  DELETE_TODO: (state, { todo }) => state.deleteTodo(todo),
  TOGGLE_SORTER: (state) => state.toggleSorter(),
  CLEAR_COMPLETED_TODOS: (state) => state.clearCompleted()
}

function todoList (state = DEFAULT, { type, payload }) {
  const reducer = REDUCERS[type]

  return reducer ? reducer(state, payload) : state;
}

export default todoList;
