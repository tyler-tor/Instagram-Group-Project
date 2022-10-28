import React, { useState } from "react";
import frontImage from "../../images/screenshot1-2x.png";

const Carousel = () => {
  return (
    <div className="carousel-container">
      <img src={frontImage} alt="instagram photo" />
    </div>
  );
};

export default Carousel;
