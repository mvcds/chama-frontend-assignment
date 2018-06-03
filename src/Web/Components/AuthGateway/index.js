import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { signInOptions } from '../../../Infra/Firebase';

const uiConfig = {
  signInFlow: 'redirect',
  signInOptions,
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

function Logout ({ onLogout }) {
  return (
    <button onClick={onLogout}>Logout</button>
  )
}

class AuthGateway extends Component {
  componentWillMount() {
    const { auth, onAuthStateChanged } = this.props

    this.unregisterAuthObserver = auth.onAuthStateChanged(onAuthStateChanged);
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render () {
    const { isLoggedIn, auth, onLogout } = this.props;

    if (isLoggedIn) return <Logout onLogout={onLogout} />

    return (
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={auth}
      />
    )
  }
}

export default AuthGateway;
