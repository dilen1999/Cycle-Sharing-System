import React from "react";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Bike.css";

function Bike() {
  return (
    <div style={{ width: "100%" }} className="column">
      <div className="Dashboard">
        <div className="dashboardRow">
          <span>Dashboard {">"}</span>
          <span> Bike </span>
          {/* <Link
              to=""
              className="Location"
              style={{
                color: bellClicked ? "black" : "grey",
                marginLeft: "1100px",
              }}
              onClick={handleClickBell}
            >
              <FontAwesomeIcon icon={faBell} />
            </Link> */}
        </div>
      </div>

      <div>
        <div style={{marginTop: "20px"}}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              className="StaionDetailsBoxuser"
              style={{ marginLeft: "70px" }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <p className="text">New users</p>
                <p
                  className="text"
                  style={{ marginLeft: "100px", fontSize: "14px" }}
                >
                  13 Today
                </p>
              </div>

              <p className="numberuser1">134</p>
            </div>
            <div className="StaionDetailsBoxuser">
              <p className="text">Total users</p>
              <p className="numberuser">65</p>
            </div>
            <div className="StaionDetailsBoxuser">
              <p className="text">On-Ride users</p>
              <p className="numberuser">45</p>
            </div>
            <div className="StaionDetailsBoxuser">
              <p className="text">Total ride</p>
              <p className="numberuser">04</p>
            </div>
          </div>
          <div className="current_User">Bikes</div>
          <div>
            <table className="bike-table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Profile</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Model</th>
                  <th scope="col">Bike code no</th>
                  <th scope="col">Last maintenance date</th>
                  <th scope="col">On ride?</th>
                  <th scope="col">Current user</th>
                  <th scope="col">Current location</th>
                  <th scope="col">Color</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <div className="profile-circle"></div>{" "}
                    {/* Circular profile picture */}
                  </td>
                  <td>Lumala</td>
                  <td>Mountain bike</td>
                  <td>678545</td>
                  <td>23-12-2023</td>
                  <td>No</td>
                  <td>None</td>
                  <td>Station A</td>
                  <td>Red</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    <div className="profile-circle"></div>{" "}
                    {/* Circular profile picture */}
                  </td>
                  <td>Hero</td>
                  <td>Boy's bike</td>
                  <td>457896</td>
                  <td>20-02-2023</td>
                  <td>Yes</td>
                  <td>User 1</td>
                  <td>Station C</td>
                  <td>Black</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    <div className="profile-circle"></div>{" "}
                    {/* Circular profile picture */}
                  </td>
                  <td>DSL</td>
                  <td>Girl's bike</td>
                  <td>578955</td>
                  <td>13-04-2024</td>
                  <td>Yes</td>
                  <td>User 4</td>
                  <td>Station D</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bike;
