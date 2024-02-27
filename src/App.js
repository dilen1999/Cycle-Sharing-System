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

function App() {
  return (
   
    <BrowserRouter>
    
      <Sidebar>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/bike" element={<Bike />} />
            {/* <Route path="/home/location" element={<Location/>}/> */}
            

          </Routes>
        </div>
        </Sidebar>
      
    </BrowserRouter>
  );
}

export default App;


