import React, { useContext, useEffect, useState } from "react";
import styles from "./User.module.css";
import axios from "axios";
import { userContext } from "../../context/UserContext";

const Profile = ({ item }) => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    try {
      const api = "http://localhost:3000/api/user/client";
      axios
        .post(api, { item }, { withCredentials: true })
        .then((res) => setValue(res.data))
        .catch((err) => console.log(err));
      // alert(JSON.stringify(value));
    } catch (error) {
      alert("error while proile data");
    }
  }, []);
  return (
    <>
      <div className={styles.profileDiv}>
        <div className={styles.avatar}>
          <img src={value?.avatar || "/chatBuddy/default_avatar.png"} alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.name_status}>
            <p>{value?.name || "default_name"}</p>
            <span>default</span>
          </div>
          <div className={styles.lastMssg}>
            <span className={styles.unread}>1</span>
            default_message
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
