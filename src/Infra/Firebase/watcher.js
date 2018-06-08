class Firewatcher {
  constructor() {
    this.read = this.read.bind(this)
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

  ignite (firebase) {
    const doppelganger = new Firewatcher({ ...this })

    doppelganger.__firebase = firebase;

    return doppelganger;
  }

  extinguish () {
    return this.ignite();
  }
}

export default Firewatcher;
