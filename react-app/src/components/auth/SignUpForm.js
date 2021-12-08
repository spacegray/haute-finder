import React, { useState } from 'react';
import * as sessionActions from "../../store/session";
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './signUpForm.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, photoURL, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(["Passwords don't match"])
    }
  };


  const demoSubmit = (e) => {
    e.preventDefault();
    dispatch(sessionActions.login("demo@aa.io", "password"));
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePhotoURL = (e) => {
    setPhotoURL(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="sign-up-container">
      <div className="sign-up-form-container">
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        <form id="sign-up-form" onSubmit={onSignUp}>
          <div>
            <label>User Name</label>
            <input
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
            ></input>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
            ></input>
            <label>Link your Profile Photo</label>
            <input
              type="text"
              name="photoURL"
              onChange={updatePhotoURL}
              value={photoURL}
            ></input>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
            ></input>
            <label>Repeat Password</label>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              // required={true}
            ></input>
          </div>
          <button type="submit" id="sign-up-btn">Sign Up</button>
          <button type="submit" id="demo-login-btn-auth-pages" onClick={demoSubmit}>
            {" "}
            Demo Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
