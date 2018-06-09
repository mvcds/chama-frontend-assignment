import firebase from 'firebase';

class Firewatcher {
  constructor() {
    this.read = this.read.bind(this)
    this.set = this.set.bind(this)
  }

  get create () {
    return this.__firebase.push;
  }

  get update () {
    return this.__firebase.set;
  }

  read (path) {
    return this.__firebase.ref(path).once('value');
  }

  get delete () {
    return this.__firebase.remove;
  }

  set (path, todos) {
    return this.__firebase.ref(path).set(todos);
  }

  ignite (firebase) {
    const doppelganger = new Firewatcher({ ...this })

    doppelganger.__firebase = firebase;

    return doppelganger;
  }

  extinguish () {
    return this.ignite();
  }

  login () {
    if (this.__firebase) {
      const google = new firebase.auth.GoogleAuthProvider();

      this.__firebase.auth().signInWithRedirect(google);
    }

    return this
  }

  logout () {
    if (this.__firebase) {
      this.__firebase.auth().signOut();
    }

    return this;
  }
}

export default Firewatcher;
