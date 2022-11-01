const GET_POSTS = "posts/GET_POSTS";
const ADD_POST = "posts/ADD_POST";

const getPosts = (posts) => ({
  type: GET_POSTS,
  payload: posts,
});

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
    default:
      return state;
  }
}
