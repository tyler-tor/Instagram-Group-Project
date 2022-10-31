import React from "react";
import { NavLink } from "react-router-dom";
import stock from "../../images/stock.jpg";

const CircleFaces = () => {
  return (
    <>
      <NavLink to={"/:userId"} className="circle-face-children-containers">
        <img src={stock} alt="" />
        <div>username</div>
      </NavLink>
      <NavLink to={"/:userId"} className="circle-face-children-containers">
        <img src={stock} alt="" />
        <div>username</div>
      </NavLink>
      <NavLink to={"/:userId"} className="circle-face-children-containers">
        <img src={stock} alt="" />
        <div>username</div>
      </NavLink>
      <NavLink to={"/:userId"} className="circle-face-children-containers">
        <img src={stock} alt="" />
        <div>username</div>
      </NavLink>
      <NavLink to={"/:userId"} className="circle-face-children-containers">
        <img src={stock} alt="" />
        <div>username</div>
      </NavLink>
    </>
  );
};

export default CircleFaces;
