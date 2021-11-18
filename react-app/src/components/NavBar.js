
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from 'react-redux';

import logo from '../images/haute-logo-bold.png'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  if (sessionUser) {
    return (
      
      <nav
        style={{ backgroundColor: "#F0F0F0", height: "100px", display: "flex", position: 'right', listStyle: "none", padding: "0px" }}
      >
     
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/listings" exact={true} activeClassName="active">
              Listings
            </NavLink>
          </li> */}
          <li>
            <LogoutButton />
          </li>
      
      </nav>
    );

  } else {

  return (
    <>
      <div className="nav-left" style={{ width: "400px" }}>
        <NavLink to="/" exact={true} activeClassName="active">
          <img
            className="HauteFinder-logo"
            src={logo}
            style={{
              position: "absolute",
              marginLeft: "10px",
              height: "100px",
              maxHeight: "100%",
              maxWidth: "100%",
            }}
          ></img>
        </NavLink>
      </div>

      <nav
        style={{
          display: "flex",
          backgroundColor: "#F0F0F0",
          height: "110px",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          decoration: "none",
          listStyle: "none",
          fontSize: "20px",
        }}
      >
        <li>
          <NavLink
            to="/login"
            exact={true}
            activeClassName="active"
            style={{
              display: "flex",
              color: "#763B2D",
              decoration: "none",
              justifyContent: "flex-end",
              padding: "10px",
            }}
          >
            Login |
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-up"
            exact={true}
            activeClassName="active"
            style={{
              display: "flex",
              color: "#763B2D",
              decoration: "none",
              justifyContent: "flex-end",
              padding: "10px",
            }}
          >
            Sign Up |
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            exact={true}
            activeClassName="active"
            style={{
              display: "flex",
              color: "#763B2D",
              decoration: "none",
              justifyContent: "flex-end",
              padding: "10px",
            }}
          >
            Users
          </NavLink>
        </li>
      </nav>
      <LogoutButton />
    </>
  );
}
}

export default NavBar;
