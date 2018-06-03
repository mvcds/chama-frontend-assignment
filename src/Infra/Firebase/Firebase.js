function clone () {
  return new Firebase(this);
}

class Firebase {
  constructor(data) {
    Object.assign(this, data);
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
