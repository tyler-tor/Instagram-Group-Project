import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./UserFollowerList.css";

const UserFollowerList = ({ followers }) => {
  // const [isLoaded, setIsLoaded] = useState(true);

  return (
    <div className="user-liked-list">
      <ul>
        {followers.map((user) => {
          return (
            <NavLink to={`/${user.userId}`}>
              <li key={user.userId}>
                <img src={user.profilePicture} />
                <span>{user.username}</span>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default UserFollowerList;
