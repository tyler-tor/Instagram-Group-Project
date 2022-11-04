import React, { useEffect } from "react";
import "./PostGrid.css";
import SinglePostModal from "./SinglePostModal";
import stock from "../../images/stock.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllFollowingPosts, getAllPosts } from "../../store/post";

const PostGrid = () => {
  const { userId } = useParams()
  const user = useSelector((state) => state.users[userId])
  const posts = Object.values(useSelector((state) => state.posts))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  return (
    <div className="post-grid-container">
      {user ? (
      posts.filter(post => {
        return post.userId === user.id
      }).map(post => {
        return(
          <div className="post-grid-children first-two-grid-children" key={post.id}>
            <SinglePostModal post={post} />
          </div>
        )
      })) : (
        posts.map(post => {
          return(
            <div className="post-grid-children first-two-grid-children" key={post.id}>
              <SinglePostModal post={post} />
            </div>
          )
        })
      )
      }
      {/* <div className="post-grid-children first-two-grid-children">
        <SinglePostModal img={stock} />
      </div> */}
      {/* <div className="post-grid-children first-two-grid-children">
          <SinglePostModal img={post.posts[1].imgUrl} />
        </div>
        <div className="post-grid-children">
          <SinglePostModal img={post.posts[2].imgUrl} />
        </div> */}
    </div>
  );
  // });
};

export default PostGrid;
