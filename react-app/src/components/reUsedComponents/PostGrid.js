import React, { useEffect } from "react";
import "./PostGrid.css";
import SinglePostModal from "./SinglePostModal";
import stock from "../../images/stock.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getAllFollowingPosts } from "../../store/post";

const PostGrid = () => {
  const posts = Object.values(useSelector((state) => state.posts));
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllFollowingPosts())
  }, [dispatch])

  return (
    <div className="post-grid-container">
      {posts.map(post => {
        return(
          <div className="post-grid-children first-two-grid-children" key={post.id}>
            <SinglePostModal post={post} />
          </div>
        )
      })}
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
