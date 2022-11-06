import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaHandLizard, FaUserCircle } from "react-icons/fa";

import { logout } from "../../store/session";
import { getProfileUser } from "../../store/profileUser";

const ProfileDropDownMenu = () => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState("isHidden");
  const user = useSelector(state=> state.session.user)

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

  const handleProfileClick = e =>{
    // e.preventDefault();
    dispatch(getProfileUser(user.id))
  }

  let sessionLinks;

  sessionLinks = (
    <>
      <NavLink to={`/${user.id}`} className="profile-dropdown-button" onClick={handleProfileClick}>
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
};

export default ProfileDropDownMenu;
