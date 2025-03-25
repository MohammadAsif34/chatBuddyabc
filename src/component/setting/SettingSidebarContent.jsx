import React, { useContext, useEffect } from "react";
import styles from "./SettingSidebarContent.module.css";
import { userContext } from "../../context/UserContext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  // const token = Cookies.get("accesstoken");
  const { client, user, userRef } = useContext(userContext);
  // Cookies.set("token", "tiken sjkbsdlbsdg", { expires: 1 });
  // const token = Cookies.get("token");
  // alert(token);
  return (
    <>
      <div className={styles.settingProfile}>
        <div className={styles.avatar}>
          <img src={user?.avatar || "/chatBuddy/avatar1.png"} alt="" />
        </div>

        <div className={styles.name}>
          <p>{user?.name || "default_name"}</p>
          <span className="bi bi-pencil"></span>
        </div>
        <div className={styles.about}>
          <label>About</label>
          <p>{user?.about || "default_about"}</p>
          <span className="bi bi-pencil"></span>
        </div>
        <div className={styles.phone}>
          <label>Phone number</label>
          <p>+91 {user?.phone || "0000000000"}</p>
        </div>
        <p></p>
      </div>
      <div className={styles.logout}>
        <button
          onClick={() => {
            sessionStorage.clear();
            navigate("/chatBuddy/login");
          }}
        >
          Logout
        </button>
        <button onClick={() => navigate("/chatBuddy/login")}>login</button>
        <p>
          Chat history on this computer will be cleared when you are log out.
        </p>
      </div>
    </>
  );
};

const General = () => {
  return <div>this is general div</div>;
};
const Account = () => {
  return <div>this is Accout div</div>;
};
const Chats = () => {
  return <div>this is chats div</div>;
};
const VideoVoice = () => {
  return <div>this is video and voice div</div>;
};
const Notifications = () => {
  return <div>this is notifications div</div>;
};
const Parsonalization = () => {
  return <div>this is personlization div</div>;
};
const Storage = () => {
  return <div>this is storage div</div>;
};
const Help = () => {
  return <div>this is help div</div>;
};
const SettingSidebarContent = ({ Value }) => {
  return (
    <>
      {Value}
      <br />
      <br />
      {/* <Value />
      <General />
      <Chats />
      <Account />
      <Notifications />
      <VideoVoice />
      <Parsonalization />
      <Storage />
      <Help />
      */}
      <Profile />
    </>
  );
};

export default SettingSidebarContent;
