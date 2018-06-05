class Firewatcher {
  get create () {
    return this.__firebase.push;
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
