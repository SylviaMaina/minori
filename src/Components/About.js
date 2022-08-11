import React from "react";
import "./About.css";
import bay from "./Media/bay.svg";
import rabbit from "./Media/rabbit.svg";
import female from "./Media/female-gender.svg";
import rainbow from "./Media/rainbow.svg";
import fsc from "./Media/fsc.svg";
import makeup from "./Media/makeup.jpg";
import girl from "./Media/girl.jpg";
import powder from "./Media/powder.jpg";
import powdergirl from "./Media/powdergirl.jpg";
import shadowgirl from "./Media/shadowgirl.jpg";
import shadow from "./Media/shadow.jpg";
import lipstick from "./Media/lipstick.jpg";
import lipstickgirl from "./Media/lipstickgirl.jpg";
import girls from "./Media/girls.jpg";

function About() {
  return (
    <div className="About">
      <h3>Minimalistic Beauty</h3>
      <h4>Simple, clean, easy-touse essentials.</h4>
      <div className="attributes">
        <div>
          <img src={bay} alt="..." />
          <h6>Vegan</h6>
        </div>
        <div>
          <img src={rabbit} alt="..." />
          <h6>Cruelty free</h6>
        </div>
        <div>
          <img src={female} alt="..." />
          <h6>Beauty for women</h6>
        </div>
        <div>
          <img src={rainbow} alt="..." />
          <h6>Clean beauty</h6>
        </div>
        <div>
          <img src={fsc} alt="..." />
          <h6>Fsc certified packaging</h6>
        </div>
      </div>
      <div className="makeup">
        <div className="images">
          <img src={makeup} alt="..." />
          <div className="top">
            <img src={girl} alt="..." />
          </div>
        </div>
        <div className="images">
          <img src={powder} alt="..." />
          <div className="top">
            <img src={powdergirl} alt="..." />
          </div>
        </div>
        <div className="images">
          <img src={shadow} alt="..." />
          <div className="top">
            <img src={shadowgirl} alt="..." />
          </div>
        </div>
        <div className="images">
          <img src={lipstick} alt="..." />
          <div className="top">
            <img src={lipstickgirl} alt="..." />
          </div>
        </div>
      </div>
      <div className="story">
        <img src={girls} alt="..." />
        <div className="storytext">
          <h4>Discover mindful, timeless beauty</h4>
        </div>
      </div>
    </div>
  );
}

export default About;
