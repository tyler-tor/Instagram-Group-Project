import React from "react";
import { NavLink } from "react-router-dom";
// import pic from "../../images/screenshot1-2x.png";
import { useSelector } from "react-redux";
import SideNonFollowedUsers from "./SideNonFollowedUsers";

const SideStuff = () => {
  const user = useSelector((state) => state.session.user);

  return (
    <div className="side-stuff-container">
      <NavLink to={`/${user.id}`} className="side-stuff-first-container">
        <img src={user.profilePicture} alt="" />
        <div className="side-stuff-details-container">
          <div className="username-full-name-side-stuff">
            <strong>{user.username}</strong>
            <span className="secondary-gray-text">
              {user.firstName} {user.lastName}
            </span>
          </div>
        </div>
      </NavLink>
      <div className="side-stuff-second-container">
        <div className="suggestions-for-you-styling secondary-gray-text">
          © 2022 Finstagram Built by{" "}
          <a
            className="about-links-styling"
            href="https://www.linkedin.com/in/derek-torrero-02823018a/"
          >
            Derek Torrero
          </a>
          {", "}
          <a
            className="about-links-styling"
            href="https://www.linkedin.com/in/theofandrich/"
          >
            Theo Fandrich
          </a>
          {", and"}
          <a
            className="about-links-styling"
            href="https://www.linkedin.com/in/alan-de-leon-b54621212/"
          >
            {" "}
            Alan Deleon
          </a>
        </div>
      </div>
      <div className="side-stuff-second-container"></div>
      <span className="suggestions-for-you-styling secondary-gray-text">
        Check out these Users!
        <SideNonFollowedUsers userId={user.id} />
      </span>
    </div>
  );
};

export default SideStuff;
