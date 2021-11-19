import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <button
      onClick={onLogout}
      style={{
        display: "flex",
        color: "#763B2D",
        decoration: "none",
        justifyContent: "flex-end",
        padding: "5px",
        marginBottom: "5px",
        marginRight: "10px",
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
