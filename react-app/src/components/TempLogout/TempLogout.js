import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

const TempLogOut = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
    window.alert('Logged out.')
  };

  return (
    <button onClick={onLogout}>LogOut</button>
  );
};

export default TempLogOut;
