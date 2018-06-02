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

class AuthGateway extends Component {
  componentDidMount() {
    const { auth, onAuthStateChanged } = this.props

    this.unregisterAuthObserver = auth.onAuthStateChanged(onAuthStateChanged);
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render () {
    if (this.props.isSignedUp) return null;

    return (
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={this.props.auth}
      />
    )
  }
}

export default AuthGateway;
