import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      email: '',
      showSignUp: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
    this.clearErrors = this.props.clearErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.state.showSignUp) {
      this.props.signup({user});
    } else {
      this.props.login({user});
    }
  }

  toggleSignUp() {
    if (this.state.showSignUp) {
      this.clearErrors();
      this.setState({showSignUp: false});
    } else {
      this.clearErrors();
      this.setState({showSignUp: true});
    }
  }


  navLink() {
    if (this.state.showSignUp) {
      return (
        <p>Have an account?&nbsp;<Link onClick={this.toggleSignUp} to="/">Log in</Link></p>
        );
    } else {
      return (
        <p>Don't have an account?&nbsp;<Link onClick={this.toggleSignUp} to="/">Sign up</Link></p>
        );
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    if (this.state.showSignUp) {
      return (
        <section>
          <section className="signup-container">
          <h1>Travelscape</h1>
          <div className="motto">
            <h3>Sign up to see photos and videos from your friends.</h3>
          </div>
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <div className="signup-form">
                <input type="text"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="signup-input"
                />
              <br/>
                <input type="text"
                  placeholder="Full Name"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="signup-input"
                />
              <br/>
                  <input type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="signup-input"
                  />
                <br/>
                  <input type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="signup-input"
                  />
                <br/>
              <input className="form-button" type="submit" value="Sign up" />
              <section className="errors-container">
                {this.renderErrors()}
              </section>
            </div>
          </form>
        </section>
          <section className="change-form">
          {this.navLink()}
          </section>
        </section>
      );
    } else {
    return (
      <section>
        <section className="signup-container">
        <h1>Travelscape</h1>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            <br/>
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            <br/>
            <input className="form-button" type="submit" value="Log in" />
          </div>
          <section className="errors-container">
            {this.renderErrors()}
          </section>
        </form>
      </section>
        <section className="change-form">
        {this.navLink()}
        </section>
      </section>
    );
  }}
}

export default withRouter(SessionForm);
