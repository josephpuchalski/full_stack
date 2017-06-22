import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route } from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
import UserProfileContainer from './user/user_profile_container';

const App = () => (
  <div>
      <GreetingContainer />
      <Route exact path='/:id' component={UserProfileContainer} />
  </div>
);

// <AuthRoute exact path="/login" component={SessionFormContainer} />
// <AuthRoute path="/signup" component={SessionFormContainer} />
export default App;
