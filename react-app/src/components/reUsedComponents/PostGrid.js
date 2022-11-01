import React from "react";
import "./PostGrid.css";
import SinglePostModal from "./SinglePostModal";
import stock from "../../images/stock.jpg";

const PostGrid = () => {
  return (
    <div className="post-grid-container">
      <div className="post-grid-children first-two-grid-children">
        <SinglePostModal img={stock} />
      </div>
      <div className="post-grid-children first-two-grid-children">
        <SinglePostModal img={stock} />
      </div>
      <div className="post-grid-children">
        <SinglePostModal img={stock} />
      </div>
    </div>
  );
};

export default PostGrid;
