import React from 'react';
import { Link } from 'react-router-dom';
import {AuthRoute} from '../../util/route_util';
import SessionFormContainer from '../session/session_form_container';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    if (this.props.currentUser) {
      return (
        <section>
          <h1>Hello, {this.props.currentUser.username}</h1>
          <button onClick={this.props.logout}>Log out</button>
          <h1>THIS IS NOW WHERE THE PHOTO FEED WILL SHOW UP</h1>
        </section>
        );
    } else {
      return (
        <section className="signup-login-container">
          <AuthRoute component={SessionFormContainer} />
        </section>
      );
    }
  }
}

export default Greeting;



// <section>
//   <Link to='/signup'>Sign Up</Link>
//   <br />
//   <Link to="/login">Log In</Link>
// </section>
