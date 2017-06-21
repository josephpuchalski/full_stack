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
          <span><i className="fa fa-camera-retro"></i></span>
          <h1>Hello, {this.props.currentUser.username}</h1>
          <button onClick={this.props.logout}>Log out</button>
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
