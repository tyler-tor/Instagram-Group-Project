const GET_COMMENTS = "comments/GET_COMMENTS";
const POST_COMMENT = "comments/ADD_COMMENT";

const getComments = (comments) => ({
  type: GET_COMMENTS,
  payload: comments,
});

const postCommentAction = (body) => ({
  type : POST_COMMENT,
  payload: body
})

export const postComment = (comment) => async (dispatch) =>{
  const {postId, body} = comment;
  const response = await fetch(`/api/posts/${postId}/comments`, {
    method: 'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify({
      body: body
    })
  })
  if(response.ok){
    const newComment = await response.json()
    console.log('IN THUNK FOR COMMENTS===================', newComment);
    dispatch(postCommentAction(newComment))
    return newComment
  }

}

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
      newState = {...state};
      action.payload.forEach((comment) => {
        newState[comment.id] = comment;
      });
      return newState;
    case POST_COMMENT:
      newState = {...state};
      newState[action.payload.id] = action.payload;
      return newState;

    default:
      return state;
  }
}
