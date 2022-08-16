import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Layout from "../layouts/index";
import Home from "../pages/Home";
import About from "../pages/About";
import NoMatch from "../pages/NoMatch";
export default function Router() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
