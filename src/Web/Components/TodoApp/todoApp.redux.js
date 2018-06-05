import { connect } from 'react-redux';

import TodoApp from './index';

function mapStateToProps ({ firebase: { profile } }) {
  return {
    shouldAuthenticate: profile.isEmpty
  };
}

export default connect(
  mapStateToProps
)(TodoApp);
