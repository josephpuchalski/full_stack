import React from 'react';
import { Link } from 'react-router-dom';

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
        </section>
        );
    } else {
      return (
        <section>
          <Link to='/signup'>Sign Up</Link>
          <br />
          <Link to="/login">Log In</Link>
        </section>
      );
    }
  }
}

export default Greeting;
