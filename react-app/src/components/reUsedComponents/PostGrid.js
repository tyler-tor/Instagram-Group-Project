import React from "react";
import "./PostGrid.css";
import SinglePostModal from "./SinglePostModal";
import stock from "../../images/stock.jpg";
import { useSelector } from "react-redux";

const PostGrid = () => {
  // const posts = Object.values(useSelector((state) => state.posts));
  // posts.map((post) => {
  return (
    <div className="post-grid-container">
      <div className="post-grid-children first-two-grid-children">
        <SinglePostModal img={stock} />
      </div>
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
