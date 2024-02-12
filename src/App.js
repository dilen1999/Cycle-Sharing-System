import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login_Page";
import HomePage from "./components/home_page"; // Import your Home page component
import Bikes from "./components/bikes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/bikes" element={<Bikes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
