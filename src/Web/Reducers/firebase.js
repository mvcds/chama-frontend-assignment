import Firebase from '../../Infra/Firebase';

import User from '../../Domain/Entities/User';

const REDUCERS = {
  AUTH_CHANGE: (state, { user }) => {
    if (!user) return state.logout();

    return state.login();
  }
}

function firebase (state = Firebase, { type, payload } = {}) {
  const reducer = REDUCERS[type]

  return reducer ? reducer(state, payload) : state;
}

export default firebase;
