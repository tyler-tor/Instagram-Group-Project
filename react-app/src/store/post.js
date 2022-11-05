import { getCurrentPost } from "./currentPost";
import { clearCommentsAction } from "./comments";
const GET_POSTS = "posts/GET_POSTS";
// const GET_FOLLOWING_POSTS = 'following/GET_FOLLOWING_POSTS'
const ADD_POST = "posts/ADD_POST";
const UPDATE_POST = 'posts/UPDATE_POST';
const DELETE_POST = 'posts/DELETE_POST';



const getPosts = (posts) => ({
  type: GET_POSTS,
  payload: posts,
});

// const getFollowingPosts = (posts) => ({
//   type: GET_FOLLOWING_POSTS,
//   payload: posts
// });

const addPostAction = (post) => ({
  type: ADD_POST,
  payload: post
})

const updatePostAction = (caption) => ({
  type: UPDATE_POST,
  payload : caption
})

const deletePostAction = (id) =>({
  type: DELETE_POST,
  payload: id
})

export const deletePost = (id) => async (dispatch) =>{
  const response = await fetch(`/api/posts/${id}`,{
    method:'DELETE'
  })
  if(response.ok){
    dispatch(deletePostAction(id))
    // dispatch(clearCommentsAction())

    return 'Sucess!'
  }
  return response;
}

export const updatePost = (caption) => async (dispatch) =>{
  const response = await fetch(`/api/posts/${caption.id}`, {
    method: 'PUT',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({
      caption: caption.caption
    })
  })
  if(response.ok){
    const editedPost = await response.json()
    dispatch(updatePostAction(editedPost))
    dispatch(getCurrentPost(caption.id))
    // console.log('DEBUG EDITED POST-------------------', editedPost);
    return editedPost
  }
}

export const addPost = (post) => async (dispatch) =>{
  // console.log('IN THUNK ACTION FOR POST', post);
  const response = await fetch('/api/posts/',{
    method: 'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({
      user_id: post.userId,
      caption: post.caption,
      img_url: post.imgUrl
    })

  })
  if(response.ok){
    const newPost = await response.json()
    dispatch(addPostAction(newPost))
    return null
  }
  else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      // console.log(data.errors);
      return data.errors;
    }
  }
  else{
    return [{'errors': 'an error occured' }]
  }

}

// export const getAllFollowingPosts = () => async (dispatch) => {
//   const response = await fetch("/api/me/following/posts");

//   if (response.ok) {
//       const data = await response.json();
//       dispatch(getFollowingPosts(data.Posts));
//       return data;
//   }
//   return response;
// }

export const getAllPosts = () => async (dispatch) => {
  const response = await fetch("/api/posts/");

  if (response.ok) {
    const data = await response.json();
    // console.log("test", data);
    dispatch(getPosts(data.Posts));
    return data;
  }

  return response;
};

export default function postsReducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case GET_POSTS:
      newState = { ...state };
      action.payload.forEach((post) => {
        newState[post.id] = post;
      });
      return newState;
    // case GET_FOLLOWING_POSTS:
    //   newState = {...state};
    //   action.payload.forEach((post) => {
    //     newState[post.id] = post
    //   })
    //   return newState;
    case ADD_POST:
      newState = {...state}
      console.log(action.payload.id);
      newState[action.payload.id] = action.payload
      return newState


      // return {
      //   ...state,
      //   [action.payload.post.id] : action.payload.post
      // }
    case UPDATE_POST:
      newState = {...state}
      // console.log('TEST IN REDUCER', action.payload);
      newState[action.payload.id] = action.payload
      return newState
    case DELETE_POST:
      newState = {...state}
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}
