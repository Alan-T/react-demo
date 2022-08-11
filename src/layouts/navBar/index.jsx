import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.less";

export default function NavBar() {
  return (
    <>
      <nav className={styles.navBar}>
        <div>
          <Link to="/login">退出登录</Link>
        </div>
      </nav>
    </>
  );
}
