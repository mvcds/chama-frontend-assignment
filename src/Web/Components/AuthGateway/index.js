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
  constructor(props) {
    super(props);

    this.auth = this.props.firebase.auth();

    this.onLogout = this.props.firebase.logout;
  }

  render () {
    const { onLogout, auth } = this;

    if (this.props.shouldAuthenticate) {
      return (
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={auth}
        />
      )
    }

    if (this.props.isLoaded) return <Logout onLogout={onLogout} />

    return (
      <div>Authenticating...</div>
    )
  }
}

export default AuthGateway;
