import { connect } from 'react-redux';

function login (dispatch) {
  dispatch({
    type: 'LOGIN'
  })
}

function logout (dispatch) {
  dispatch({
    type: 'LOGOUT'
  })
}

function mapStateToProps ({ firebase: { profile, auth } }) {
  const isLoaded = auth.isLoaded && profile.isLoaded

  return {
    shouldAuthenticate: profile.isEmpty,
    userName: profile.displayName,
    isLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: login.bind(null, dispatch),
    onLogout: logout.bind(null, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
