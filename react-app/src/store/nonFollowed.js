const GET_NON_FOLLOWING = 'following/GET_NON_FOLLOWING'


const getNonFollowingAction = (nonFollowing) => ({
    type: GET_NON_FOLLOWING,
    payload: nonFollowing
});


export const getNonFollowing = (id) => async(dispatch) => {
    const response = await fetch(`/api/users/${id}/notfollowing`)
    console.log('response', response)
    if(response.ok){
        const data = await response.json();
        dispatch(getNonFollowingAction(data.users));
        return data
    }
    return response
}


export default function nonFollowingReducer(state = {}, action) {
    let newState;
    switch(action.type) {
        case GET_NON_FOLLOWING:
            newState = {}
            action.payload.forEach((user) => {
                newState[user.id] = user
            })
            return newState
        default:
            return state;
    }
}
