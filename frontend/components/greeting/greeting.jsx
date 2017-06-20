import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="sign_up-log_in">
    <Link to="/log_in">Log In!</Link>
    &nbsp;or&nbsp;
    <Link to="/sign_up">Sign Up?</Link>
  </div>
);

const makeItPersonal = (currentUser, log_out) => (
  <div className="header-group">
    <h2 className="name-header">Hey, (currentUser.username)! Ya hungry?</h2>
    <button className="button-header" onClick={log_out}>Log Out!</button>
  </div>
);

const Greeting = ({ currentUser, log_out}) => (
  currentUser ? makeItPersonal(currentUser, log_out) : sessionLinks()
);

export default Greeting;
