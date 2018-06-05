import { connect } from 'react-redux';

import NewTodo from './newTodo.state';

function addTodo (dispatch, text) {
  dispatch({
    type: 'ADD_TODO_ASYNC',
    payload: {
      text
    }
  })
}

function mapStateToProps ({ firebase: { auth } }) {
  return {
    uid: auth.uid
  };
}

function mapDispatchToProps (dispatch) {
  return {
    addTodo: addTodo.bind(null, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTodo);
