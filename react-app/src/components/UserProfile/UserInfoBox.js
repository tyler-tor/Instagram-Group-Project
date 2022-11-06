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
import { TbCloudComputing } from "react-icons/tb";
import { getProfileUser } from "../../store/profileUser";

const UserInfoBox = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  // const user = useSelector((state) => state.users[userId]);
  const currUser = useSelector((state) => state.session.user);

  // const following_arr = Object.values(useSelector((state) => state.follow)); //!unused

  const following =useSelector((state) => state.follow);

  // const followers = Object.values(useSelector(state => state.followers)) //! unused

  const posts = Object.values(useSelector((state) => state.posts));
  // const [followingNum, setFollowingNum] = useState([]);
  const profileFollowing = Object.values(useSelector(state => state.profileFollowing))
  const [isLoading, setIsLoading] = useState(false);
  const [followBtn, setFollowBtn] = useState(false);
  const [followTest, setFollowTest] = useState(false);
  const [postCount, setPostCount] = useState(0);
  const profileUser = useSelector(state => state.profileUser)
  const [followSubmitted,setFollowSubmitted] = useState(0);

  useEffect(() =>{

    dispatch(getProfileUser(Number(userId))).then(() =>{
      setIsLoading(true)
    })
  },[dispatch])

  useEffect(()=>{
    if(profileUser.followers){
      for(let i = 0; i < profileUser.followers.length ; i++){
        let el = profileUser.followers[i]
        if(el.userId === currUser.id){
          setFollowTest(true)
          return () =>{

          }
        }
        else{
          setFollowTest(false)
        }
      }
    }

  },[profileUser])

  // console.log('CURRENT STATUS', followTest);

  // useEffect(()=>{
  //   dispatch(getProfileUser(Number(userId)))
  // },[dispatch])

  // useEffect(() =>{
  //   console.log('TEST IN USEFFECT', profileUser);
  //   if(profileUser.followers){
  //     console.log('PROFILE EXISTS', profileUser);
  //     profileUser.followers.forEach(el =>{

  //       if(currUser.id === el.userId){
  //         console.log('TESTING LOOP AGAIN!!!---------------', currUser.id, el.userId);
  //         setFollowTest(true);
  //         return;
  //       }
  //       else{
  //         console.log('SETTING FALSE IN ELSE STATEMENT LOOP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  //         setFollowTest(false)
  //       }
  //     })
  //   }
  //   else{
  //     console.log('FALSE NOT LOADED YET!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  //   }
  // },[profileUser])

  // useEffect(() => {
  //   dispatch(getAllUsers()).then(() => dispatch(getAllFollowing(currUser.id)))
  //   //!might need to run dispatch to get all followers instead of following!
  //   .then(()=>{

  //     setIsLoading(true);

  //   });
  // }, [dispatch]);

  // useEffect(() =>{
  //   dispatch(getProfileFollowing(userId)).then(() =>{

  //   })
  // },[dispatch])


  // useEffect(() =>{
  //   dispatch(getAllFollowers(userId)).then((res) =>{
  //     res.forEach(el =>{
  //       if(currUser.id === el.userId){
  //         // console.log('CHECKING USER FOLLOWING', currUser.id, el.userId);
  //         setFollowTest(true)
  //         console.log('IN FOR LOOP SETTING FOLLOW TEST WHEN MATCH', followTest);
  //         return;
  //       }
  //       else{
  //         setFollowTest(false)
  //         console.log('IN FOR LOOP SETTING FOLLOW TEST WHEN THERE IS NO MATCH', followTest);
  //         return;
  //       }
  //     })

  //   })
  // },[dispatch])

  // console.log(posts.filter((post) => post.userId == user.id).length);
  // //!code here causes a crash if you click the follow button multiple times.
  // // const followsBtnSubmit = () => {
  // //   if (follows === 'Follow') {
  // //     dispatch(addFollowing(user, userId))
  // //     // dispatch(getAllFollowing(userId))
  // //     setFollows('UnFollow')
  // //   } else {
  // //     dispatch(deleteFollowing(userId))
  // //     // dispatch(getAllFollowing(userId))
  // //     setFollows('Follow')
  // //   }
  // // }
  // // const displayFollowers = () => {
  // //   dispatch(getAllFollowers(userId))
  // // }
  const handleFollow = () => {
    dispatch(addFollowing(Number(userId)));
    setFollowTest(true);
    console.log('CHANGING FOLLOW TEST AFTER HITTING FOLLOW', followTest);
  };

  const handleUnFollow = () => {
    dispatch(deleteFollowing(userId));
    setFollowTest(false);
    console.log('CHANGING FOLLOW TEST AFTER HITTING UNFOLLOW', followTest);
  };

  const userPosts = () => {
    setPostCount(posts.filter((post) => post.userId == profileUser.id).length);
  };

  useEffect(() => {
    userPosts();
  }, [posts]);

  // // useEffect(() => {
  // //   if (user && following) {
  // //     console.log('CHECKING USERID', currUser.id);
  // //     console.log('CHECKING FOLLOW OBJECT', following);
  // //     console.log('CHECKING KEY IN WITH USERID', following[String(currUser.id)]);
  // //     console.log('CHECKING KEY IN WITH USERID', following[userId]);

  // //     if (following[String(userId)]) {
  // //       console.log('USERINFO BOX FOLLOWING KEYIN TRUE', following);
  // //       setFollowTest(true);
  // //     } else {
  // //       console.log('USERINFO BOX FOLLOWING KEYIN FALSE', following);
  // //       setFollowTest(false);
  // //     }
  // //   }
  // // });

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

  // if (!user) {
  //   return null;
  // }

  return (
    isLoading && (
      <>
        <div className="user-profile-header-container">
          <div className="user-info-box-profile-photo-container">
            <div id="user-profile-wrapper">
              <img src={profileUser.profilePicture} alt="profile" />
            </div>
            <div className="user-profile-details-container">
              <div className="username-and-follow-button-row">
                <div className="username-for-user-profile">{profileUser.username}</div>
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
                  <strong>{profileUser.following.length} </strong>
                  
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
