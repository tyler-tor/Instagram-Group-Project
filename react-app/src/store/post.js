const GET_POSTS = "posts/GET_POSTS";
const ADD_POST = "posts/ADD_POST";

const getPosts = (posts) => ({
  type: GET_POSTS,
  payload: posts,
});

const addPostAction = (post) => ({
  type: ADD_POST,
  payload: post
})

export const addPost = (post) => async (dispatch) =>{
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
    return newPost
  }
}

export const getAllPosts = () => async (dispatch) => {
  const response = await fetch("/api/posts/");

  if (response.ok) {
    const data = await response.json();
    console.log("test", data);
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
    case ADD_POST:
      return {
        ...state,
        [action.payload.post.id] : action.payload.post
      }
    default:
      return state;
  }
}
