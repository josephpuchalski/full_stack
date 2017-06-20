import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route } from 'react-router-dom';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <section>
    <header>
      <h1>Welcome to Travelscape - Share your experience</h1>
      <GreetingContainer />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </header>
  </section>
);

export default App;
