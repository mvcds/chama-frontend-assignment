import { connect } from 'react-redux';

import App from './index';

function mapStateToProps ({ firebase: { profile, auth } }) {
  const isLoaded = auth.isLoaded && profile.isLoaded

  return {
    isLoaded,
    shouldAuthenticate: profile.isEmpty
  };
}

export default connect(
  mapStateToProps
)(App);
