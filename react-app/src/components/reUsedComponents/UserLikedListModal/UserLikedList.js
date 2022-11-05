import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLikesUser } from "../../../store/user_likes";
import './UserLikedList.css'

const UserLikedList = ({postId}) =>{
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();
    const likes = Object.values(useSelector(state => state.userLikes));
    // console.log(post);
    useEffect(() =>{
        dispatch(getLikesUser(postId)).then((res) =>{
            setIsLoaded(true);
        })
    },[dispatch])

    return (

        <div className='user-liked-list'>


            <ul>
                {isLoaded && (
                    <>
                        {likes.map((user) =>{
                            return(
                                <li key={user.id}>
                                    <img src={user.profilePicture} className='user-likes-profile'/>
                                    {user.username}
                                </li>
                            )

                        })}

                    </>
                )}

            </ul>

        </div>


    )


};


export default UserLikedList;
