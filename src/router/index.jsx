import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "../layouts/index";
import Home from "../pages/Home";
import About from "../pages/About";
export default function Router() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
