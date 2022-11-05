const GET_FOLLOWING = 'profile_following/GET_FOLLOWING'


const getProfileFollowingAction = (following) =>({
    type: GET_FOLLOWING,
    payload: following
})

export const getProfileFollowing = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}/following`)

    if(response.ok){
        const data = await response.json();
        dispatch(getProfileFollowingAction(data.following));
        return data
    }
    return response
}



export default function profileFollowingReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_FOLLOWING:
            newState = {} //!changed to blank state so it refreshes the list
            action.payload.forEach((followee) => {
                newState[followee.userId] = followee
            })
            return newState
        default:
            return state;
    }
}
