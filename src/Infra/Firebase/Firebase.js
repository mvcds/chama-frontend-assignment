function clone () {
  const { auth } = this;

  const data = {
    ...this,
    auth: () => auth
  }

  return new Firebase(data);
}

class Firebase {
  constructor(data) {
    const { auth, isLoggedIn = false } = data

    Object.assign(this, { auth: auth(), isLoggedIn });
  }

  login () {
    const doppleganger = clone.call(this);

    doppleganger.isLoggedIn = true;

    return doppleganger;
  }

  logout () {
    const doppleganger = clone.call(this);

    doppleganger.isLoggedIn = false;

    return doppleganger;
  }
}

export default Firebase;
