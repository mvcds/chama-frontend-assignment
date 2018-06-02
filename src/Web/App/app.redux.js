import { connect } from 'react-redux';

import App from './index';

function mapStateToProps ({ firebase: { isSignedUp } }) {
  return {
    isSignedUp
  };
}

export default connect(
  mapStateToProps
)(App);
