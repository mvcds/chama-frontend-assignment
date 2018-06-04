import { connect } from 'react-redux';

function addTodo (dispatch, firebase, text, uid) {
  firebase.push(`users/${uid}/todos`, { text })
  dispatch({
    type: 'ADD_TODO',
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

function mapDispatchToProps (dispatch, { firebase }) {
  return {
    addTodo: addTodo.bind(null, dispatch, firebase)
  };
}

function mergeProps (state, dispatch) {
  return {
    ...state,
    ...dispatch,
    addTodo: (text) => dispatch.addTodo(text, state.uid)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)
