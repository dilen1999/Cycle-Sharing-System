import React from "react";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
        <div>
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
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Profile</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Current location</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>
                    <div className="profile-circle"></div>{" "}
                    {/* Circular profile picture */}
                  </td>
                  <td>George</td>
                  <td>0778023256</td>
                  <td>colombo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    <div className="profile-circle"></div>{" "}
                    {/* Circular profile picture */}
                  </td>
                  <td>ram</td>
                  <td>0775245654</td>
                  <td>jaffna</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    <div className="profile-circle"></div>{" "}
                    {/* Circular profile picture */}
                  </td>
                  <td>sethu</td>
                  <td>0778214563</td>
                  <td>mannar</td>
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
