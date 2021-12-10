import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { useSelector, useDispatch } from "react-redux";
import { getItemsForBag } from "../store/orders";
import "./navBar.css";
import logo from "../images/haute-logo-bold.png";
import mobileLogo from "../images/haute-icon.png";

const NavBar = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const userId = sessionUser?.id;
  const orderBag = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getItemsForBag(userId));
  }, [dispatch, userId]);

  const listings =
    orderBag &&
    orderBag[userId]?.listings?.map((item) => {
      return item;
    });

  let quantity = 0;
  orderBag &&
    orderBag[userId]?.listings?.forEach((item) => {
      return (quantity += 1);
    });

  if (sessionUser) {
    return (
      <>
        <div className="nav-left" style={{ width: "300px" }}>
          <NavLink to="/" exact={true} activeClassName="active">
            <img
              className="HauteFinder-logo"
              src={logo}
              alt="haute-logo"
              style={{
                position: "fixed",
                top: "0",
                marginLeft: "10px",
                height: "85px",
                maxHeight: "100%",
                maxWidth: "100%",
                zIndex: "2",
              }}
            ></img>
            <img
              className="mobile-logo"
              src={mobileLogo}
              alt="haute-logo"
              style={{
                position: "fixed",
                top: "0",
                marginLeft: "10px",
                height: "85px",
                maxHeight: "100%",
                maxWidth: "100%",
                zIndex: "2",
              }}
            />
          </NavLink>
        </div>

        <nav
          style={{
            display: "flex",
            backgroundColor: "#F0F0F0",
            height: "80px",
            width: "100%",
            top: "0px",
            position: "fixed",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            decoration: "none",
            listStyle: "none",
            fontSize: "20px",
            zIndex: "1",
          }}
        >
          {/* <li>
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
          </li> */}
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
                padding: "7px",
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
                padding: "7px",
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
                padding: "7px",
              }}
            >
              My Bag:
              {quantity}
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
        <div className="nav-left" style={{ width: "300px" }}>
          <NavLink to="/" exact={true} activeClassName="active">
            <img
              className="HauteFinder-logo"
              src={logo}
              alt="haute-logo"
              style={{
                position: "fixed",
                top: "0",
                marginLeft: "10px",
                height: "85px",
                maxHeight: "100%",
                maxWidth: "100%",
                zIndex: "2",
              }}
            ></img>
            <img
              className="mobile-logo"
              src={mobileLogo}
              alt="haute-logo"
              style={{
                position: "fixed",
                top: "0",
                marginLeft: "10px",
                height: "85px",
                maxHeight: "100%",
                maxWidth: "100%",
                zIndex: "2",
              }}
            />
          </NavLink>
        </div>

        <nav
          style={{
            display: "flex",
            backgroundColor: "#F0F0F0",
            height: "80px",
            width: "100%",
            top: "0px",
            position: "fixed",
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
              to="/login"
              exact={true}
              activeClassName="active"
              style={{
                display: "flex",
                color: "#763B2D",
                decoration: "none",
                justifyContent: "flex-end",
                padding: "7px",
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
                padding: "7px",
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
                padding: "7px",
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
                padding: "7px",
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
