const GET_FOLLOWING = 'following/GET_FOLLOWING'
const GET_FOLLOWERS = 'following/GET_FOLLOWERS'
// const ADD_FOLLOWING = 'following/ADD_FOLLOWING'
// const DELETE_FOLLOWING = 'following/DELETE_FOLLOWING'

const getFollowing = (following) => ({
    type: GET_FOLLOWING,
    payload: following
});

const getFollowers = (followers) => ({
    type: GET_FOLLOWING,
    payload: followers
})
// -------------------will have to revisit add/delete will get following/followers rendering-------------------
// const addFollowingAction = (id) => ({
//     type: ADD_FOLLOWING,
//     payload: id
// });

// const deleteFollowingAction = (id) => ({
//     type: DELETE_FOLLOWING,
//     payload: id
// });

// export const addFollowing = (id) => async(dispatch) => {
//     const response = await fetch(`api/users/${id}/follow/`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })

//     if(response.ok) {
//         const data = await response.json()
//         dispatch(addFollowing(id))
//     }
// }

export const getAllFollowing = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/following`)

    if(response.ok){
        const data = await response.json();
        dispatch(getFollowing(data.following));
        return data
    }
    return response
}

export const getAllFollowers = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/followers/`)

    if(response.ok){
        const data = await response.json();
        dispatch(getFollowers(data.followers));
        return data
    }
    return response
}

export default function followingReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_FOLLOWING:
            newState = {...state}
            action.payload.forEach((followee) => {
                newState[followee.userId] = followee
            })
            return newState
        case GET_FOLLOWERS:
            newState = {...state}
            action.payload.forEach((follower) => {
                newState[follower.userId] = follower
            })
            return newState
        default:
            return state;
    }
}
