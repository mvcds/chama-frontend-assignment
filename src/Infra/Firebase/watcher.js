class Firewatcher {
  get create () {
    return this.__firebase.push;
  }

  get update () {
    return this.__firebase.set;
  }

  read (path) {
    const ref = this.__firebase.ref(path);

    return () => new Promise((resolve) => {
      ref.on('value', (snapshot) => resolve(snapshot.val()))
    });
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
