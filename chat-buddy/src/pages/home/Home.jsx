import styles from "./Home.module.css";
import React, { useContext, useEffect } from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import ChatProfiles from "../../component/chatProfiles/ChatProfiles";
import ChatBox from "../../component/chatBox/ChatBox";
import { userContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const { user, setUser, client, userRef } = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    let status = sessionStorage.getItem("session");
    if (!status) {
      alert("user not login");
      return navigate("/chatBuddy/login");
    }
    try {
      if (status) status = JSON.parse(status);
      if (status.isLogin == true) {
        const userId = status.userId;
        const api = "http://localhost:3000/api/user/user";
        axios
          .post(api, { userId }, { withCredentials: true })
          .then((res) => setUser(res.data))
          .catch((err) => alert("something :: " + err));
      }
    } catch (error) {
      alert("user not login");
      navigate("/chatBuddy/login");
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className={styles.homePage}>
        <div className={styles.header}>
          <span className="bi bi-chat-dots"></span>&nbsp;ChatBuddy [client :
          {client?.name || "client"} ] , [User : {user?.name || "user"} ]
          <button onClick={() => alert(JSON.stringify(user))}>data list</button>
        </div>
        <div className={styles.body}>
          <Sidebar />
          <ChatProfiles />
          <ChatBox />
        </div>
      </div>
    </>
  );
};

export default Home;
