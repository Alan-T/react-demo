import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./style.module.less";

export default function NavBar() {
  const navColor = (isActive) => {
    return { color: isActive ? "red" : "" };
  };
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.logoArea}>标题</div>
        <div className={styles.menuArea}>
          <NavLink className={styles.link} style={({ isActive }) => navColor(isActive)} to="/home">
            Home
          </NavLink>
          <NavLink className={styles.link} style={({ isActive }) => navColor(isActive)} to="/about">
            About
          </NavLink>
        </div>
        <div className={styles.userArea}>
          <Link to="/login">退出登录</Link>
        </div>
      </nav>
    </>
  );
}
