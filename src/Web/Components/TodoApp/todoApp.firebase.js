import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import TodoApp from './index';
import redux from './todoApp.redux';

export default compose(
  firebaseConnect(),
  redux
)(TodoApp)
