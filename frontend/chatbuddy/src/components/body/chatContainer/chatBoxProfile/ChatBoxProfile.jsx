import React, { useContext } from "react";
import "./ChatBoxProfile.css";
import { appContext } from "../../../../appContext/Context";

const ChatBoxProfile = () => {
  const { isProfile, setIsProfile, setActiveSection } = useContext(appContext);
  return (
    <div className="chatBoxProfile">
      <div
        className="chatBoxProfileAvatar"
        onClick={() => {
          setIsProfile(!isProfile);
          setActiveSection("profile");
        }}
      >
        <img src="/default_avatar.png" alt="" />
      </div>
      <div className="chatBoxProfileName ">
        <p>name</p>
      </div>
      <div className="chatBoxProfileBtn">
        <p
          onClick={() => {
            setIsProfile(!isProfile);
            setActiveSection("profile");
          }}
        >
          profile
        </p>
      </div>
    </div>
  );
};

export default ChatBoxProfile;
