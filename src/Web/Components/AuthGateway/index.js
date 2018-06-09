import React from 'react';

function Authentication () {
  return (
    <div>Authenticating...</div>
  )
}

function Logout ({ onLogout, userName }) {
  return (
    <button onClick={onLogout}>
      Logout, {userName}
    </button>
  )
}

function Login ({ onLogin }) {
  return (
    <button onClick={onLogin}>
      Login with Google
    </button>
  )
}

function AuthGateway({ shouldAuthenticate, isLoaded, ...auth }) {
  if (shouldAuthenticate) return <Login {...auth} />

  if (isLoaded) return <Logout {...auth} />

  return <Authentication />
}

export default AuthGateway;
