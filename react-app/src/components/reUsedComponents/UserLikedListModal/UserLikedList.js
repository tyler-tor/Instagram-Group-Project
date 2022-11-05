import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLikesUser } from "../../../store/user_likes";
import { NavLink } from "react-router-dom";
import "./UserLikedList.css";

const UserLikedList = ({ postId }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const likes = Object.values(useSelector((state) => state.userLikes));
  useEffect(() => {
    dispatch(getLikesUser(postId)).then((res) => {
      setIsLoaded(true);
    });
  }, [dispatch]);

  return (
    <div className="user-liked-list">
      <ul>
        {isLoaded && (
          <>
            {likes.map((user) => {
              return (
                <NavLink to={`/${user.id}`}>
                  <li key={user.id}>
                    <img src={user.profilePicture} />
                    <span> {user.username} </span>
                  </li>
                </NavLink>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};

export default UserLikedList;
