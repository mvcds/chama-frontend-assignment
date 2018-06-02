import Firebase from '../../Infra/Firebase';

import User from '../../Domain/Entities/User';

const REDUCERS = {
  AUTH_CHANGE: (state, { user: rawUser }) => {
    if (!rawUser) return state.logout();

    const user = new User(rawUser);

    return state.login(user);
  }
}

function firebase (state = Firebase, { type, payload }) {
  const reducer = REDUCERS[type]

  return reducer ? reducer(state, payload) : state;
}

export default firebase;
