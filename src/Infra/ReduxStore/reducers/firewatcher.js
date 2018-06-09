import Firewatcher from '../../Firebase/watcher.js';

const DEFAULT = new Firewatcher();

const REDUCERS = {
  IGNITE: (state, { firebase }) => state.ignite(firebase),
  EXTINGUISH: (state) => state.extinguish(),
  LOGIN: (state) => state.login(),
  LOGOUT: (state) => state.logout()
}

function firewatcher (state = DEFAULT, { type, payload }) {
  const reducer = REDUCERS[type]

  return reducer ? reducer(state, payload) : state;
}

export default firewatcher;
