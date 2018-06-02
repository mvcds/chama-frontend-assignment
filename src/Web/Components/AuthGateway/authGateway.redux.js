import { connect } from 'react-redux';

import AuthGateway from './index';

function changeAuthState (dispatch, user) {
  dispatch({
    type: 'AUTH_CHANGE',
    payload: {
      user
    }
  })
}

function mapStateToProps ({ firebase: { auth, isSignedUp } }) {
  return {
    auth,
    isSignedUp
  };
}

function mapDispatchToProps (dispatch) {
  return {
    onAuthStateChanged: changeAuthState.bind(null, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthGateway);
