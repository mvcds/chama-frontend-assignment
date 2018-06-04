import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import TodoList from './index';
import redux from './todoList.redux';

export default compose(
  firebaseConnect((_, { getState }) => {
    const { firebase: { auth: { uid } } } = getState()

    return [`users/${uid}/todos`]
  }),
  redux
)(TodoList)
