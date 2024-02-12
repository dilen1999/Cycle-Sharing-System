import React, { useState } from "react";
import "./home_page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBicycle,
  faUser,
  faSquarePollHorizontal,
  faBell,
  faPersonFallingBurst,
  faFileInvoiceDollar,
  faScrewdriverWrench,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.jpeg";
import profile from "../images/profile.png";
import { Link } from "react-router-dom";

function Bikes() {
  const [homeClicked, setHomeClicked] = useState(false);
  const [bikesClicked, setBikesClicked] = useState(false);
  const [userClicked, setuserClicked] = useState(false);
  const [PaymentClicked, setpaymentClicked] = useState(false);
  const [ReportClicked, setreportClicked] = useState(false);
  const [NotificationClicked, setnotificationClicked] = useState(false);
  const [FairstructureClicked, setfairStructureClicked] = useState(false);
  const [MaintenanceClicked, setmaintenanceClicked] = useState(false);
  const [ChatClicked, setchatClicked] = useState(false);

  const handleClickHome = () => {
    setHomeClicked(true);
    setBikesClicked(false);
    setuserClicked(false);
    setpaymentClicked(false);
    setreportClicked(false);
    setnotificationClicked(false);
    setfairStructureClicked(false);
    setmaintenanceClicked(false);
    setchatClicked(false);
  };

  const handleClickBikes = () => {
    setHomeClicked(false);
    setBikesClicked(true);
    setuserClicked(false);
    setpaymentClicked(false);
    setreportClicked(false);
    setnotificationClicked(false);
    setfairStructureClicked(false);
    setmaintenanceClicked(false);
    setchatClicked(false);
  };

  const handleClickUser = () => {
    setHomeClicked(false);
    setBikesClicked(false);
    setuserClicked(true);
    setpaymentClicked(false);
    setreportClicked(false);
    setnotificationClicked(false);
    setfairStructureClicked(false);
    setmaintenanceClicked(false);
    setchatClicked(false);
  };

  const handleClickPayment = () => {
    setHomeClicked(false);
    setBikesClicked(false);
    setuserClicked(false);
    setpaymentClicked(true);
    setreportClicked(false);
    setnotificationClicked(false);
    setfairStructureClicked(false);
    setmaintenanceClicked(false);
    setchatClicked(false);
  };

  const handleClickReport = () => {
    setHomeClicked(false);
    setBikesClicked(false);
    setuserClicked(false);
    setpaymentClicked(false);
    setreportClicked(true);
    setnotificationClicked(false);
    setfairStructureClicked(false);
    setmaintenanceClicked(false);
    setchatClicked(false);
  };

  const handleClickNotification = () => {
    setHomeClicked(false);
    setBikesClicked(false);
    setuserClicked(false);
    setpaymentClicked(false);
    setreportClicked(false);
    setnotificationClicked(true);
    setfairStructureClicked(false);
    setmaintenanceClicked(false);
    setchatClicked(false);
  };

  const handleClickFairstructure = () => {
    setHomeClicked(false);
    setBikesClicked(false);
    setuserClicked(false);
    setpaymentClicked(false);
    setreportClicked(false);
    setnotificationClicked(false);
    setfairStructureClicked(true);
    setmaintenanceClicked(false);
    setchatClicked(false);
  };

  const handleClickMaintanance = () => {
    setHomeClicked(false);
    setBikesClicked(false);
    setuserClicked(false);
    setpaymentClicked(false);
    setreportClicked(false);
    setnotificationClicked(false);
    setfairStructureClicked(false);
    setmaintenanceClicked(true);
    setchatClicked(false);
  };

  const handleClickChat = () => {
    setHomeClicked(false);
    setBikesClicked(false);
    setuserClicked(false);
    setpaymentClicked(false);
    setreportClicked(false);
    setnotificationClicked(false);
    setfairStructureClicked(false);
    setmaintenanceClicked(false);
    setchatClicked(true);
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
          <Link
            to="/home"
            className="home_button"
            style={{ color: homeClicked ? "black" : "grey" }}
            onClick={handleClickHome}
          >
            <FontAwesomeIcon icon={faHome} />
            <span className="home_adj">Home</span>
          </Link>
        </div>

        <div>
          <Link
            to="/home"
            className="home_button_spaceB"
            style={{ color: bikesClicked ? "black" : "grey" }}
            onClick={handleClickBikes}
          >
            <FontAwesomeIcon icon={faBicycle} />
            <span className="home_adj">Bikes</span>
          </Link>
        </div>

        <div>
          <Link
            to="/home"
            className="home_button_spaceU"
            style={{ color: userClicked ? "black" : "grey" }}
            onClick={handleClickUser}
          >
            <FontAwesomeIcon icon={faUser} />
            <span className="home_adj">User</span>
          </Link>
        </div>

        <div>
          <Link
            to="/home"
            className="home_button_spaceP"
            style={{ color: PaymentClicked ? "black" : "grey" }}
            onClick={handleClickPayment}
          >
            <FontAwesomeIcon icon={faFileInvoiceDollar} />
            <span className="home_adj">Payment</span>
          </Link>
        </div>

        <div>
          <Link
            to="/home"
            className="home_button_spaceR"
            style={{ color: ReportClicked ? "black" : "grey" }}
            onClick={handleClickReport}
          >
            <FontAwesomeIcon icon={faSquarePollHorizontal} />
            <span className="home_adj">Reports</span>
          </Link>
        </div>

        <div>
          <Link
            to="/home"
            className="home_button_spaceN"
            style={{ color: NotificationClicked ? "black" : "grey" }}
            onClick={handleClickNotification}
          >
            <FontAwesomeIcon icon={faBell} />
            <span className="home_adj">Notification</span>
          </Link>
        </div>

        <div>
          <Link
            to="/home"
            className="home_button_spaceF"
            style={{ color: FairstructureClicked ? "black" : "grey" }}
            onClick={handleClickFairstructure}
          >
            <FontAwesomeIcon icon={faPersonFallingBurst} />
            <span className="home_adj">Fair Structure</span>
          </Link>
        </div>

        <div>
          <Link
            to="/home"
            className="home_button_spaceM"
            style={{ color: MaintenanceClicked ? "black" : "grey" }}
            onClick={handleClickMaintanance}
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} />
            <span className="home_adj">Maintenance</span>
          </Link>
        </div>

        <div>
          <Link
            to="/home"
            className="home_button_spaceC"
            style={{ color: ChatClicked ? "black" : "grey" }}
            onClick={handleClickChat}
          >
            <FontAwesomeIcon icon={faMessage} />
            <span className="home_adj">Chat</span>
          </Link>
        </div>

        <div style={{ width: "20%", display: "flex", flexDirection: "row" }}>
          <div className="circle_logo_profile">
            <div className="inner_circle_profile"></div>
            <img src={profile} alt="" className="logo_image_profile" />
          </div>
          <div className="profile_name">
            <text>Anantharam</text>
          </div>
        </div>
        <div className="dot">
          <text>.</text>
        </div>
      </div>

      {/* Second column */}
      <div style={{ width: "80%" }} className="column">
        <div className="Dashboard">
          <div style={{ display: "flex", alignItems: "center" }}>
            <text>Dashboard {">"} Home </text>
            <Link
              to=""
              className="Location"
              style={{
                color: MaintenanceClicked ? "black" : "grey",
                marginLeft: "1000px",
              }}
              onClick={handleClickMaintanance}
            >
              <FontAwesomeIcon icon={faBell} />
            </Link>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Bikes;