import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import RestaurantIndexContainer from './restaurants/restaurant_index_container';
import RestaurantSearchContainer from './search/restaurant_search_container';
import { Provider } from 'react-redux';
import  { AuthRoute, ProtectedRoute } from '../util/route_util';

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
      <AuthRoute path="/log_in" component={SessionFormContainer} />
      <AuthRoute path="/sign_up" component={SessionFormContainer} />

    </div>
    <ProtectedRoute exact path="/restaurants" component={RestaurantIndexContainer} />
    <div className="purple-foot">

    </div>
  </div>
);

export default App;
