import React from "react";

function Footer() {
  return (
    <div
      style={{ backgroundColor: "rgba(238, 166, 166, 0.945)", width: "100%" }}
    >
      <h5>Join our community</h5>
      <div className="lorem">
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa nesciunt nihil aut nostrum explicabo
          <div
            style={{
              width: "100",
              backgroundColor: "#000",
              height: "0.1rem",
            }}
          ></div>
        </h6>

        <div className="box">
          <h6>Shop</h6>
          <h6>Shop Sites</h6>
          <h6>Contant us</h6>
          <h6>Lipsticks</h6>
          <h6>Powders</h6>
          <h6>Eye shadows</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
