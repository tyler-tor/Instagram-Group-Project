import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllFollowers } from "../../../store/follower";
import { getAllFollowing } from "../../../store/following";
import { getProfileUser } from "../../../store/profileUser";
import { getProfileFollowing } from "../../../store/profile_following_store";
import "./UserFollowingList.css";

const UserFollowingList = ({ following, onClose }) => {
  // const [isLoaded, setIsLoaded] = useState(true);
  const dispatch = useDispatch();


  return (
    <div className="user-liked-list">
      <ul>
        {following.map((user) => {
          return (
            <NavLink to={`/${user.userId}`} onClick={() => {
                dispatch(getAllFollowers(user.userId))
                dispatch(getAllFollowing(user.userId))
                dispatch(getProfileFollowing(user.userId))
                dispatch(getProfileUser(user.userId))
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

export default UserFollowingList;
