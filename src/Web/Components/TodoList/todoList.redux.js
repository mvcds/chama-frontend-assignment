import { connect } from 'react-redux';

import TodoList from './index';

function toggleTodo (dispatch, todo, isCompleted) {
  dispatch({
    type: 'TOGGLE_TODO',
    payload: {
      todo,
      isCompleted
    }
  })
}

function mapStateToProps ({ todoList: { todos } }) {
  return {
    todos
  };
}

function mapDispatchToProps (dispatch) {
  return {
    onToggle: toggleTodo.bind(null, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
