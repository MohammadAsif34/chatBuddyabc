import React, { useEffect, useState } from "react";
import styles from "./Setting.module.css";
import SettingSidebarContent from "./SettingSidebarContent";

const Setting = ({ title }) => {
  const [page, setPage] = useState(title);
  const [active, setActive] = useState(page);
  useEffect(() => {
    setActive(page);
  }, [page]);

  return (
    <>
      <div className={styles.SettingContainer}>
        <div className={styles.SettingDiv}>
          <div className={styles.SettingSidebar}>
            <ul>
              <li
                className={active === "General" ? "active" : ""}
                onClick={() => setPage("General")}
              >
                <i className="bi bi-cast"></i>
                general
              </li>
              <li onClick={() => setPage("Account")}>
                <i className="bi bi-key active"></i>account
              </li>
              <li onClick={() => setPage("Chats")}>
                <i className="bi bi-wechat active"></i>chats
              </li>
              <li onClick={() => setPage("Video&Voice")}>
                <i className="bi bi-camera-video"></i>video & voice
              </li>
              <li onClick={() => setPage("Notifications")}>
                <i className="bi bi-bell"></i>notifications
              </li>
              <li onClick={() => setPage("Parsonalization")}>
                <i className="bi bi-brush"></i>parsonalization
              </li>
              <li onClick={() => setPage("Storage")}>
                <i className="bi bi-database"></i>storage
              </li>
              <li onClick={() => setPage("Help")}>
                <i className="bi bi-info-circle"></i>help
              </li>
            </ul>
            <span onClick={() => setPage("Profile")}>
              <i className="bi bi-person-circle"></i>Profile
            </span>
          </div>
          <div className={styles.settingContent}>
            <SettingSidebarContent Value={`${page}`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
