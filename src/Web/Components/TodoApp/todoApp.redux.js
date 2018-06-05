import { connect } from 'react-redux';

function ignite (dispatch, firebase) {
  dispatch({
    type: 'IGNITE',
    payload: {
      firebase
    }
  })
}

function extinguish (dispatch) {
  dispatch({ type: 'EXTINGUISH' })
}

function mapStateToProps ({ firebase: { profile } }) {
  return {
    shouldAuthenticate: profile.isEmpty
  };
}

function mapDispatchToProps (dispatch, { firebase }) {
  return {
    dispatch,
    firebase
  }
}

function mergeProps ({ shouldAuthenticate }, { dispatch, firebase }) {
  return {
    shouldAuthenticate,
    onIgnite: ignite.bind(null, dispatch, firebase),
    onExtinguish: extinguish.bind(null, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
);
