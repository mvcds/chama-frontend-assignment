import { connect } from 'react-redux';

import TodoListFooter from './index';

function toggleSorter (dispatch) {
  dispatch({ type: 'TOGGLE_SORTER' })
}

function clearTodos (dispatch) {
  dispatch({ type: 'CLEAR_COMPLETED_TODOS' })
}

function mapStateToProps ({ todoList: { todos, completed, sort } }) {
  return {
    total: todos.length,
    completed: completed.length,
    isAsc: sort === 'asc'
  };
}

function mapDispatchToProps (dispatch) {
  return {
    onToggle: toggleSorter.bind(null, dispatch),
    onClear: clearTodos.bind(null, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListFooter);
