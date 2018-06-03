function clone () {
  const { auth } = this;

  const data = {
    auth: () => auth
  }

  return new Firebase(data);
}

class Firebase {
  constructor({ auth }) {
    Object.assign(this, { auth: auth() });
  }

  get isLoggedIn () {
    return !!this.auth.currentUser;
  }

  login () {
    return clone.call(this);
  }

  logout () {
    if (this.auth.currentUser === null) return this;

    this.auth.signOut();

    return clone.call(this);
  }
}

export default Firebase;
