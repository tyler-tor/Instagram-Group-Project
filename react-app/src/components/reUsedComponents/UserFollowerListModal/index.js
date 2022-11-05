import React, { useEffect, useState } from "react";
import { Modal } from "../../../context/Modal";
import { useSelector, useDispatch } from "react-redux";
import { getAllFollowers } from "../../../store/follower";
import UserFollowerList from "./UserFollowerList";

const UserFollowerListModal = ({ userId }) => {
    const followers = Object.values(useSelector((state) => state.followers))
    const [showModal, setShowModal] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [followNum, setFollowNum] = useState(0);
    // console.log(userId)
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getAllFollowers(userId)).then((res)=>{


            if(res){
                setFollowNum(res.length)
                // console.log('TESTING', res);
                // setFollowNum(followers.length)
            }
        })

    },[dispatch])

    useEffect(() =>{
        setFollowNum(followers.length)
    })

    const displayFollowers = () => {
            dispatch(getAllFollowers(userId)).then(()=>{

            })
    }

    return (
        <>
            <button onClick={() => {
                setShowModal(!showModal)
                displayFollowers()
                }}>
                Followers: {followNum}
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
