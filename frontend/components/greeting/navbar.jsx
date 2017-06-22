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
        <i className="fa fa-picture-o fa-lg" aria-hidden="true"></i>
        <i className="fa fa-heart-o fa-lg" aria-hidden="true"></i>
        <i className="fa fa-user-o fa-lg" aria-hidden="true"></i>
        <i className="fa fa-sign-out fa-lg" aria-hidden="true" onClick={props.logout}></i>
      </section>
    </section>
  );
};

export default NavBar;

// <button onClick={props.logout}>Log out</button>
