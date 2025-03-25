import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styles from "./ChatProfiles.module.css";
import Profile from "../profile/User";
import { userContext } from "../../context/UserContext";

const ChatProfiles = () => {
  const [users, setUSers] = useState([]);
  const { setClient, user } = useContext(userContext);
  const url = `http://localhost:3000/api/user/users`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setUSers(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, [url]);
  return (
    <>
      <div className={styles.ChatProfilesDiv}>
        <div className={styles.ChatProfilesHead}>
          <div className={styles.filterDiv}>
            <div className={styles.filterDivTitle}>
              <h3>Chats</h3>
            </div>
            <div className={styles.filterDivIcons}>
              <span className="bi bi-pencil-square" title="Add New Chat"></span>
              <span className="bi bi-filter" title="Filter"></span>
            </div>
          </div>
          <div className={styles.searchDiv}>
            <span className="bi bi-search"></span>
            <input type="text" placeholder="Search and Add New Chat" />
          </div>
        </div>
        <div className={styles.ChatProfileList}>
          {user?.contacts?.map((item, index) => (
            <>
              <div onClick={() => setClient(item)} key={index}>
                <Profile item={item} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatProfiles;
