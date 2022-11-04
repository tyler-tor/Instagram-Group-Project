import React, { useEffect, useState } from "react";
import screenshot from "../../images/screenshot1-2x.png";
import PostGrid from "../reUsedComponents/PostGrid";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getAllUsers } from "../../store/users";
import UserFollowerListModal from "../reUsedComponents/UserFollowerListModal";
import { addFollowing, deleteFollowing, getAllFollowing, getAllFollowers } from "../../store/following";

const UserInfoBox = () => {
  const dispatch = useDispatch()
  const { userId } = useParams()
  const user = useSelector((state) => state.users[userId]);
  const currUser = useSelector((state) => state.session.user);
  const following = useSelector((state) => state.follow)
  const [follows, setFollows] = useState('Follow')
  const [isLoading, setIsLoading] = useState(false)
  const [followBtn, setFollowBtn] = useState(false)

  useEffect(() => {
    dispatch(getAllUsers()).then(() => dispatch(getAllFollowing(currUser.id)))
    setIsLoading(true)
  }, [dispatch])

  const followsBtnSubmit = () => {
    if (follows === 'Follow') {
      dispatch(addFollowing(user))
      setFollows('UnFollow')
    } else {
      dispatch(deleteFollowing(userId))
      setFollows('Follow')
    }
  }
  // const displayFollowers = () => {
  //   dispatch(getAllFollowers(userId))
  // }

  useEffect(() => {
    if (user && following) {
      if (following[userId]) {
        setFollows('UnFollow')
      } else {
        setFollows('Follow')
      }
    }
  }, [following, user])

  useEffect(() => {
    console.log('currUser', currUser.id)
    console.log('userId', userId)
    if (currUser.id !== parseInt(userId)) setFollowBtn(true)
  }, [])

  if (!user) {
    return null
  }


  return (
     isLoading && (
      <>
        <div className="user-profile-header-container">
          <div className="user-info-box-profile-photo-container">
            <div id="user-profile-wrapper">
              <img src={user.profilePicture} alt="profile" />
            </div>
            <div className="user-profile-details-container">
              <div className="username-and-follow-button-row">
                <div className="username-for-user-profile">{user.username}</div>
                {followBtn &&
                (<button
                  onClick={followsBtnSubmit}>{follows}
                </button>)
                }
              </div>
              <div className="posts-followers-following-row">
                <div>
                  <strong>123 </strong>
                  posts
                </div>
                <div className="posts-followers-following-row-children-except-first">
                  {" "}
                  <strong>2.2M </strong>
                  followers
                </div>
                <div className="posts-followers-following-row-children-except-first">
                  {" "}
                  <strong>1132 </strong>
                  following
                </div>
              </div>
              <div className="user-profile-caption">
                <strong>NBA Shooting Coach</strong>
                <span>Herro, this is a little bit about who I is.</span>
                <UserFollowerListModal userId={userId} />
                {/* <button
                  onClick={displayFollowers}>List of Followers
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <PostGrid />
      </>
    )
  );
};

export default UserInfoBox;
