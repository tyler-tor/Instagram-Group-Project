import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './UserFollowerList.css'

const UserFollowerList = ({ followers }) => {
    // const [isLoaded, setIsLoaded] = useState(true);

    return (
        <div className='user-follower-list'>
            <ul>
                {followers.map(user => {
                    return (
                        <li key={user.id}>
                            <img src={user.profilePicture} className='user-likes-profile' />
                            {user.username}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UserFollowerList;
