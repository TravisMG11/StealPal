import { connect } from 'react-redux';
import { log_out } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  log_out: () => dispatch(log_out())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
