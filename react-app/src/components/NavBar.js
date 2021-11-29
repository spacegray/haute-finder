import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { useSelector } from "react-redux";

import logo from "../images/haute-logo-bold.png";

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session.user);
  if (sessionUser) {
    return (
      <>
        <div className="nav-left" style={{ width: "400px" }}>
          <NavLink to="/" exact={true} activeClassName="active">
            <img
              className="HauteFinder-logo"
              src={logo}
              alt="haute-logo"
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
            justifyContent: "flex-end",
            alignItems: "flex-end",
            decoration: "none",
            listStyle: "none",
            fontSize: "20px",
            zIndex: "1",
          }}
        >
          <li>
            <NavLink
              to="/"
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
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listings"
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
              Listings |
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
              Users |
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/order_bag/user/${sessionUser.id}`}
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
              My Bag
            </NavLink>
          </li>
          <li>
            <LogoutButton />
          </li>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <div className="nav-left" style={{ width: "400px" }}>
          <NavLink to="/" exact={true} activeClassName="active">
            <img
              className="HauteFinder-logo"
              src={logo}
              alt="haute-logo"
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
            justifyContent: "flex-end",
            alignItems: "flex-end",
            decoration: "none",
            listStyle: "none",
            fontSize: "20px",
            zIndex: "2",
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
              to="/listings"
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
              Listings |
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
      </>
    );
  }
};

export default NavBar;
