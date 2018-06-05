import { connect } from 'react-redux';

function toggleTodo (dispatch, todo, isCompleted) {
  dispatch({
    type: 'TOGGLE_TODO_ASYNC',
    payload: {
      todo,
      isCompleted
    }
  })
}

function editTodo (dispatch, todo, text) {
  dispatch({
    type: 'EDIT_TODO_ASYNC',
    payload: {
      todo,
      text
    }
  })
}

function deleteTodo (dispatch, todo) {
  dispatch({
    type: 'DELETE_TODO_ASYNC',
    payload: {
      todo
    }
  })
}

function mapStateToProps ({ todoList: { todos }}) {
  return {
    todos
  };
}

function mapDispatchToProps (dispatch) {
  return {
    onToggle: toggleTodo.bind(null, dispatch),
    onEdit: editTodo.bind(null, dispatch),
    onDelete: deleteTodo.bind(null, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
