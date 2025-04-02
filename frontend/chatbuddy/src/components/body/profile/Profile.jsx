import React, { useContext } from "react";
import "./Profile.css";
import { appContext } from "../../../appContext/Context";

const Profile = () => {
  const { setActiveSection, isProfile, setIsProfile } = useContext(appContext);
  return (
    <div className="clientProfile">
      <div className="clientProfileHeader">
        <p>Profile</p>
        <button
          onClick={() => {
            setIsProfile(!isProfile);
            setActiveSection("chat");
          }}
        >
          close
        </button>
      </div>
      <div className="clientProfileAvatar">
        <img src="default_avatar.png" alt="" />
      </div>
      <div className="clientProfileOption">
        <ul>
          <li>
            <span>
              <i className="bi bi-chat"></i>
            </span>
            <p>DM</p>
          </li>
          <li>
            <span>
              <i className="bi bi-camera-video"></i>
            </span>
            <p>video</p>
          </li>
          <li>
            <span>
              <i className="bi bi-telephone"></i>
            </span>
            <p>call</p>
          </li>
          <li>
            <span>
              <i className="bi bi-three-dots"></i>
            </span>
            <p>more</p>
          </li>
        </ul>
      </div>
      <div className="clientProfileDetails">
        <label>Name</label>
        <p>jarvis</p>
        <label>About</label>
        <p>I am busy</p>
        <label>Phone</label>
        <p>+91 7250761747</p>
      </div>
      <div className="clientProfileFiles">
        <p>
          Files <span>see all</span>
        </p>
        <div className="files"></div>
      </div>
    </div>
  );
};

export default Profile;
