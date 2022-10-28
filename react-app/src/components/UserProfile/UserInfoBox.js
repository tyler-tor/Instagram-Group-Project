import React, { useState } from "react";
import screenshot from "../../images/screenshot1-2x.png";

const UserInfoBox = () => {
  return (
    <div className="user-profile-header-container">
      <div className="user-info-box-profile-photo-container">
        <div id="user-profile-wrapper">
          <img src={screenshot} alt="profile picture" />
        </div>
      </div>
    </div>
  );
};

export default UserInfoBox;
