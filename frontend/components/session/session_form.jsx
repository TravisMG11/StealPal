
import React from 'react';
// import Redirect from
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navLink() {
    if (this.props.formType === 'log_in') {
      return <Link className="sign_in_up_link" to='/sign_up'>Sign Up instead</Link>;
    } else {
      return <Link className="sign_in_up_link" to='/log_in'>Log In instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="log_in-form-wrapper">
        <form onSubmit={this.handleSubmit} className='log_in-form'>
          <br/>
            <header className="form-header" >
              <h2 className="RIP">No such things as halfway COOKS</h2>
              Please {this.props.formType} or {this.navLink()}
              {this.renderErrors()}
            </header>
            <div className="log_in-div">
              <br/>
              <label className="form-label">Email:
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="log_in-input"
                />
              </label>
              <br/>
              <label className="form-label">Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="log_in-input"
                />
              </label>
              <br/>
              <input className="log_in-button" type="submit" value="Submit" />
            </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
