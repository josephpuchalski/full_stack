import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({props}) => {
  return(
    <section className="main-navigation">
      <section className="left-nav">
        <i className="fa fa-camera-retro fa-lg" aria-hidden="true"></i>
        <Link to="/"><h1 className="main-nav-logo">Travelscape</h1></Link>
      </section>
      <section className="middle-nav">
        <input type="text"
          placeholder="Search"
          className="search"
        />
      </section>
      <section className="right-nav">
        <Link to={`/${props.currentUser.username}/create_post`}><i className="fa fa-picture-o fa-lg" aria-hidden="true"></i></Link>
        <Link to={`/${props.currentUser.username}`}><i className="fa fa-user-o fa-lg" aria-hidden="true"></i></Link>
        <Link to="/" onClick={props.logout}><i className="fa fa-sign-out fa-lg" aria-hidden="true"></i></Link>
      </section>
    </section>
  );
};

export default NavBar;

// <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
// <button onClick={props.logout}>Log out</button>
