import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Index from "../../pages/index";
import About from "../../pages/about";

import "./header.css";

const Header = () => {
  return (
    <Router>
      <div className="header">
        <h1>Header</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route exact path="/" element={<Index />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
};

export default Header;
