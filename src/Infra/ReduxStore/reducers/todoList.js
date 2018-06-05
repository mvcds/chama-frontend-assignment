import TodoList from '../../../Domain/Objects/TodoList';

const DEFAULT = new TodoList();

const REDUCERS = {
  ADD_TODO: (state, { todo }) => state.addTodo(todo),
  EDIT_TODO: (state, { todo, text }) => state.editTodo(todo, { text }),
  TOGGLE_TODO: (state, { todo, isCompleted }) => state.editTodo(todo, { isCompleted }),
  DELETE_TODO: (state, { todo }) => state.deleteTodo(todo),
  TOGGLE_ALL: (state, { isCompleted }) => state.toggleAll(isCompleted),
  TOGGLE_SORTER: (state) => state.toggleSorter(),
  CLEAR_COMPLETED_TODOS: (state) => state.clearCompleted(),
  READ_TODOS: (state, { todos }) => state.readTodos(todos)
}

function todoList (state = DEFAULT, { type, payload }) {
  const reducer = REDUCERS[type]

  return reducer ? reducer(state, payload) : state;
}

export default todoList;
