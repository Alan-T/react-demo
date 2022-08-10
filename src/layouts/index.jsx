import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import About from "../pages/About";

const Layout = () => {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Layout;
