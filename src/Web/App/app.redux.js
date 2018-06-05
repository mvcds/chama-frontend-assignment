import { connect } from 'react-redux';

import App from './index';

function mapStateToProps ({ firebase: { profile, auth } }) {
  return {
    isLoaded: auth.isLoaded && profile.isLoaded
  };
}

export default connect(
  mapStateToProps
)(App);
