//* For getting all users who liked a post.



const GET_LIKES = 'likes/GET_LIKES';
const ADD_LIKE = 'likes/ADD_LIKE';
const REMOVE_LIKE = 'likes/REMOVE_LIKE';


const getLikeUserAction = (users) => ({
    type: GET_LIKES,
    payload: users
});

export const getLikesUser = (postId) => async dispatch =>{
    const response = await fetch(`/api/posts/${postId}/likes/users`)
    if(response.ok){
        const data = await response.json()
        // console.log(data.user[0]);
        // console.log(data.user);
        dispatch(getLikeUserAction(data.user))
        return data
    }

}


export default function userLikesReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_LIKES:
            newState = {}
            console.log('IN REDUCER-----------',action.payload);
            action.payload.forEach(user => {
                newState[user.id] = user
            })

            return newState


        default:
            return state;
    }
  }
