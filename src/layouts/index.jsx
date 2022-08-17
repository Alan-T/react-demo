import React from "react";
import NavBar from "./navBar";
import { Outlet, NavLink } from "react-router-dom";
import styles from './style.module.less'

const Layout = () => {
  const navColor = (isActive) => {
    return { color: isActive ? "red" : "" };
  };
  return (
    <div className={styles.baseContainer}>
      <NavBar />
      <h1>Welcome to React Router!</h1>
      <nav>
        <NavLink style={({ isActive }) => navColor(isActive)} to="/home">
          Home
        </NavLink>
        <NavLink style={({ isActive }) => navColor(isActive)} to="/about">
          About
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
