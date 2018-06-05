import Firewatcher from '../../Firebase/watcher.js';

const DEFAULT = new Firewatcher();

const REDUCERS = {
  IGNITE: (state, { firebase }) => state.ignite(firebase),
  EXTINGUISH: (state) => state.extinguish(),
}

function firewatcher (state = DEFAULT, { type, payload }) {
  const reducer = REDUCERS[type]

  return reducer ? reducer(state, payload) : state;
}

export default firewatcher;
