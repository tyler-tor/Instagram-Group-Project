import React, { useEffect, useState } from "react";
import { Modal } from "../../../context/Modal";
import { useSelector, useDispatch } from "react-redux";
import { getAllFollowers } from "../../../store/following";
import UserFollowerList from "./UserFollowerList";

const UserFollowerListModal = ({ userId }) => {
    const followers = Object.values(useSelector((state) => state.follow))
    const [showModal, setShowModal] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    console.log(userId)
    const dispatch = useDispatch();


    const displayFollowers = () => {
            dispatch(getAllFollowers(userId))
    }

    return (
        <>
            <button onClick={() => {
                setShowModal(!showModal)
                displayFollowers()
                }}>
                Show all Followers
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    {/* <UserLikedList onClose={() => setShowModal(false)} userId={userId} followers={followers} /> */}
                    <UserFollowerList onClose={() => setShowModal(false)} followers={followers} />
                </Modal>
            )}
        </>
    );
}


export default UserFollowerListModal;
