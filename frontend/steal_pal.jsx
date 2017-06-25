import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store/store';
import Root from './components/root';
import {sign_up, log_in, log_out} from './actions/session_actions';

// window.sign_up = sign_up;
// window.log_in = log_in;
// window.log_out = log_out;

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();
  let store;
  if (window.currentUser) {
   const preloadedState = { session: { currentUser: window.currentUser } };
   store = configureStore(preloadedState);
   delete window.currentUser;
 } else {
   store = configureStore();
 }
 window.getState = store.getState;
 window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
