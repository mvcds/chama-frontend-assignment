function clone (user) {
  const { auth } = this;

  const data = {
    auth: () => auth,
    user
  }

  return new Firebase(data);
}

class Firebase {
  constructor({ auth, user }) {
    Object.assign(this, { auth: auth(), user });
  }

  get isSignedUp () {
    return !!this.user;
  }

  login (user) {
    return clone.call(this, user)
  }

  logout () {
    return clone.call(this, undefined)
  }
}

export default Firebase;
