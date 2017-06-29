import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import {AuthRoute} from '../../util/route_util';
import SessionFormContainer from '../session/session_form_container';
import NavBar from './navbar';
import FeedContainer from '../feed/feed_container';
class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <NavBar props={this.props}/>
          <Route exact path='/' component={FeedContainer} />
        </div>
        );
    } else {
      return (
        <section className="signup-login-container">
          <section className="logo">
          </section>
          <AuthRoute component={SessionFormContainer} />
        </section>
      );
    }
  }
}

// <h1>Hello, {this.props.currentUser.username}</h1>
// <button onClick={this.props.logout}>Log out</button>
// <i className="fa fa-picture-o fa-lg" aria-hidden="true"></i>
// <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
// <i className="fa fa-user-o fa-lg" aria-hidden="true"></i>
// <h1>THIS IS NOW WHERE THE PHOTO FEED WILL SHOW UP</h1>
// <img src="assets/main-image.png" />
export default Greeting;
