import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./post";
import commentsReducer from "./comments";
import session from "./session";
import followingReducer from "./following";
import usersReducer from "./users";
import userLikesReducer from "./user_likes";
import userPostLikeReducer from "./user_post_like_list";
import currentPostReducer from "./currentPost";
import followingPostsReducer from "./followingPosts";
import followersReducer from "./follower";
import nonFollowingReducer from "./nonFollowed";
import searchUserReducer from "./search_users";
import profileFollowingReducer from "./profile_following_store";
import profileUserReducer from "./profileUser";


const rootReducer = combineReducers({
  session,
  posts: postsReducer,
  comments: commentsReducer,
  follow: followingReducer,
  users: usersReducer,
  currentPost: currentPostReducer,
  comments: commentsReducer,
  userLikes: userLikesReducer,
  userPostLikes: userPostLikeReducer,
  followingPosts: followingPostsReducer,
  followers: followersReducer,
  notFollowed: nonFollowingReducer,
  searchUsers: searchUserReducer,
  profileFollowing: profileFollowingReducer,
  profileUser: profileUserReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
