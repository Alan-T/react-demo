import React from "react";
import NavBar from "./navBar";
import { Outlet } from "react-router-dom";
import styles from "./style.module.less";

const Layout = () => {
  return (
    <div className={styles.baseContainer}>
      <NavBar />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
