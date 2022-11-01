const GET_COMMENTS = "posts/GET_COMMENTS";

const getComments = (comments) => ({
  type: GET_POSTS,
  payload: posts,
});

export const getAllComments = (id) => async (dispatch) => {
  const response = await fetch(`/api/posts/${id}/comments/`);

  if (response.ok) {
    const data = await response.json();
    dispatch(getPosts(data.Comments));
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
