import { connect } from 'react-redux';
import { log_in, log_out, sign_up } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn?: Boolean(session.currentUser),
    errors: session.errors
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formtType = location.pathname.slice(1);
  const processForm = (formType === 'log_in') ? log_in : sign_up;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)
