import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout} from './actions/session_actions';
import { getUser, receiveUser } from './actions/user_actions';

window.receiveUser = receiveUser;
window.getUser = getUser;
window.signup = signup;
window.logout = logout;
window.login = login;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store= { store }/>, root);
});
