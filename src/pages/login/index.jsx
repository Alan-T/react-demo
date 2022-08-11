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
      <button onClick={onLogin}>登录</button>
    </>
  );
}
