import React, { useEffect} from "react"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { getNonFollowing } from "../../store/nonFollowed"
import './SideNonFollow.css'

const SideNonFollowedUsers = ({userId}) => {
    const dispatch = useDispatch()
    const nonFollowers = Object.values(useSelector(state => state.notFollowed))
    // console.log(nonFollowers)
    useEffect(() => {
        dispatch(getNonFollowing(userId))
    }, [dispatch])


    return (
        <div className="side-non-follower-list">
            {nonFollowers.map(user => {
                return (
                    <div className="each-non-follower"
                    key={user.id}>
                        <img
                        className="non-follower-picture"
                        src={user.profilePicture}
                        alt="example post"
                        />
                        <NavLink to={`/${user.id}`}
                        className='non-follower-link'>{user.username}</NavLink>
                    </div>
                )
            })}
        </div>
    )
}

export default SideNonFollowedUsers
