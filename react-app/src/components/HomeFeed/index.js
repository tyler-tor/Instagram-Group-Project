import React, {useEffect} from "react";
import CircleFaces from "./CircleFaces";
import ActualFeed from "./ActualFeed";
import "./HomeFeed.css";
import SideStuff from "./SideStuff";
import { useSelector, useDispatch } from "react-redux";
import { getAllFollowingPosts } from "../../store/followingPosts";


const HomeFeed = () => {
  // const posts = Object.values(useSelector((state) => state.followingPosts));
  // const dispatch = useDispatch()


  // useEffect(() => {
  //   dispatch(getAllFollowingPosts())
  // }, [dispatch])

  // if( !posts ) return null

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
