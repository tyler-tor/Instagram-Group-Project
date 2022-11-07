import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllFollowing } from "../../store/following";

const CircleFaces = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const following = Object.values(useSelector((state) => state.follow));

  useEffect(() => {
    dispatch(getAllFollowing(user.id));
  }, [dispatch]);
  // console.log(following)
  return (
    <>
      {following.map((followed) => {
        return (
          <NavLink
            to={`/${followed.userId}`}
            key={followed.userId}
            className="circle-face-children-containers"
          >
            <img src={followed.profilePicture} alt="" />
            <div>{followed.username}</div>
          </NavLink>
        );
      })}
      {/* <NavLink to={"/:userId"} className="circle-face-children-containers">
        <img src={stock} alt="" />
        <div>username</div>
      </NavLink>
      <NavLink to={"/:userId"} className="circle-face-children-containers">
        <img src={stock} alt="" />
        <div>username</div>
      </NavLink>
      <NavLink to={"/:userId"} className="circle-face-children-containers">
        <img src={stock} alt="" />
        <div>username</div>
      </NavLink>
      <NavLink to={"/:userId"} className="circle-face-children-containers">
        <img src={stock} alt="" />
        <div>username</div>
      </NavLink> */}
    </>
  );
};

export default CircleFaces;
