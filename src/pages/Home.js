import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../components/Sidebar.css"; // Make sure this path is correct
import "./Home.css";
import { Flex } from "antd";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

function Home() {
  const data = {
    labels: ["Yes", "No"],
    datasets: [
      {
        label: "poll",
        data: [3, 6],
        backgroundColor: ["black", "red"],
        borderColor: ["black", "red"],
      },
    ],
  };
  const options = {};

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

        {/* Stations */}
        {stationClicked && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="StaionDetailsBox" style={{ marginLeft: "70px" }}>
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
        <div style={{ display: "flex", height: "10px" }}></div>

        {stationClicked && (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "13px",
              }}
            >
              <div className="StaionBox">
                <p className="text">Station : A</p>
                <div
                  className="insidebox"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="text">Current avilable bikes: </p>
                    <p className="text">58</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="text">Current parking places: </p>
                    <p className="text">08</p>
                  </div>
                </div>
                {/* <div>
                  <Doughnut
                  data  ={data}
                  options = {options}
                  >

                  </Doughnut>
                </div> */}
              </div>

              <div className="StaionBox">
                <p className="text">Station : B</p>
                <div
                  className="insidebox"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="text">Current avilable bikes: </p>
                    <p className="text">58</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="text">Current parking places: </p>
                    <p className="text">08</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", height: "10px" }}></div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "13px",
              }}
            >
              <div className="StaionBox">
                <p className="text">Station : C</p>
                <div
                  className="insidebox"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="text">Current avilable bikes: </p>
                    <p className="text">58</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="text">Current parking places: </p>
                    <p className="text">08</p>
                  </div>
                </div>
              </div>

              <div className="StaionBox">
                <p className="text">Station : D</p>
                <div
                  className="insidebox"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="text">Current avilable bikes: </p>
                    <p className="text">58</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <p className="text">Current parking places: </p>
                    <p className="text">08</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {userClicked && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              className="StaionDetailsBoxuser"
              style={{ marginLeft: "70px" }}
            >
              <p className="text">Total bikes</p>
              <p className="number">134</p>
            </div>
            <div className="StaionDetailsBoxuser">
              <p className="text">Bikes in outside</p>
              <p className="number">65</p>
            </div>
            <div className="StaionDetailsBoxuser">
              <p className="text">Bikes in stations</p>
              <p className="number">45</p>
            </div>
            <div className="StaionDetailsBoxuser">
              <p className="text">Bikes in maintenance</p>
              <p className="number">04</p>
            </div>
          </div>
        )}
      </div>

      <div>Current Users</div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" >ID</th>
              <th scope="col">Profile</th>
              <th scope="col">Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Current location</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>George</td>
              <td>0778023256</td>
              <td>colombo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>ram</td>
              <td>0775245654</td>
              <td>jaffna</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="1">Larry the Bird</td>
              <td>sethu</td>
              <td>0778214563</td>
              <td>mannar</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
