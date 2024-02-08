import React, { useState } from "react";
import "./home_page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.jpeg";

function Home_page() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/* First column */}
      <div style={{ width: "20%" }}>
        <div className="circle_logo">
          <div className="inner_circle"></div>
          <img src={logo} alt="" className="logo_image" />
        </div>
        <div className="app_name">
          <div>
            <span className="color_text">EcoRide</span>
          </div>
          <div>
            <span>Networks</span>
          </div>
        </div>

        <div>
          <button
            className="home_button"
            style={{ color: isClicked ? "black" : "grey" }}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </button>
        </div>
      </div>

      {/* Second column */}
      <div style={{ width: "80%" }} className="column">
        Item 3
      </div>
    </div>
  );
}

export default Home_page;
