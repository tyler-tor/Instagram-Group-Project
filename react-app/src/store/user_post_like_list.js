//* For getting a user liked post's ids

import { getCurrentPost } from "./currentPost"



const GET_LIKED_POST_ID = 'userLikedList/GET_LIKED_POST_ID'
const ADD_LIKED_POST_ID = 'userLikedList/ADD_LIKED_POST_ID'
const DELETE_LIKED_POST_ID = 'userLikedList/DELETE_LIKED_POST_ID'

const getUserLikedPostIdAction = (likes) =>({
    type: GET_LIKED_POST_ID,
    payload: likes
})

const addUserLikedPostIdAction = (post) =>({
    type:ADD_LIKED_POST_ID,
    payload: post
})

const deleteUserLikedPostIdAction = (id) =>({
    type:DELETE_LIKED_POST_ID,
    payload: id
})

//TODO need to make delete like thunk action. can probly just update list instead of removing since response returns updated list.
export const deleteUserLikedPostId = (postId) => async (dispatch) =>{
    console.log('THUNK POST ID IN DELETE------------------------------------------------',postId);
    const response = await fetch(`/api/posts/${postId}/likes`,{
        method: 'DELETE'
    })
    if(response.ok){
        const data = await response.json();
        console.log('IN THUNK FOR DELETE POST', data);
        //!added a dispatch to current post to update with this thunk
        dispatch(getCurrentPost(data.postId))
        dispatch(deleteUserLikedPostIdAction(data.postId))

        return data;
    }
}

export const getUserLikedPostId = () => async (dispatch) =>{
    const response = await fetch('/api/users/likes')
    if(response.ok){
        const data = await response.json()
        console.log(data.likes);
        //!added a dispatch to current post to update with this thunk
        dispatch(getUserLikedPostIdAction(data.likes))
        return data.likes
    }

}

export const addUserLikedPostId = (postId) => async (dispatch) =>{
    const response = await fetch(`/api/posts/${postId}/likes`,{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
    })
    if(response.ok){
        const data = await response.json()
        console.log('ADD LIKE THUNK', data);
        // dispatch(getUserLikedPostIdAction(data.likes))
        dispatch(getCurrentPost(data.postId))
        dispatch(addUserLikedPostIdAction(data))
    }
}

//export const deleteUserLikedPostId = (postId) => async(dispatch) =>{

//}



export default function userPostLikeReducer(state={}, action){
    let newState;
    switch (action.type) {
        case GET_LIKED_POST_ID:
            newState = {}
            // console.log('IN REDUCER-----------',action.payload);
            action.payload.forEach(post => {
                newState[post.postId] = post
            })

            return newState

        case ADD_LIKED_POST_ID:
            newState = {... state}
            newState[action.payload.postId] = action.payload
            return newState;


        case DELETE_LIKED_POST_ID:
            newState = {...state}
            // console.log('IN REDUCER FOR LIKED POST ARRAY --------------------------', action.payload);
            delete newState[action.payload]
            return newState


        default:
            return state;
    }
  }
