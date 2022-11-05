import React, { useEffect, useState } from "react";
import PostGrid from "../reUsedComponents/PostGrid";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getAllUsers } from "../../store/users";
import UserFollowerListModal from "../reUsedComponents/UserFollowerListModal";
import {
  addFollowing,
  deleteFollowing,
  getAllFollowing,
} from "../../store/following";
import { getAllFollowers } from "../../store/follower";
import { getProfileFollowing } from "../../store/profile_following_store";

const UserInfoBox = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = useSelector((state) => state.users[userId]);
  const currUser = useSelector((state) => state.session.user);
  const following_arr = Object.values(useSelector((state) => state.follow));
  const following =useSelector((state) => state.follow);
  const followers = Object.values(useSelector(state => state.followers))
  const posts = Object.values(useSelector((state) => state.posts));
  // const [followingNum, setFollowingNum] = useState([]);
  const profileFollowing = Object.values(useSelector(state => state.profileFollowing))
  const [isLoading, setIsLoading] = useState(false);
  const [followBtn, setFollowBtn] = useState(false);
  const [followTest, setFollowTest] = useState(false);
  const [postCount, setPostCount] = useState(0);

  console.log('CURRENT STATUS', followTest);

  useEffect(() => {
    dispatch(getAllUsers()).then(() => dispatch(getAllFollowing(currUser.id)))
    .then(()=>{

      setIsLoading(true);

    });
  }, [dispatch]);

  useEffect(() =>{
    dispatch(getProfileFollowing(userId)).then(() =>{

    })
  },[dispatch])


  useEffect(() =>{
    dispatch(getAllFollowers(userId)).then((res) =>{
      res.forEach(el =>{
        if(currUser.id === el.userId){
          console.log('CHECKING USER FOLLOWING', currUser.id, el.userId);
          setFollowTest(true)
          console.log('IN FOR LOOP', followTest);
          return;
        }
        else{
          setFollowTest(false)
        }
      })

    })
  },[dispatch])

  console.log(posts.filter((post) => post.userId == user.id).length);
  //!code here causes a crash if you click the follow button multiple times.
  // const followsBtnSubmit = () => {
  //   if (follows === 'Follow') {
  //     dispatch(addFollowing(user, userId))
  //     // dispatch(getAllFollowing(userId))
  //     setFollows('UnFollow')
  //   } else {
  //     dispatch(deleteFollowing(userId))
  //     // dispatch(getAllFollowing(userId))
  //     setFollows('Follow')
  //   }
  // }
  // const displayFollowers = () => {
  //   dispatch(getAllFollowers(userId))
  // }
  const handleFollow = () => {
    dispatch(addFollowing(user, userId));
    setFollowTest(true);
  };

  const handleUnFollow = () => {
    dispatch(deleteFollowing(userId));
    setFollowTest(false);
  };

  const userPosts = () => {
    setPostCount(posts.filter((post) => post.userId == user.id).length);
  };

  useEffect(() => {
    userPosts();
  }, [posts]);

  useEffect(() => {
    if (user && following) {
      if (following[userId]) {
        console.log('USERINFO BOX FOLLOWING KEYIN TRUE', following);
        setFollowTest(true);
      } else {
        console.log('USERINFO BOX FOLLOWING KEYIN FALSE', following);
        setFollowTest(false);
      }
    }
  });

  useEffect(() => {
    // console.log('currUser', currUser.id)
    // console.log('userId', userId)
    // console.log(followBtn);
    // console.log('currentUser'currUser.id);
    if (currUser.id !== Number(userId)){
      setFollowBtn(true);

    }
    else{
      setFollowBtn(false)
    }
    // console.log(followBtn);
  });

  if (!user) {
    return null;
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
                {followBtn && (
                  <>
                    {followTest ? (
                      <button onClick={handleUnFollow}>UnFollow</button>
                    ) : (
                      <button onClick={handleFollow}>Follow</button>
                    )}
                  </>
                )}
              </div>
              <div className="posts-followers-following-row">
                <div className="">
                  {" "}
                  <strong>{postCount}</strong> Posts
                </div>
                <div className="posts-followers-following-row-children-except-first">
                  {" "}
                  <UserFollowerListModal userId={userId} />
                </div>
                <div className="posts-followers-following-row-children-except-first slight-margin">
                  <strong>{profileFollowing.length} </strong>
                  following
                </div>
              </div>
              <div className="user-profile-caption">
                {/* <strong>NBA Shooting Coach</strong>
                <span>Herro, this is a little bit about who I is.</span> */}

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
