import React from "react";
import { NavLink } from "react-router-dom";
import pic from "../../images/screenshot1-2x.png";

const SideStuff = () => {
  return (
    <div className="side-stuff-container">
      <NavLink to={"/:userid"} className="side-stuff-first-container">
        <img src={pic} alt="" />
        <div className="side-stuff-details-container">
          <div className="username-full-name-side-stuff">
            <strong>theoman42</strong>
            <span className="secondary-gray-text">Theo Fandrich</span>
          </div>
        </div>
      </NavLink>
      <div className="side-stuff-second-container"></div>
      <span className="suggestions-for-you-styling secondary-gray-text">
        Suggestions For You
      </span>
    </div>
  );
};

export default SideStuff;
