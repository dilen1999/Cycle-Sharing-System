import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Login from "./components/login_Page";
import HomePage from "./components/home_page"; // Import your Home page component
import Bikes from "./components/bikes";
import Sidebar from "./components/sidebar";
import Home from "./pages/Home";

function App() {
  return (
    //  <div>
    //    <Sidebar/>
    //  </div>
    <BrowserRouter>
      
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/sidebar/homepage" element={<Home1 />} />
            {/* <Route path="/home" element={<HomePage />} />
          <Route path="/bikes" element={<Bikes />} />
          <Route path="/homepage" element={<Home/>}/> */}
          </Routes>
        </div>
      
    </BrowserRouter>
  );
}

export default App;

function Home1(){
  return(
      <div>
        <Home/>
      </div>
  );
}

