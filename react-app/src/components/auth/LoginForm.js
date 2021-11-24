import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import './auth.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoSubmit = (e) => {
    e.preventDefault();
    dispatch(sessionActions.login("demo@aa.io", "password"))
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/listings" />;
  }

  return (
    <div className="auth-container">
      <div className="login-form-container">
        <form id="login-form" onSubmit={onLogin}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          <div id="login-btns">
            <button type="submit" id="login-btn">
              Login
            </button>
            <button
              type="submit"
              id="demo-login-btn-auth-pages"
              onClick={demoSubmit}
            >
              {" "}
              Demo Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
