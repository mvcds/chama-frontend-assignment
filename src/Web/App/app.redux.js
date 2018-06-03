import { connect } from 'react-redux';

import App from './index';

function mapStateToProps ({ firebase: { isLoggedIn } }) {
  return {
    isLoggedIn
  };
}

export default connect(
  mapStateToProps
)(App);
