import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';

import AuthGateway from './index';
import redux from './authGateway.redux';

export default compose(
  firebaseConnect(),
  redux
)(AuthGateway)
