const GET_CURRENT_POST = 'current_post/GET_CURRENT_POST'

const getCurrentPostAction = (post) =>({
    type: GET_CURRENT_POST,
    payload: post
})

export const getCurrentPost = (postId) => async dispatch=>{
    const response = await fetch(`/api/posts/${postId}`)
    if(response.ok){
        const data = await response.json();
        // console.log(data);
        dispatch(getCurrentPostAction(data))
        return data
    }
}


export default function currentPostReducer(state = {}, action){
    let newState;
    switch(action.type){
        case GET_CURRENT_POST:
            newState= {}
            console.log('IN CURRENT POST REDUCER-------------',action.payload);
            newState = {...action.payload}
            return newState;
        default:
            return state;

    }
}
