import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Login from "./components/login_Page";
import Bike from "./pages/bike";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import User from "./pages/User";
import Payment from "./pages/Payment";
import Chat from "./pages/Chat";
import Report from "./pages/Report";
import Fair from "./pages/Fair_Structure";
import Notification from "./pages/Notification";
import Maintenance from "./pages/Maintenance";
import Fair_Structure from "./pages/Fair_Structure";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Define the routes within the Routes component */}
          <Route path="/" element={<Login />} />
          {/* Wrap the Sidebar around the Routes that need it */}
          <Route
            path="/home"
            element={
              <Sidebar>
                <Home />
              </Sidebar>
            }
          />
          <Route
            path="/bike"
            element={
              <Sidebar>
                <Bike />
              </Sidebar>
            }
          />
          <Route
            path="/user"
            element={
              <Sidebar>
                <User />
              </Sidebar>
            }
          />
          <Route
            path="/payment"
            element={
              <Sidebar>
                <Payment />
              </Sidebar>
            }
          />
          <Route
            path="/chat"
            element={
              <Sidebar>
                <Chat />
              </Sidebar>
            }
          />
          <Route
            path="/report"
            element={
              <Sidebar>
                <Report />
              </Sidebar>
            }
          />
          <Route
            path="/fair_structure"
            element={
              <Sidebar>
                <Fair_Structure />
              </Sidebar>
            }
          />
          <Route
            path="/notification"
            element={
              <Sidebar>
                <Notification/>
              </Sidebar>
            }
          />
          <Route
            path="/maintenance"
            element={
              <Sidebar>
                <Maintenance/>
              </Sidebar>
            }
          />
          {/* <Route path="/home/location" element={<Location/>}/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
