import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import NewTodo from './newTodo.state';
import redux from './newTodo.redux';

export default compose(
  firebaseConnect(),
  redux
)(NewTodo)
