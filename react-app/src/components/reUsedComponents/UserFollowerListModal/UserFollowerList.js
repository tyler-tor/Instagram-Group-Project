import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllFollowers } from "../../../store/follower";
import { getAllFollowing } from "../../../store/following";
import { getProfileFollowing } from "../../../store/profile_following_store";
import "./UserFollowerList.css";

const UserFollowerList = ({ followers, onClose }) => {
  // const [isLoaded, setIsLoaded] = useState(true);
  const dispatch = useDispatch();


  return (
    <div className="user-liked-list">
      <ul>
        {followers.map((user) => {
          return (
            <NavLink to={`/${user.userId}`} onClick={() => {
                dispatch(getAllFollowers(user.userId))
                dispatch(getAllFollowing(user.userId))
                dispatch(getProfileFollowing(user.userId))
                onClose()

            }}>
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
