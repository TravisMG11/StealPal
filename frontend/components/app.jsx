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
    <header>
      <h1>StealPal: Steal a Meal!</h1>
      <h2>No such things as halfway crooks</h2>

    </header>

    <GreetingContainer className="fake-modal"/>
    <Route path="/log_in" component={SessionFormContainer} />
    <Route path="/sign_up" component={SessionFormContainer} />
  </div>
);

export default App;
