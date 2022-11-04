const GET_FOLLOWERS = 'following/GET_FOLLOWERS'

const getFollowers = (followers) => ({
    type: GET_FOLLOWERS,
    payload: followers
})


export const getAllFollowers = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/followers`)

    if(response.ok){
        const data = await response.json();
        dispatch(getFollowers(data.followers));
        return data
    }
    return response
}


export default function followersReducer (state = {}, action) {
    let newState;
    switch(action.type) {
        case GET_FOLLOWERS:
            newState = {} //!changed to blank state so it refreshes the list
            action.payload.forEach((follower) => {
                newState[follower.userId] = follower
            })
            return newState
        default:
            return state
    }
}
