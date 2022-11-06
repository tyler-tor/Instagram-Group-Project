import React, { Dispatch } from "react";
import PostGrid from "../reUsedComponents/PostGrid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../store/post";
import "./ExplorePage.css";

const ExplorePage = () => {
  const dispatch = useDispatch();
  const posts = Object.values(useSelector((state) => state.posts)).reverse();
  // console.log('posts', posts);

  useEffect(() => {
    dispatch(getAllPosts())
      .then((e) => {
        // console.log(e);
      })
      .catch(async (res) => {
        const data = await res.json();
        // console.log(data.errors);
      });
  }, [dispatch]);

  return (
    <div className="explore-papa-div">
    <div className="explore-page-wrapper">
      <PostGrid posts={posts} />
      </div>
    </div>
  );
};

export default ExplorePage;
