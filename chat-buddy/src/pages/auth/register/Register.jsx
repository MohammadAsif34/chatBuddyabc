import React from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <a
        style={{ margin: "0 20px", cursor: "pointer" }}
        onClick={() => navigate("/chatBuddy")}
      >
        <i className="bi bi-arrow-bar-left"></i>Back
      </a>
      <div className={styles.registerDiv}>
        <form action="">
          <h1>Register Here</h1>
          <label>Name</label>
          <input type="text" placeholder="Name..." />
          <label>Avatar</label>
          <input type="file" />
          <label>Phone Number</label>
          <input type="number" placeholder="Phone number..." />
          <label>Password</label>
          <input type="text" placeholder="Password..." />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Register;
