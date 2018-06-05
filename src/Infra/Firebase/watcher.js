class Firewatcher {
  get create () {
    return this.__firebase.push;
  }

  get update () {
    return this.__firebase.set;
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
