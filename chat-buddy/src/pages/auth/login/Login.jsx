import React, { useContext, useEffect, useState } from "react";
import styles from "./Login.module.css";
import { userContext } from "../../../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);
  const [loginStatus, setLoginStatus] = useState("");
  // const [sessionData, setSessionData] = useState(null);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://localhost:3000/api/auth/login";

  // const handlesession = (data) => {
  //   sessionStorage.setItem("session", data);
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios
        .post(url, { phone, password }, { withCredentials: true })
        .catch((err) => alert(err));
      setUser(res.data);

      // setSessionData({ userId: user._id, isLogin: true });
      const sessionData = { userId: user._id, isLogin: true };
      sessionStorage.setItem("session", JSON.stringify(sessionData));
      // alert(JSON.stringify(sessionData));
      // handlesession(sessionData);

      setLoginStatus("Successfull login, " + user.name + ", " + user._id);

      setTimeout(() => {
        navigate("/chatBuddy");
      }, 1000);
    } catch (error) {
      console.log(error);
      setLoginStatus("Some thing error");
      alert("login failed!", error);
    }
  };

  return (
    <>
      <a
        style={{ margin: "0 20px", cursor: "pointer" }}
        onClick={() => navigate("/chatBuddy")}
      >
        <i className="bi bi-arrow-bar-left"></i>Back
      </a>
      <div className={styles.loginDiv}>
        <form action="" onSubmit={handleLogin}>
          <h4 style={{ textAlign: "center" }}>{loginStatus}</h4>
          <h1>Login Here</h1>
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Phone number..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="text"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <p style={{ textAlign: "center" }}>
            Don't have an account ?{" "}
            <a
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => navigate("/chatBuddy/register")}
            >
              register
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
