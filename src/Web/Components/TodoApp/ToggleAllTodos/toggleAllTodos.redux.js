import { connect } from 'react-redux';

import TodoList from './index';

function toggleAll (dispatch, { target }) {
  dispatch({
    type: 'TOGGLE_ALL_ASYNC',
    payload: {
      isCompleted: target.checked
    }
  })
}

function mapStateToProps ({ todoList: { todos, isCompleted } }) {
  return {
    hasTodos: !!todos.length,
    isCompleted
  };
}

function mapDispatchToProps (dispatch) {
  return {
    onToggleAll: toggleAll.bind(null, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
