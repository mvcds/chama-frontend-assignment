import { connect } from 'react-redux';

function toggleTodo (dispatch, todo, isCompleted) {
  dispatch({
    type: 'TOGGLE_TODO',
    payload: {
      todo,
      isCompleted
    }
  })
}

function editTodo (dispatch, todo, text) {
  dispatch({
    type: 'EDIT_TODO',
    payload: {
      todo,
      text
    }
  })
}

function deleteTodo (dispatch, todo) {
  dispatch({
    type: 'DELETE_TODO',
    payload: {
      todo
    }
  })
}

function mapStateToProps ({ firebase: { data, auth } }) {
  const todos = data.users[auth.uid].todos || {}

  return {
    todos: Object.values(todos)
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
