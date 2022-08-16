import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.less";

export default function Login() {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/");
  };
  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.circle}></div>
        <div className={styles.box1}></div>
        <div className={styles.box2}></div>
        <div className={styles.loginBox}>
          <div className={styles.loginInfo}>
            <label>账号</label>
            <input type="text" placeholder="admin" />
          </div>
          <div className={styles.loginInfo}>
            <label>密码</label>
            <input type="password" placeholder="123456" />
          </div>
          <button onClick={onLogin}>登录</button>
        </div>
      </div>
    </>
  );
}
