import { connect } from 'react-redux';

function mapStateToProps ({ firebase: { profile, auth } }) {
  const isLoaded = auth.isLoaded && profile.isLoaded

  return {
    shouldAuthenticate: profile.isEmpty,
    isLoaded
  };
}

export default connect(
  mapStateToProps,
)
