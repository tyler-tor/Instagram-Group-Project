import React from "react";
import CircleFaces from "./CircleFaces";
import ActualFeed from "./ActualFeed";
import "./HomeFeed.css";
import SideStuff from "./SideStuff";

const HomeFeed = () => {
  return (
    <div className="home-feed-page-wrapper">
      <section className="home-feed-section">
        <div className="left-side-home-feed-container">
          <div className="circle-face-array-container">
            <CircleFaces />
          </div>
          <div className="actual-home-feed-container">
            <ActualFeed />
          </div>
        </div>
        <div>
          <SideStuff />
        </div>
      </section>
    </div>
  );
};

export default HomeFeed;
