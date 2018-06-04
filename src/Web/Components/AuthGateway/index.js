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
  constructor(props) {
    super(props);

    this.auth = this.props.firebase.auth();
    this.Logout = this.Logout.bind(this);
  }

  render () {
    if (this.props.shouldAuthenticate) return (
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={this.auth} />
    )

    const Content = this.props.isLoaded ? this.Logout : this.Authentication

    return <Content />
  }

  Authentication () {
    return (
      <div>Authenticating...</div>
    )
  }

  Logout () {
    const { firebase, userName } = this.props;

    return (
      <button onClick={firebase.logout}>
        Logout, {userName}
      </button>
    )
  }
}

export default AuthGateway;
