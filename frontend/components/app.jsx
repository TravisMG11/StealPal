import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import RestaurantIndexContainer from './restaurants/restaurant_index_container';
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
      <img className="logo" src={window.images.stolen_logo} />
      <h3 className="placeholder-button">LOG IN</h3>

    </header>
    <div className="fake-modal">
      <GreetingContainer className="greeting-container"/>
      <Route path="/log_in" component={SessionFormContainer} />
      <Route path="/sign_up" component={SessionFormContainer} />
      <Route exact path="/restaurants" component={RestaurantIndexContainer} />

    </div>
    <div className="purple-foot">

    </div>
  </div>
);

export default App;
