const GET_COMMENTS = "posts/GET_COMMENTS";

const getComments = (comments) => ({
  type: GET_COMMENTS,
  payload: comments,
});

export const getAllComments = (id) => async (dispatch) => {
  const response = await fetch(`/api/posts/${id}/comments`);

  if (response.ok) {
    const data = await response.json();
    // console.log('IN THUNK---------------------', data);
    dispatch(getComments(data.Comments));
    return data;
  }

  return response;
};

export default function commentsReducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case GET_COMMENTS:
      newState = {};
      action.payload.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return newState;
    default:
      return state;
  }
}
