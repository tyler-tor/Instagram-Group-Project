import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <div className="profile-dropdown-button" onClick={onLogout}>
      Logout
    </div>
  );
};

export default LogoutButton;
