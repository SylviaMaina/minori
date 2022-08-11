import React from "react";
import lipstickgirl from "./Media/lipstickgirl.jpg";
import powdergirl from "./Media/powdergirl.jpg";
import shadowgirl from "./Media/shadowgirl.jpg";
import girl from "./Media/girl.jpg";

function Socials() {
  return (
    <div style={{ backgroundColor: "#f5f4ff", padding: "1rem" }}>
      <h5>Follow our socals</h5>
      <div className="makeup">
        <img src={lipstickgirl} alt="..." />
        <img src={powdergirl} alt="..." />
        <img src={shadowgirl} alt="..." />
        <img src={girl} alt="...." />
      </div>
    </div>
  );
}

export default Socials;
