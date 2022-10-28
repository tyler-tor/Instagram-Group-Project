import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import LogoutButton from "./LogoutButton";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";

import { logout } from "../../store/session";

function ProfileDropDownMenu({ user }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState("isHidden");

  //Logout Button
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  //Menu Stuff
  const openMenu = () => {
    if (showMenu === "isShown") return;
    setShowMenu("isShown");
  };

  useEffect(() => {
    if (showMenu === "isHidden") return;

    const closeMenu = () => {
      setShowMenu("isHidden");
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  let sessionLinks;

  sessionLinks = (
    <>
      <NavLink to={"/:userId"} className="profile-dropdown-button">
        <HiOutlineUserCircle className="drop-down-profile-icon" />
        <span className="drop-down-menu-span">Profile</span>
      </NavLink>
      <div className="profile-dropdown-button log-out" onClick={onLogout}>
        Log Out
      </div>
    </>
  );

  return (
    <>
      <FaUserCircle
        onClick={openMenu}
        className="icon-buttons side-step profile-button"
      />
      <div className="dropdown-wrapper">
        <div className={`profile-dropdown ${showMenu}`}>
          <>{sessionLinks}</>
        </div>
      </div>
    </>
  );
}

export default ProfileDropDownMenu;
