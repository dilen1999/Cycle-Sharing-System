import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../components/Sidebar.css"; // Make sure this path is correct
import "./Home.css";
import { Flex } from "antd";

function Home() {
  const [bellClicked, setBellClicked] = useState(false);
  const [locationClicked, setLocationClicked] = useState(true);
  const [userClicked, setUserClicked] = useState(false);
  const [stationClicked, setStationClicked] = useState(false);

  const handleClickBell = () => {
    // Define the behavior for bell icon click
    setBellClicked(true);
    setLocationClicked(false);
    setUserClicked(false);
    setStationClicked(false);
  };

  const handleClickLocation = () => {
    // Define the behavior for location click
    setLocationClicked(true);
    setBellClicked(false);
    setUserClicked(false);
    setStationClicked(false);
  };

  const handleClickUser = () => {
    // Define the behavior for user click
    setUserClicked(true);
    setLocationClicked(false);
    setBellClicked(false);
    setStationClicked(false);
  };

  const handleClickStation = () => {
    // Define the behavior for station click
    setStationClicked(true);
    setUserClicked(false);
    setLocationClicked(false);
    setBellClicked(false);
  };

  return (
    <div>
      <div style={{ width: "100%" }} className="column">
        <div className="Dashboard">
          <div className="dashboardRow">
            <span>Dashboard {">"}</span>
            <span> Home </span>
            <Link
              to=""
              className="Location"
              style={{
                color: bellClicked ? "black" : "grey",
                marginLeft: "1100px",
              }}
              onClick={handleClickBell}
            >
              <FontAwesomeIcon icon={faBell} />
            </Link>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <Link
            to=""
            className="Location"
            style={{ color: locationClicked ? "black" : "grey" }}
            onClick={handleClickLocation}
          >
            <span className="Location1">Location</span>
          </Link>

          <Link
            to=""
            className="Location"
            style={{ color: stationClicked ? "black" : "grey" }}
            onClick={handleClickStation}
          >
            <span className="Location1">Stations</span>
          </Link>

          <Link
            to=""
            className="Location"
            style={{ color: userClicked ? "black" : "grey" }}
            onClick={handleClickUser}
          >
            <span className="Location1">Current users</span>
          </Link>
        </div>

        {locationClicked && (
          <div className="locationDetailsBox">
            
            <p>This box for google map Location</p>
          </div>
        )}

        {stationClicked && (
          <div style={{display: "flex",flexDirection: "row" }}>
            <div className="StaionDetailsBox" style={{marginLeft: "70px"}}>
              <p className="text">Total bikes</p>
              <p className="number">134</p>
            </div>
            <div className="StaionDetailsBox">
              <p className="text">Bikes in outside</p>
              <p className="number">65</p>
            </div>
            <div className="StaionDetailsBox">
              <p className="text">Bikes in stations</p>
              <p className="number">45</p>
            </div>
            <div className="StaionDetailsBox">
              <p className="text">Bikes in maintenance</p>
              <p className="number">04</p>
            </div>
          </div>
          
        )}

        {stationClicked && (
          <div style={{display: "flex",flexDirection: "row" }}>
            <div className="StaionBox" >
              <p className="text">Total bikes</p>
              <p className="number">134</p>
            </div>
            
            <div className="StaionBox">
              <p className="text">Bikes in maintenance</p>
              <p className="number">04</p>
            </div>
          </div>
          
        )}
      </div>
    </div>
  );
}

export default Home;


