import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Provider } from 'react-redux';

import {
  Route,
  Redirect,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div className="main-stuff">
    <header className="main-header">
      <h1>STEALPAL</h1>
      <h2>No such things as halfway crooks</h2>

    </header>
    <div className="fake-modal">
      <GreetingContainer />
      <Route path="/log_in" component={SessionFormContainer} />
      <Route path="/sign_up" component={SessionFormContainer} />
    </div>
  </div>
);

export default App;
