
import React, { useEffect, useState } from "react";
import { Modal } from "../../../context/Modal";
import UserLikedList from "./UserLikedList";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentPost } from "../../../store/currentPost";
import { getUserLikedPostId } from "../../../store/user_post_like_list";


const UserLikedListModal = ({postId}) => {
    const [showModal, setShowModal] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const post = useSelector(state => state.currentPost) //TODO make a current post store
    const postLikes = useSelector(state => state.userPostLikes)
    const dispatch = useDispatch();
    //TODO make a useEffect to dispatch and load the correct likes.

    useEffect(()=>{
        dispatch(getCurrentPost(postId)).then((res) =>{
            setIsLoaded(true)
        })
    },[dispatch])

    useEffect(() =>{
        dispatch(getUserLikedPostId())
    },[dispatch])
    console.log(postId);
    console.log(postLikes);

  return (
    <>
      <button
        onClick={() => setShowModal(!showModal)}
      >
        {isLoaded && (
            <>
                {/* {postLikes[postId].likes} */}
                {/* {post.likes} */}
                {postLikes[postId] ?
                (   <>
                        {postLikes[postId].likes}
                    </>
                )

                :
                    (
                        <>
                            {post.likes}
                        </>
                    )

                }
            </>

        )}

      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UserLikedList onClose={() => setShowModal(false)} postId= {postId}/>
        </Modal>
      )}
    </>
  );
};

export default UserLikedListModal;
