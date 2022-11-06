import React, { useEffect, useState } from "react";
import { Modal } from "../../../context/Modal";
import { useSelector, useDispatch } from "react-redux";
import { getAllFollowers } from "../../../store/follower";
import { getAllFollowing } from "../../../store/following";
import UserFollowingList from "./UserFollowingList";
import { getProfileUser } from "../../../store/profileUser";

const UserFollowingListModal = ({ userId }) => {
//   const following = Object.values(useSelector((state) => state.following));
  const [showModal, setShowModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [followNum, setFollowNum] = useState(0);
  const profileUser = useSelector(state => state.profileUser)
  // console.log(userId)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFollowing(userId)).then((res) => {
      if (res) {
        setFollowNum(res.length);
        // console.log('TESTING', res);
        // setFollowNum(followers.length)
      }
    });
  }, [dispatch]);

  useEffect(() =>{
    dispatch(getProfileUser(userId))
  }, [dispatch])

  useEffect(() => {
    setFollowNum(profileUser.following.length);
  });

  const displayFollowers = () => {
    dispatch(getAllFollowers(userId)).then(() => {});
  };

  return (
    <>
      <a
        onClick={() => {
          setShowModal(!showModal);
          displayFollowers();
        }}
      >
        <strong>{profileUser.following.length}</strong>
        {' '}
        <span className="following-text-list">
        following
        </span>
      </a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {/* <UserLikedList onClose={() => setShowModal(false)} userId={userId} followers={followers} /> */}
          <UserFollowingList
            onClose={() => setShowModal(false)}
            following={profileUser.following}
          />
        </Modal>
      )}
    </>
  );
};

export default UserFollowingListModal;
