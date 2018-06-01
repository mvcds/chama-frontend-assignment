import { connect } from 'react-redux';

import App from './app.state';

function addTodo (dispatch, text) {
  dispatch({
    type: 'CREATE_TODO',
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
)(App);
