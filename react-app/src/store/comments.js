const GET_COMMENTS = "comments/GET_COMMENTS";
const POST_COMMENT = "comments/ADD_COMMENT";
const UPDATE_COMMENT = "comments/UPDATE_COMMENT";
const DELETE_COMMENT = "comments/DELETE_COMMENT";
const CLEAR_COMMENTS = 'comments/CLEAR_COMMENTS';

const getComments = (comments) => ({
  type: GET_COMMENTS,
  payload: comments,
});

const postCommentAction = (body) => ({
  type: POST_COMMENT,
  payload: body,
});

const updateOneComment = (payload) => ({
  type: UPDATE_COMMENT,
  payload,
});

const deleteOneComment = (id) => ({
  type: DELETE_COMMENT,
  payload: id,
});

export const clearCommentsAction = () =>({
  type: CLEAR_COMMENTS,
})

export const postComment = (comment) => async (dispatch) => {
  const { postId, body } = comment;
  const response = await fetch(`/api/posts/${postId}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      body: body,
    }),
  });
  if (response.ok) {
    const newComment = await response.json();
    // console.log('IN THUNK FOR COMMENTS===================', newComment);
    dispatch(postCommentAction(newComment));
    return null;
  }
  else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      console.log(data.errors);
      return data.errors;
    }
  }
  else{
    return [{'errors': 'an error occured' }]
  }
};

/////// Newly Added///

export const updateComment = (payload) => async (dispatch) => {
  const { commentId, body } = payload;
  const response = await fetch(`api/comments/${commentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      body: body,
    }),
  });

  if (response.ok) {
    let updatedComment = await response.json()
    console.log('update comment thunk ------------------------', updatedComment);
    dispatch(
      updateOneComment({
        body,
        id: commentId,
      })
    );
    return null;
  }
  else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      console.log(data.errors);
      return data.errors;
    }
  }
  else{
    return [{'errors': 'an error occured' }]
  }

};

export const deleteComment = (commentId) => async (dispatch) => {
  const response = await fetch(`api/comments/${commentId}`, {
    method: "DELETE",
  });
  console.log(response);
  if (response.ok) {
    const data = await response.json();
    dispatch(deleteOneComment(commentId));
    return data;
  }
};

/////// Newly Added///

export const getAllComments = (id) => async (dispatch) => {
  const response = await fetch(`/api/posts/${id}/comments`);

  if (response.ok) {
    const data = await response.json();
    console.log('IN THUNK---------------------', data);
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
    case UPDATE_COMMENT:
      newState = { ...state };
      newState[action.payload.id].body = action.payload.body;
      return newState;
    case DELETE_COMMENT:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    case POST_COMMENT:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case CLEAR_COMMENTS:
      newState = {}
      return newState;
    default:
      return state;
  }
}
