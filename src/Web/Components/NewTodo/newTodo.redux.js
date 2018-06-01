import { connect } from 'react-redux';

import NewTodo from './newTodo.state';

function addTodo (dispatch, text) {
  dispatch({
    type: 'ADD_TODO',
    payload: {
      text
    }
  })
}

function mapDispatchToProps (dispatch) {
  return {
    addTodo: addTodo.bind(null, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(NewTodo);
