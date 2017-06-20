import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Provider } from 'react-redux';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>StealPal: Steal a Meal!</h1>
      <h2>Whattup, crooks?!</h2>
      <GreetingContainer />
      
    </header>

    <Route path="/log_in" component={SessionFormContainer} />
    <Route path="/sign_up" component={SessionFormContainer} />
  </div>
);

export default App;
