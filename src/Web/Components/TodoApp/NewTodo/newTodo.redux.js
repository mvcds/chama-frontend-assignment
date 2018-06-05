import { connect } from 'react-redux';

import NewTodo from './newTodo.state';

function addTodo (dispatch, text) {
  dispatch({
    type: 'ASYNC_ADD_TODO',
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
