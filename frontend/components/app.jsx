import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route, Switch } from 'react-router-dom';
import {AuthRoute} from '../util/route_util';
import UserProfileContainer from './user/user_profile_container';
import PostIndexContainer from './post/post_index_container';
import PostFormContainer from './post/post_form_container';

const App = () => (
  <div>
      <GreetingContainer />
      <Route path='/:username' component={UserProfileContainer} />

      <Route exact path='/:username' component={PostIndexContainer} />
      <Route exact path='/:username/create_post' component={PostFormContainer} />
  </div>
);

// <AuthRoute exact path="/login" component={SessionFormContainer} />
// <AuthRoute path="/signup" component={SessionFormContainer} />
export default App;
